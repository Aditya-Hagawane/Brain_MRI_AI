
import { useState } from "react";
import {
  Brain,
  Layers,
  Image as ImageIcon,
  Info,
  Eye,
  Sparkles,
  ArrowLeft,
  Activity,
} from "lucide-react";

import PageHeading from "../components/PageHeading";

function ExplainableAI({ image, navigate }) {
  const [method, setMethod] = useState("gradcam");
  const [opacity, setOpacity] = useState(50);

  return (
    <div className="explain-page">
      <PageHeading
        eyebrow="MODEL INTERPRETABILITY"
        title="Explainable AI"
        subtitle="Understand which regions of an MRI image influence the model's prediction."
      />

      <div className="explain-status">
        <div className="status-icon">
          <Brain size={20} />
        </div>

        <div>
          <strong>Explainability engine</strong>
          <p>Waiting for trained model integration</p>
        </div>

        <span className="pending-badge">Pending</span>
      </div>

      <div className="explain-toolbar">
        <div>
          <span className="toolbar-label">Visualization method</span>

          <div className="method-buttons">
            <button
              className={method === "gradcam" ? "method-active" : ""}
              onClick={() => setMethod("gradcam")}
            >
              Grad-CAM
            </button>

            <button
              className={method === "gradcam++" ? "method-active" : ""}
              onClick={() => setMethod("gradcam++")}
            >
              Grad-CAM++
            </button>
          </div>
        </div>

        <div className="method-description">
          <Sparkles size={17} />
          {method === "gradcam"
            ? "Gradient-weighted Class Activation Mapping"
            : "Advanced Class Activation Mapping"}
        </div>
      </div>

      <div className="explain-image-grid">

        {/* Original MRI */}
        <div className="explain-panel">
          <div className="explain-panel-heading">
            <div>
              <h3>Original MRI</h3>
              <p>Uploaded brain scan</p>
            </div>

            <ImageIcon size={20} />
          </div>

          <div className="explain-image-area">
            {image?.preview ? (
              <img
                src={image.preview}
                alt="Original uploaded MRI"
                className="explain-mri-image"
              />
            ) : (
              <div className="explain-empty">
                <ImageIcon size={35} />
                <strong>No MRI image available</strong>
                <p>Upload an MRI image to view it here.</p>
                <button onClick={() => navigate("upload")}>
                  Upload MRI
                </button>
              </div>
            )}
          </div>

          {image && (
            <div className="image-file-info">
              <span>File name</span>
              <strong>{image.name}</strong>
            </div>
          )}
        </div>

        {/* Heatmap */}
        <div className="explain-panel">
          <div className="explain-panel-heading">
            <div>
              <h3>Attention Heatmap</h3>
              <p>{method === "gradcam" ? "Grad-CAM" : "Grad-CAM++"} visualization</p>
            </div>

            <Layers size={20} />
          </div>

          <div className="explain-image-area heatmap-area">
            <div className="heatmap-placeholder">
              <div className="heatmap-symbol">
                <Brain size={42} />
              </div>

              <strong>Heatmap not generated</strong>

              <p>
                Connect the trained deep learning model to generate
                the actual attention heatmap.
              </p>

              <span>Backend integration required</span>
            </div>
          </div>

          <div className="image-file-info">
            <span>Visualization status</span>
            <strong>Awaiting model response</strong>
          </div>
        </div>
      </div>

      {/* Opacity control */}
      <div className="explain-panel opacity-panel">
        <div className="opacity-heading">
          <div>
            <h3>Heatmap Opacity</h3>
            <p>Adjust the intended overlay transparency.</p>
          </div>

          <strong>{opacity}%</strong>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
          className="opacity-slider"
        />

        <div className="slider-labels">
          <span>Transparent</span>
          <span>Opaque</span>
        </div>

        <p className="control-note">
          This setting is saved in the interface only. It will control
          the actual heatmap overlay after backend integration.
        </p>
      </div>

      {/* Explanation information */}
      <div className="explain-info-grid">

        <div className="explain-info-card">
          <div className="info-card-icon purple">
            <Eye size={21} />
          </div>

          <h3>What is Grad-CAM?</h3>

          <p>
            Grad-CAM uses gradients from a convolutional neural network
            to highlight important image regions that influence a
            particular prediction.
          </p>
        </div>

        <div className="explain-info-card">
          <div className="info-card-icon blue">
            <Activity size={21} />
          </div>

          <h3>Why is it useful?</h3>

          <p>
            It helps researchers understand which areas of an MRI image
            contribute to the model's classification decision.
          </p>
        </div>

        <div className="explain-info-card">
          <div className="info-card-icon orange">
            <Info size={21} />
          </div>

          <h3>Research limitation</h3>

          <p>
            Heatmaps are model explanations, not proof of disease.
            They must be evaluated carefully and are not a clinical diagnosis.
          </p>
        </div>

      </div>

      <div className="explain-bottom">
        <button
          className="secondary-btn"
          onClick={() => navigate("results")}
        >
          <ArrowLeft size={17} />
          Back to Results
        </button>

        <button
          className="primary-btn"
          onClick={() => navigate("segmentation")}
        >
          Continue to Segmentation
        </button>
      </div>
    </div>
  );
}

export default ExplainableAI;
