from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATASETS_DIR = PROJECT_ROOT/"datasets"
#MODELS_DIR = PROJECT_ROOT/"models"
#OUTPUTS_DIR = PROJECT_ROOT/"outputs"
#REPORTS_DIR = PROJECT_ROOT/"reports"
TRAIN_DIR = DATASETS_DIR / "brainTumorMRIDataset" / "brisc2025" / "classification_task" / "train"
TEST_DIR = DATASETS_DIR / "brainTumorMRIDataset" / "brisc2025" / "classification_task" / "test"
SEG_DIR = DATASETS_DIR / "brainTumorMRIDataset" / "brisc2025" / "segmentation_task" 