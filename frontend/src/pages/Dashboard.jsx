
import {
  ScanLine,
  BrainCircuit,
  Layers,
  FileText,
  Brain,
  ChevronRight,
  Clock3,
  Database,
  Activity,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

import StatCard from "../components/StatCard";

function Dashboard({ navigate }) {

  const stats = [
    {
      label: "Total Analyses",
      value: "0",
      icon: ScanLine,
      note: "MRI scans analyzed"
    },
    {
      label: "AI Models",
      value: "4",
      icon: BrainCircuit,
      note: "Architectures planned"
    },
    {
      label: "MRI Categories",
      value: "4",
      icon: Layers,
      note: "Classification classes"
    },
    {
      label: "Reports Generated",
      value: "0",
      icon: FileText,
      note: "PDF reports created"
    }
  ];

  const categories = [
    { name: "Glioma", number: "01" },
    { name: "Meningioma", number: "02" },
    { name: "Pituitary Tumor", number: "03" },
    { name: "No Tumor", number: "04" }
  ];

  const models = [
    "CNN",
    "ResNet",
    "EfficientNet",
    "DenseNet"
  ];

  return (
    <div className="dashboard-page">

      {/* Welcome Section */}

      <section className="welcome">

        <div>
          <div className="eyebrow">
            <Sparkles size={14} />
            AI RESEARCH PLATFORM
          </div>

          <h1>Brain MRI Intelligence</h1>

          <p>
            Welcome to NeuroScan AI. Analyze MRI images,
            explore predictions and understand AI decisions.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("upload")}
        >
          <ScanLine size={17} />
          New Analysis
        </button>

      </section>


      {/* Statistics Cards */}

      <section className="stats-grid">

        {stats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            icon={item.icon}
            note={item.note}
          />
        ))}

      </section>


      {/* Main Dashboard */}

      <section className="dashboard-grid">

        {/* MRI Upload Card */}

        <div className="panel main-panel">

          <div className="panel-heading">

            <div>
              <h3>Start MRI Analysis</h3>
              <p>
                Upload a brain MRI image to begin your analysis.
              </p>
            </div>

            <ScanLine size={23} />

          </div>

          <div className="start-box">

            <div className="large-icon">
              <Brain size={40} />
            </div>

            <h3>Ready to analyze?</h3>

            <p>
              Select an MRI image and start the
              AI classification workflow.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("upload")}
            >
              Upload MRI Image
              <ChevronRight size={17} />
            </button>

          </div>

        </div>


        {/* Classification Categories */}

        <div className="panel">

          <div className="panel-heading">

            <div>
              <h3>Classification Categories</h3>
              <p>Four MRI classification classes</p>
            </div>

            <Database size={22} />

          </div>

          <div className="category-list">

            {categories.map((category) => (
              <div
                className="category-item"
                key={category.number}
              >

                <span className="category-number">
                  {category.number}
                </span>

                <span>{category.name}</span>

                <ChevronRight size={16} />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Models and Activity */}

      <section className="dashboard-grid lower-grid">

        {/* Deep Learning Models */}

        <div className="panel">

          <div className="panel-heading">

            <div>
              <h3>Deep Learning Models</h3>
              <p>Research architectures</p>
            </div>

            <BrainCircuit size={22} />

          </div>

          <div className="model-list">

            {models.map((model) => (
              <div className="model-item" key={model}>

                <BrainCircuit size={17} />

                <span>{model}</span>

                <span className="pending-tag">
                  Pending
                </span>

              </div>
            ))}

          </div>

          <button
            className="text-action"
            onClick={() => navigate("models")}
          >
            View Model Comparison
            <ArrowUpRight size={15} />
          </button>

        </div>


        {/* Recent Activity */}

        <div className="panel">

          <div className="panel-heading">

            <div>
              <h3>Recent Activity</h3>
              <p>Your latest MRI analyses</p>
            </div>

            <Clock3 size={22} />

          </div>

          <div className="empty-state small-empty">

            <Activity size={30} />

            <h3>No activity yet</h3>

            <p>
              Your completed MRI analyses
              will appear here.
            </p>

          </div>

        </div>

      </section>


      {/* Research Information */}

      <section className="research-banner">

        <div className="research-icon">
          <BrainCircuit size={27} />
        </div>

        <div>
          <h3>AI-Based Brain MRI Research</h3>

          <p>
            Deep learning classification with Grad-CAM
            explainability and U-Net segmentation.
          </p>
        </div>

        <button
          className="secondary-btn"
          onClick={() => navigate("about")}
        >
          Explore Project
          <ChevronRight size={16} />
        </button>

      </section>

    </div>
  );
}

export default Dashboard;
