
import { useState } from "react";

import {
  UploadCloud,
  Image,
  FileImage,
  X,
  CheckCircle,
  ShieldCheck,
  ScanLine,
  ArrowRight,
  RefreshCw
} from "lucide-react";

import PageHeading from "../components/PageHeading";

function Upload({ image, setImage, navigate }) {

  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  const MAX_SIZE = 10 * 1024 * 1024;

  const selectImage = (file) => {

    setError("");

    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError("Only JPG, JPEG and PNG images are supported.");
      return;
    }

    if (file.size > MAX_SIZE) {
      setError("File size must be less than 10 MB.");
      return;
    }

    const preview = URL.createObjectURL(file);

    setImage({
      file,
      preview,
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2)
    });
  };

  const removeImage = () => {

    if (image?.preview) {
      URL.revokeObjectURL(image.preview);
    }

    setImage(null);
    setError("");
  };

  return (
    <div className="upload-page">

      <PageHeading
        eyebrow="IMAGE PROCESSING"
        title="New MRI Analysis"
        subtitle="Upload a brain MRI image to begin the AI analysis workflow."
      />

      <div className="upload-layout">

        {/* Upload Section */}

        <div className="panel upload-panel">

          <div className="panel-heading">

            <div>
              <h3>Upload Brain MRI Scan</h3>
              <p>Select an MRI image from your device.</p>
            </div>

            <span className="step-label">
              STEP 01 / 03
            </span>

          </div>

          {!image ? (

            <label
              className={`drop-zone ${dragging ? "dragging" : ""}`}

              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}

              onDragLeave={() => {
                setDragging(false);
              }}

              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                selectImage(e.dataTransfer.files[0]);
              }}
            >

              <div className="upload-icon">
                <UploadCloud size={42} />
              </div>

              <h3>Drag and drop your MRI image</h3>

              <p>
                Upload a brain MRI scan for classification.
              </p>

              <span className="browse-label">
                Browse Files
              </span>

              <small>
                Supported formats: JPG, JPEG and PNG
              </small>

              <small>
                Maximum file size: 10 MB
              </small>

              <input
                type="file"
                accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                hidden
                onChange={(e) => selectImage(e.target.files[0])}
              />

            </label>

          ) : (

            <div className="uploaded-image">

              <div className="preview-header">

                <div className="preview-file-icon">
                  <FileImage size={21} />
                </div>

                <div className="preview-file-info">
                  <strong>{image.name}</strong>
                  <small>{image.size} MB · Image uploaded</small>
                </div>

                <CheckCircle
                  color="#20b981"
                  size={21}
                />

              </div>

              <div className="image-display">
                <img
                  src={image.preview}
                  alt="Brain MRI preview"
                />
              </div>

              <div className="preview-actions">

                <button
                  className="secondary-btn"
                  onClick={removeImage}
                >
                  <X size={16} />
                  Remove Image
                </button>

                <label className="secondary-btn replace-btn">
                  <RefreshCw size={16} />
                  Replace Image

                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    hidden
                    onChange={(e) => selectImage(e.target.files[0])}
                  />
                </label>

              </div>

            </div>

          )}

          {error && (
            <div className="upload-error">
              {error}
            </div>
          )}

        </div>


        {/* Information Section */}

        <div className="panel upload-info">

          <div className="info-heading">
            <ShieldCheck size={23} />
            <h3>Upload Guidelines</h3>
          </div>

          <div className="guideline-item">
            <CheckCircle size={17} />
            <span>Use clear brain MRI images.</span>
          </div>

          <div className="guideline-item">
            <CheckCircle size={17} />
            <span>Supported image formats: JPG and PNG.</span>
          </div>

          <div className="guideline-item">
            <CheckCircle size={17} />
            <span>Maximum upload size: 10 MB.</span>
          </div>

          <div className="guideline-item">
            <CheckCircle size={17} />
            <span>Use authorized research dataset images.</span>
          </div>

          <div className="info-divider" />

          <h4>Analysis Workflow</h4>

          <div className="workflow-step">
            <span>01</span>
            <div>
              <strong>Image Upload</strong>
              <p>Select your brain MRI image.</p>
            </div>
          </div>

          <div className="workflow-step">
            <span>02</span>
            <div>
              <strong>AI Classification</strong>
              <p>Predict the MRI category using a trained model.</p>
            </div>
          </div>

          <div className="workflow-step">
            <span>03</span>
            <div>
              <strong>Result Visualization</strong>
              <p>View classification and explainability outputs.</p>
            </div>
          </div>

        </div>

      </div>


      {/* Bottom Action */}

      {image && (

        <div className="upload-bottom">

          <div>
            <CheckCircle size={18} color="#20b981" />
            <span>Image selected successfully</span>
          </div>

          <button
            className="primary-btn"
            onClick={() => navigate("results")}
          >
            Continue to Analysis
            <ArrowRight size={17} />
          </button>

        </div>

      )}

      <div className="notice">
        <ShieldCheck size={20} />

        <div>
          <strong>Research and Privacy Notice</strong>

          <p>
            This is an academic research prototype.
            Uploaded images are currently previewed locally
            and are not yet processed by an AI model.
            Do not upload identifiable patient information.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Upload;
