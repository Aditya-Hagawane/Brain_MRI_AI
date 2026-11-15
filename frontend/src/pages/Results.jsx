
import {
  BrainCircuit,
  Activity,
  ScanLine,
  ShieldCheck,
  Clock3,
  FileText,
  Image as ImageIcon,
  AlertCircle,
  ArrowRight,
  Layers
} from "lucide-react";

import PageHeading from "../components/PageHeading";

function Results({ image, navigate }) {
  const categories = [
    {
      name: "Glioma",
      description: "Tumor classification category",
      number: "01"
    },
    {
      name: "Meningioma",
      description: "Tumor classification category",
      number: "02"
    },
    {
      name: "Pituitary Tumor",
      description: "Tumor classification category",
      number: "03"
    },
    {
      name: "No Tumor",
      description: "No tumor classification category",
      number: "04"
    }
  ];

  return (
    <div className="results-page">
      <PageHeading
        eyebrow="AI ANALYSIS"
        title="Analysis Results"
        subtitle="Review MRI analysis output and classification information."
      />

      <section className="results-status">
        <div className="results-status-icon">
          <BrainCircuit size={25} />
        </div>

        <div className="results-status-content">
          <span className="status-label">MODEL STATUS</span>
          <h3>AI model integration pending</h3>
          <p>
            Connect the trained classification model to generate
            predictions and confidence scores.
          </p>
        </div>

        <span className="awaiting-badge">
          <Clock3 size={14} />
          Awaiting model
        </span>
      </section>

      <section className="results-main-grid">
        <div className="results-panel">
          <div className="results-panel-heading">
            <div>
              <h3>MRI Scan</h3>
              <p>Uploaded image preview</p>
            </div>
            <ImageIcon size={21} />
          </div>

          {image?.preview ? (
            <div className="results-image-container">
              <img
                src={image.preview}
                alt="Uploaded brain MRI scan"
                className="results-mri-image"
              />

              <div className="image-file-info">
                <ImageIcon size={16} />
                <span title={image.name}>{image.name}</span>
              </div>
            </div>
          ) : (
            <div className="results-no-image">
              <ScanLine size={38} />
              <h3>No MRI image selected</h3>
              <p>
                Upload a brain MRI image to prepare an analysis.
              </p>

              <button
                className="primary-btn"
                onClick={() => navigate("upload")}
              >
                Upload MRI Image
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="results-panel prediction-panel">
          <div className="results-panel-heading">
            <div>
              <h3>Classification Prediction</h3>
              <p>AI model output</p>
            </div>
            <Activity size={21} />
          </div>

          <div className="prediction-placeholder">
            <div className="prediction-brain-icon">
              <BrainCircuit size={35} />
            </div>

            <h3>Prediction not available yet</h3>

            <p>
              The classification model has not been connected.
              Prediction and confidence values will appear here
              after backend integration.
            </p>

            <div className="prediction-metrics">
              <div>
                <span>Predicted class</span>
                <strong>Not generated</strong>
              </div>

              <div>
                <span>Confidence score</span>
                <strong>Not available</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-panel classification-panel">
        <div className="results-panel-heading">
          <div>
            <h3>Supported Classification Classes</h3>
            <p>Four categories defined for this research project</p>
          </div>
          <Layers size={21} />
        </div>

        <div className="results-category-grid">
          {categories.map((category) => (
            <div className="results-category-card" key={category.number}>
              <span className="results-category-number">
                {category.number}
              </span>

              <div>
                <h4>{category.name}</h4>
                <p>{category.description}</p>
              </div>

              <span className="class-pending">Awaiting model</span>
            </div>
          ))}
        </div>
      </section>

      <section className="results-notice">
        <ShieldCheck size={20} />

        <div>
          <strong>Research prototype notice</strong>
          <p>
            This application is intended for academic research and
            demonstration. It is not a medical diagnostic tool.
            Results must not be used for clinical decisions.
          </p>
        </div>
      </section>

      <div className="results-bottom-actions">
        <button
          className="secondary-btn"
          onClick={() => navigate("upload")}
        >
          <ScanLine size={16} />
          Upload another MRI
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("explain")}
        >
          Explore Explainable AI
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Results;
