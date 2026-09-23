import torch 
import torch.nn as nn
import os
import csv
from models import BasicCNN
from data_loader import train_loader, val_loader


model = BasicCNN()

criterion = nn.CrossEntropyLoss()

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

os.makedirs("outputs", exist_ok=True)

history = []

best_val_accuracy = 0.0

epochs = 10
    
for epoch in range(epochs):

    model.train()

    running_loss = 0.0

    for images, labels in train_loader:

        optimizer.zero_grad()

        outputs = model(images)

        loss = criterion(outputs, labels)

        loss.backward()

        optimizer.step()

        running_loss += loss.item()

    train_loss = running_loss / len(train_loader)

    print(
        f"Epoch [{epoch + 1}/{epochs}], "
        f"Loss: {train_loss:.4f}"
    )

    model.eval()

    val_loss = 0.0
    correct = 0
    total = 0

    with torch.no_grad():

        for images, labels in val_loader:

            outputs = model(images)

            loss = criterion(outputs, labels)

            val_loss += loss.item()

            _, predicted = torch.max(outputs, 1)

            total += labels.size(0)
            correct += (predicted == labels).sum().item()

    val_loss = val_loss / len(val_loader)
    val_accuracy = 100 * correct / total

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
            "models/basic_cnn_best.pth"
        )

        print("Best model saved.")


with open("outputs/cnn_training.csv", "w", newline="") as file:

    writer = csv.writer(file)

    writer.writerow([
        "Epoch",
        "Training Loss",
        "Validation Loss",
        "Validation Accuracy"
    ])

    writer.writerows(history)

print("Training history saved.")
