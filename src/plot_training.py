import pandas as pd
import matplotlib.pyplot as plt


df = pd.read_csv("outputs/cnn_training.csv")


# Training and validation loss
plt.figure(figsize=(8, 5))

plt.plot(
    df["Epoch"],
    df["Training Loss"],
    marker="o",
    label="Training Loss"
)

plt.plot(
    df["Epoch"],
    df["Validation Loss"],
    marker="o",
    label="Validation Loss"
)

plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.title("Basic CNN - Training and Validation Loss")
plt.xticks(df["Epoch"])
plt.legend()
plt.grid(True)

plt.tight_layout()

plt.savefig(
    "outputs/basic_cnn_loss.png",
    dpi=200
)

plt.show()


# Validation accuracy
plt.figure(figsize=(8, 5))

plt.plot(
    df["Epoch"],
    df["Validation Accuracy"],
    marker="o",
    label="Validation Accuracy"
)

plt.xlabel("Epoch")
plt.ylabel("Validation Accuracy (%)")
plt.title("Basic CNN - Validation Accuracy")
plt.xticks(df["Epoch"])
plt.legend()
plt.grid(True)

plt.tight_layout()

plt.savefig(
    "outputs/basic_cnn_accuracy.png",
    dpi=200
)

plt.show()