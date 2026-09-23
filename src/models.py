import torch.nn as nn
from torchvision.models import resnet18, ResNet18_Weights
from torchvision.models import efficientnet_b0, EfficientNet_B0_Weights
from torchvision.models import densenet121, DenseNet121_Weights

#Basic CNN
class BasicCNN(nn.Module):

    def __init__(self, num_classes=4):
        super().__init__()

        self.features = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),

            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),

            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )

        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(128 * 28 * 28, 256),
            nn.ReLU(),
            nn.Linear(256, num_classes)
        )

    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        return x
    

#ResNet18
class ResNet18Model(nn.Module):

    def __init__(self, num_classes=4):
        super().__init__()

        self.model = resnet18(
            weights=ResNet18_Weights.DEFAULT
        )

        self.model.fc = nn.Linear(
            self.model.fc.in_features,
            num_classes
        )

    def forward(self, x):
        return self.model(x)
    
#EfficentNet
class EfficientNetB0Model(nn.Module):

    def __init__(self, num_classes=4):
        super().__init__()

        self.model = efficientnet_b0(
            weights=EfficientNet_B0_Weights.DEFAULT
        )

        self.model.classifier[1] = nn.Linear(
            self.model.classifier[1].in_features,
            num_classes
        )

    def forward(self, x):
        return self.model(x)
    
#DenseNet
class DenseNet121Model(nn.Module):

    def __init__(self, num_classes=4):
        super().__init__()

        self.model = densenet121(
            weights=DenseNet121_Weights.DEFAULT
        )

        self.model.classifier = nn.Linear(
            self.model.classifier.in_features,
            num_classes
        )

    def forward(self, x):
        return self.model(x)