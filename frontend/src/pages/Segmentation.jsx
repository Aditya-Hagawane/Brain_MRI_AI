
import { useState } from "react";
import {
  Scan,
  Layers,
  Image as ImageIcon,
  Activity,
  Info,
  ArrowLeft,
  Brain,
  Target,
} from "lucide-react";

import PageHeading from "../components/PageHeading";

function Segmentation({ image, navigate }) {
  const [opacity, setOpacity] = useState(50);
  const [viewMode, setViewMode] = useState("mask");

  return (
    <div className="segmentation-page">
      <PageHeading
        eyebrow="IMAGE SEGMENTATION"
        title="Brain Tumor Segmentation"
        subtitle="Explore the U-Net segmentation interface for identifying tumor regions in brain MRI scans."
      />

      <div className="segmentation-status">
        <div className="segmentation-status-icon">
          <Scan size={21} />
        </div>

        <div>
          <strong>U-Net Segmentation Model</strong>
          <p>Waiting for model and backend integration</p>
        </div>

        <span className="segmentation-pending">Not connected</span>
      </div>

      <div className="segmentation-grid">
        {/* Original MRI */}
        <section className="segmentation-panel">
          <div className="segmentation-panel-heading">
            <div>
              <h3>Original MRI Scan</h3>
              <p>Input brain image</p>
            </div>
            <ImageIcon size={20} />
          </div>

          <div className="segmentation-image-area">
            {image?.preview ? (
              <img
                src={image.preview}
                alt="Original brain MRI"
                className="segmentation-mri"
              />
            ) : (
              <div className="segmentation-empty">
                <ImageIcon size={36} />
                <strong>No MRI image uploaded</strong>
                <p>Upload an MRI scan to display it here.</p>
                <button onClick={() => navigate("upload")}>
                  Upload MRI
                </button>
              </div>
            )}
          </div>

          {image && (
            <div className="segmentation-file-info">
              <span>File</span>
              <strong>{image.name}</strong>
            </div>
          )}
        </section>

        {/* Segmentation Mask */}
        <section className="segmentation-panel">
          <div className="segmentation-panel-heading">
            <div>
              <h3>Segmentation Mask</h3>
              <p>Predicted tumor region</p>
            </div>
            <Layers size={20} />
          </div>

          <div className="segmentation-image-area mask-area">
            <div className="mask-placeholder">
              <div className="mask-placeholder-icon">
                <Brain size={42} />
              </div>

              <strong>Segmentation not generated</strong>

              <p>
                The U-Net model will generate a pixel-level mask
                highlighting the tumor region after backend integration.
              </p>

              <span>Awaiting model response</span>
            </div>
          </div>

          <div className="segmentation-file-info">
            <span>Mask status</span>
            <strong>Not available</strong>
          </div>
        </section>
      </div>

      {/* Controls */}
      <section className="segmentation-panel segmentation-controls">
        <div className="segmentation-controls-heading">
          <div>
            <h3>Visualization Controls</h3>
            <p>Configure how the segmentation result will be displayed.</p>
          </div>
          <Target size={21} />
        </div>

        <div className="segmentation-control-grid">
          <div>
            <label className="segmentation-label">Display mode</label>

            <div className="segmentation-mode-buttons">
              <button
                className={viewMode === "mask" ? "mode-selected" : ""}
                onClick={() => setViewMode("mask")}
              >
                Mask View
              </button>

              <button
                className={viewMode === "overlay" ? "mode-selected" : ""}
                onClick={() => setViewMode("overlay")}
              >
                Overlay View
              </button>
            </div>
          </div>

          <div>
            <div className="segmentation-opacity-heading">
              <label className="segmentation-label">
                Mask opacity
              </label>
              <strong>{opacity}%</strong>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="segmentation-slider"
            />
          </div>
        </div>

        <p className="segmentation-control-note">
          These controls update the interface settings only. They will
          control the actual segmentation visualization after U-Net
          integration.
        </p>
      </section>

      {/* Evaluation Metrics */}
      <section>
        <div className="segmentation-section-heading">
          <div>
            <h3>Segmentation Evaluation</h3>
            <p>Model performance metrics</p>
          </div>
          <Activity size={20} />
        </div>

        <div className="segmentation-metrics-grid">
          <div className="segmentation-metric-card">
            <span>Dice Coefficient</span>
            <strong>—</strong>
            <small>Awaiting evaluation</small>
          </div>

          <div className="segmentation-metric-card">
            <span>IoU Score</span>
            <strong>—</strong>
            <small>Awaiting evaluation</small>
          </div>

          <div className="segmentation-metric-card">
            <span>Pixel Accuracy</span>
            <strong>—</strong>
            <small>Awaiting evaluation</small>
          </div>
        </div>
      </section>

      {/* Information */}
      <div className="segmentation-information">
        <Info size={20} />

        <div>
          <strong>About U-Net Segmentation</strong>
          <p>
            U-Net is a convolutional neural network architecture used
            for biomedical image segmentation. It identifies regions
            at pixel level and can produce a mask for the suspected
            tumor area. Actual performance must be evaluated against
            ground-truth masks.
          </p>
        </div>
      </div>

      <div className="segmentation-actions">
        <button
          className="secondary-btn"
          onClick={() => navigate("explain")}
        >
          <ArrowLeft size={17} />
          Back to Explainable AI
        </button>

        <button
          className="primary-btn"
          onClick={() => navigate("models")}
        >
          Continue to Model Comparison
        </button>
      </div>
    </div>
  );
}

export default Segmentation;
