from paths import TRAIN_DIR, TEST_DIR, SEG_DIR
from torchvision.datasets import ImageFolder
import pandas as pd 
from PIL import Image
import random
import matplotlib.pyplot as plt
import numpy as np 
import os

#Train dataset inspection
brain_mri_data = ImageFolder(TRAIN_DIR)

print("\n--- CLASSIFICATION TRAIN SET ---")

print("Total images: ",len(brain_mri_data))
print("Classes: ",brain_mri_data.classes)
print("Class mapping: ",brain_mri_data.class_to_idx)
class_counts = pd.Series(brain_mri_data.targets).value_counts().sort_index()
class_counts.index = brain_mri_data.classes
print("Class counts: \n",class_counts)

image,label = brain_mri_data[0]
print("Image info: ",image)
print("Image class: ",brain_mri_data.classes[label])

#image sizes 
image_sizes = []

for image_path, _ in brain_mri_data.samples:
    image = Image.open(image_path)
    image_sizes.append(image.size)

print("Image Sizes: ",set(image_sizes))

#Random 5 images from each group
fig, axes = plt.subplots(4, 5, figsize=(12, 10))

for row, class_name in enumerate(brain_mri_data.classes):
    class_index = brain_mri_data.class_to_idx[class_name]
    
    class_images = [
        (image, label)
        for image, label in brain_mri_data
        if label == class_index
    ]
    
    samples = random.sample(class_images, 5)
    
    for col, (image, label) in enumerate(samples):
        axes[row, col].imshow(image)
        axes[row, col].axis("off")

    axes[row, 0].set_ylabel(class_name, fontsize=12)

plt.tight_layout()
plt.show()

#checking image modes -(RGB  &  Grayscale)
image_modes = []

for image_path, _ in brain_mri_data.samples:
    with Image.open(image_path) as image:
        image_modes.append(image.mode)

print("Image modes: ",pd.Series(image_modes).value_counts())

#corrupted unreadable images
bad_images = []

for image_path, _ in brain_mri_data.samples:
    try:
        with Image.open(image_path) as image:
            image.verify()
    except Exception:
        bad_images.append(image_path)

print("Unreadable images:", len(bad_images))

#pixel-value check
sample_indices = random.sample(range(len(brain_mri_data)), 10)

for idx in sample_indices:
    image, label = brain_mri_data[idx]
    image_array = np.array(image)
    
    print(
        "Image pixel info: \n",
        brain_mri_data.classes[label],
        "|",
        "Min:", image_array.min(),
        "| Max:", image_array.max(),
        "| Mean:", round(image_array.mean(), 2),
        "| Std:", round(image_array.std(), 2)
    )
    
#Test dataset inspection
test_data = ImageFolder(TEST_DIR)

print("\n--- CLASSIFICATION TEST SET ---")

print("Total images:", len(test_data))
print("Classes:", test_data.classes)
print("Class mapping:", test_data.class_to_idx)

test_class_counts = pd.Series(test_data.targets).value_counts().sort_index()
test_class_counts.index = test_data.classes

print("Class counts:")
print(test_class_counts)

#Segmentaion inspection
seg_train_images = os.listdir(os.path.join(SEG_DIR, "train", "images"))
seg_train_masks = os.listdir(os.path.join(SEG_DIR, "train", "masks"))

seg_test_images = os.listdir(os.path.join(SEG_DIR, "test", "images"))
seg_test_masks = os.listdir(os.path.join(SEG_DIR, "test", "masks"))

print("\n--- SEGMENTATION DATASET ---")

print("Training images:", len(seg_train_images))
print("Training masks:", len(seg_train_masks))

print("Test images:", len(seg_test_images))
print("Test masks:", len(seg_test_masks))

#verify weather the images and masks actually match correctly by filename.
print("\n--- CHECK IMAGE-MASK PAIRING ---")

train_image_names = {os.path.splitext(name)[0] for name in seg_train_images}
train_mask_names = {os.path.splitext(name)[0] for name in seg_train_masks}

test_image_names = {os.path.splitext(name)[0] for name in seg_test_images}
test_mask_names = {os.path.splitext(name)[0] for name in seg_test_masks}

print("Train images without masks:", len(train_image_names - train_mask_names))
print("Train masks without images:", len(train_mask_names - train_image_names))

print("Test images without masks:", len(test_image_names - test_mask_names))
print("Test masks without images:", len(test_mask_names - test_image_names))

#MRI + Mask pairs
sample_names = random.sample(seg_train_images, 3)

fig, axes = plt.subplots(3, 2, figsize=(8, 12))

for row, image_name in enumerate(sample_names):

    image_path = os.path.join(SEG_DIR, "train", "images", image_name)

    mask_name = os.path.splitext(image_name)[0] + ".png"
    mask_path = os.path.join(SEG_DIR, "train", "masks", mask_name)

    image = Image.open(image_path)
    mask = Image.open(mask_path)

    axes[row, 0].imshow(image)
    axes[row, 0].set_title("MRI Image")
    axes[row, 0].axis("off")

    axes[row, 1].imshow(mask)
    axes[row, 1].set_title("Mask")
    axes[row, 1].axis("off")

plt.tight_layout()
plt.show()