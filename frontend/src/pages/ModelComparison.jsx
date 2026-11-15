
import {
  Brain,
  Layers,
  Activity,
  BarChart3,
  Target,
  Clock,
  Info,
} from "lucide-react";

import PageHeading from "../components/PageHeading";

const models = [
  {
    name: "CNN",
    fullName: "Convolutional Neural Network",
    description:
      "A baseline deep learning architecture for extracting image features and classifying MRI scans.",
    icon: Brain,
    color: "purple",
  },
  {
    name: "ResNet",
    fullName: "Residual Network",
    description:
      "Uses residual connections to support deeper neural networks and improve feature learning.",
    icon: Layers,
    color: "blue",
  },
  {
    name: "EfficientNet",
    fullName: "Efficient Convolutional Network",
    description:
      "Balances network depth, width, and resolution for computationally efficient image classification.",
    icon: Activity,
    color: "green",
  },
  {
    name: "DenseNet",
    fullName: "Densely Connected Network",
    description:
      "Connects layers densely to encourage feature reuse and improve information flow.",
    icon: Target,
    color: "orange",
  },
];

const metrics = [
  "Accuracy",
  "Precision",
  "Recall",
  "F1-Score",
];

function ModelComparison() {
  return (
    <div className="model-comparison-page">
      <PageHeading
        eyebrow="MODEL EVALUATION"
        title="Model Comparison"
        subtitle="Compare the performance of different deep learning architectures for brain MRI classification."
      />

      <div className="model-evaluation-status">
        <div className="evaluation-icon">
          <BarChart3 size={21} />
        </div>

        <div>
          <strong>Evaluation results</strong>
          <p>Waiting for trained model evaluation data</p>
        </div>

        <span>Pending</span>
      </div>

      {/* Model Cards */}
      <section>
        <div className="model-section-heading">
          <div>
            <h3>Available Architectures</h3>
            <p>Four models planned for comparative evaluation</p>
          </div>
          <span className="model-count">04 Models</span>
        </div>

        <div className="architecture-grid">
          {models.map((model) => {
            const Icon = model.icon;

            return (
              <div className="architecture-card" key={model.name}>
                <div className={`architecture-icon ${model.color}`}>
                  <Icon size={23} />
                </div>

                <div className="architecture-title">
                  <h3>{model.name}</h3>
                  <span>Not evaluated</span>
                </div>

                <p className="architecture-full-name">
                  {model.fullName}
                </p>

                <p className="architecture-description">
                  {model.description}
                </p>

                <div className="architecture-footer">
                  <span>Model status</span>
                  <strong>Awaiting training</strong>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metric Comparison */}
      <section className="comparison-panel">
        <div className="comparison-heading">
          <div>
            <h3>Performance Metrics</h3>
            <p>Evaluation comparison across all four models</p>
          </div>

          <BarChart3 size={21} />
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Model</th>
                {metrics.map((metric) => (
                  <th key={metric}>{metric}</th>
                ))}
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {models.map((model) => (
                <tr key={model.name}>
                  <td className="comparison-model-name">
                    {model.name}
                  </td>

                  {metrics.map((metric) => (
                    <td key={metric}>—</td>
                  ))}

                  <td>
                    <span className="metric-pending">
                      Pending
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="comparison-note">
          Metrics will be populated using the evaluation results
          from the trained classification models.
        </p>
      </section>

      {/* Chart Placeholder */}
      <section className="comparison-panel">
        <div className="comparison-heading">
          <div>
            <h3>Visual Performance Comparison</h3>
            <p>Model performance visualization</p>
          </div>

          <Activity size={21} />
        </div>

        <div className="comparison-chart-placeholder">
          <div className="chart-placeholder-icon">
            <BarChart3 size={38} />
          </div>

          <strong>Comparison chart not available</strong>

          <p>
            Train and evaluate the models to generate accuracy,
            precision, recall, and F1-score comparison charts.
          </p>

          <span>Evaluation data required</span>
        </div>
      </section>

      {/* Evaluation Information */}
      <div className="evaluation-info-grid">
        <div className="evaluation-info-card">
          <Target size={21} />
          <h3>Accuracy</h3>
          <p>
            Measures the proportion of correctly classified MRI
            images out of all evaluated images.
          </p>
        </div>

        <div className="evaluation-info-card">
          <Activity size={21} />
          <h3>Precision and Recall</h3>
          <p>
            Precision measures correct positive predictions.
            Recall measures how many actual positive cases are identified.
          </p>
        </div>

        <div className="evaluation-info-card">
          <Clock size={21} />
          <h3>F1-Score</h3>
          <p>
            Combines precision and recall using their harmonic mean
            to provide a balanced evaluation measure.
          </p>
        </div>
      </div>

      <div className="model-comparison-notice">
        <Info size={20} />
        <p>
          <strong>Research note:</strong> All models must be evaluated
          on the same held-out test dataset for a fair comparison.
          No performance values are displayed until actual evaluation
          results are available.
        </p>
      </div>
    </div>
  );
}

export default ModelComparison;
