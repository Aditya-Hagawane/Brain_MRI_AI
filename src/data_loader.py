from paths import TRAIN_DIR
from preprocessing import train_transform
from torchvision.datasets import ImageFolder
from sklearn.model_selection import train_test_split
from torch.utils.data import Subset
from torch.utils.data import DataLoader


train_data = ImageFolder(
    TRAIN_DIR,
    transform=train_transform
)

indices = list(range(len(train_data)))
labels = train_data.targets

train_indices, val_indices = train_test_split(
    indices,
    test_size=0.2,
    random_state=42,
    stratify=labels
)

train_dataset = Subset(train_data, train_indices)
val_dataset = Subset(train_data, val_indices)

train_loader = DataLoader(
    train_dataset,
    batch_size=32,
    shuffle=True,
    num_workers=0
)

val_loader = DataLoader(
    val_dataset,
    batch_size=32,
    shuffle=False,
    num_workers=0
)

