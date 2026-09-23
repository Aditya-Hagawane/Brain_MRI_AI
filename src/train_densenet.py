import csv
import torch
import torch.nn as nn

from models import DenseNet121Model
from data_loader import train_loader, val_loader


model = DenseNet121Model()

criterion = nn.CrossEntropyLoss()

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.0001
)

device = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)

model = model.to(device)

print("Device:", device)
print("Model created successfully")


epochs = 10
best_val_accuracy = 0.0
history = []


for epoch in range(epochs):

    model.train()
    running_loss = 0.0

    for images, labels in train_loader:

        images = images.to(device)
        labels = labels.to(device)

        optimizer.zero_grad()

        outputs = model(images)

        loss = criterion(outputs, labels)

        loss.backward()

        optimizer.step()

        running_loss += loss.item()

    train_loss = running_loss / len(train_loader)


    model.eval()

    val_loss = 0.0
    correct = 0
    total = 0

    with torch.no_grad():

        for images, labels in val_loader:

            images = images.to(device)
            labels = labels.to(device)

            outputs = model(images)

            loss = criterion(outputs, labels)

            val_loss += loss.item()

            _, predicted = torch.max(outputs, 1)

            total += labels.size(0)

            correct += (
                predicted == labels
            ).sum().item()

    val_loss = val_loss / len(val_loader)

    val_accuracy = 100 * correct / total


    print(
        f"Epoch [{epoch + 1}/{epochs}], "
        f"Loss: {train_loss:.4f}"
    )

    print(
        f"Validation Loss: {val_loss:.4f}, "
        f"Validation Accuracy: {val_accuracy:.2f}%"
    )


    history.append([
        epoch + 1,
        train_loss,
        val_loss,
        val_accuracy
    ])


    if val_accuracy > best_val_accuracy:

        best_val_accuracy = val_accuracy

        torch.save(
            model.state_dict(),
            "models/densenet121_best.pth"
        )

        print("Best model saved.")


with open(
    "outputs/densenet121_training.csv",
    "w",
    newline=""
) as file:

    writer = csv.writer(file)

    writer.writerow([
        "Epoch",
        "Training Loss",
        "Validation Loss",
        "Validation Accuracy"
    ])

    writer.writerows(history)


print("Training history saved.")

print(
    f"Best Validation Accuracy: "
    f"{best_val_accuracy:.2f}%"
)