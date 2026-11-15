
import {
  Brain,
  Target,
  Microscope,
  Layers,
  Code2,
  Database,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Activity,
  Image,
  ChartNoAxesCombined,
} from "lucide-react";

import PageHeading from "../components/PageHeading";

function About() {
  const features = [
    {
      icon: Brain,
      title: "Brain MRI Classification",
      description:
        "Classify MRI images into Glioma, Meningioma, Pituitary, and No Tumor categories.",
    },
    {
      icon: Microscope,
      title: "Explainable AI",
      description:
        "Use Grad-CAM and Grad-CAM++ to visualize the image regions that influence model predictions.",
    },
    {
      icon: Layers,
      title: "Tumor Segmentation",
      description:
        "Explore U-Net with MRI image-mask pairs to identify and visualize possible tumor regions.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Model Comparison",
      description:
        "Compare CNN, ResNet, EfficientNet, and DenseNet using classification evaluation metrics.",
    },
    {
      icon: Activity,
      title: "Performance Evaluation",
      description:
        "Evaluate classification and segmentation using suitable performance measures.",
    },
    {
      icon: Image,
      title: "Image Robustness",
      description:
        "Study model performance under image changes such as blur, noise, and contrast variations.",
    },
  ];

  const models = [
    {
      name: "CNN",
      description:
        "A basic convolutional neural network used for image classification.",
    },
    {
      name: "ResNet",
      description:
        "A residual learning architecture designed to train deeper networks.",
    },
    {
      name: "EfficientNet",
      description:
        "An efficient image classification architecture.",
    },
    {
      name: "DenseNet",
      description:
        "A network architecture that connects layers through dense connections.",
    },
    {
      name: "U-Net",
      description:
        "An encoder-decoder architecture explored for tumor-region segmentation.",
    },
  ];

  const technologies = [
    { name: "Python", category: "Main programming language" },
    { name: "PyTorch", category: "Deep learning model training" },
    { name: "OpenCV / Pillow", category: "Image processing" },
    { name: "scikit-learn", category: "Performance evaluation" },
    { name: "Matplotlib", category: "Graphs and visualization" },
    { name: "Grad-CAM", category: "Model explanation" },
    { name: "FastAPI", category: "Backend and API" },
    { name: "React.js", category: "Web application interface" },
    { name: "PostgreSQL", category: "Analysis history storage" },
    { name: "ReportLab", category: "PDF report generation" },
    { name: "Git / GitHub", category: "Version control and teamwork" },
  ];

  const team = [
    {
      initials: "AH",
      name: "Aditya Hagawane",
      role: "Project Leader",
      prn: "1272261252",
    },
    {
      initials: "HS",
      name: "Harshad Satpute",
      role: "Team Member",
      prn: "1272261716",
    },
    {
      initials: "AA",
      name: "Anjali Ahire",
      role: "Team Member",
      prn: "1272261714",
    },
    {
      initials: "SG",
      name: "Samruddhi Ghodake",
      role: "Team Member",
      prn: "1272260088",
    },
  ];

  return (
    <div className="about-page">

      <PageHeading
        eyebrow="PROJECT OVERVIEW"
        title="About NeuroScan AI"
        subtitle="AI-Based Brain MRI Analysis and Disease Classification with Explainable AI."
      />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">
            <Brain size={16} />
            ARTIFICIAL INTELLIGENCE RESEARCH
          </span>

          <h2>
            Brain MRI Analysis
            <span> with Explainable AI</span>
          </h2>

          <p>
            An academic research project focused on brain MRI
            image classification, deep learning model comparison,
            explainable AI, and tumor-region segmentation.
          </p>

          <div className="about-hero-points">
            <span>
              <ShieldCheck size={16} />
              Explainable predictions
            </span>

            <span>
              <Cpu size={16} />
              Deep learning models
            </span>
          </div>
        </div>

        <div className="about-hero-icon">
          <Brain size={105} strokeWidth={1.2} />
        </div>
      </section>

      {/* Objective */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Project Objective</h3>
          <p>Purpose and research goals</p>
        </div>

        <div className="about-objective-card">
          <Target size={30} />

          <p>
            The project aims to develop a web-based AI system
            that analyzes brain MRI images using deep learning.
            It compares multiple classification models, selects
            the best-performing model, predicts one of four
            predefined classes, explains predictions using
            Grad-CAM, and explores U-Net for tumor segmentation.
          </p>
        </div>
      </section>

      {/* Dataset */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Research Dataset</h3>
          <p>BRISC brain MRI dataset</p>
        </div>

        <div className="about-dataset-card">
          <div className="about-dataset-icon">
            <Database size={28} />
          </div>

          <div className="about-dataset-content">
            <h4>BRISC Dataset</h4>

            <p>
              The project uses the BRISC dataset for brain MRI
              classification and explores its image-mask pairs
              for segmentation.
            </p>

            <div className="about-dataset-stats">
              <div>
                <strong>6,000</strong>
                <span>Classification images</span>
              </div>

              <div>
                <strong>5,000</strong>
                <span>Training images</span>
              </div>

              <div>
                <strong>1,000</strong>
                <span>Test images</span>
              </div>

              <div>
                <strong>~4,793</strong>
                <span>Image-mask pairs</span>
              </div>
            </div>

            <div className="about-class-list">
              <span>Glioma</span>
              <span>Meningioma</span>
              <span>Pituitary</span>
              <span>No Tumor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Core Features</h3>
          <p>Main functionalities of the proposed system</p>
        </div>

        <div className="about-features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="about-feature-card" key={feature.title}>
                <div className="about-feature-icon">
                  <Icon size={23} />
                </div>

                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Models */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Deep Learning Models</h3>
          <p>Architectures included in the research</p>
        </div>

        <div className="about-model-grid">
          {models.map((model) => (
            <div className="about-model-card" key={model.name}>
              <div className="about-model-icon">
                <Brain size={21} />
              </div>

              <h4>{model.name}</h4>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Evaluation */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Evaluation Metrics</h3>
          <p>Measures used to evaluate model performance</p>
        </div>

        <div className="about-metrics-grid">
          {[
            "Accuracy",
            "Precision",
            "Recall",
            "F1-Score",
            "Dice Score",
            "IoU",
            "Confusion Matrix",
          ].map((metric) => (
            <div className="about-metric-item" key={metric}>
              <Target size={17} />
              <span>{metric}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Technology Stack</h3>
          <p>Tools and technologies planned for development</p>
        </div>

        <div className="about-tech-grid">
          {technologies.map((tech) => (
            <div className="about-tech-card" key={tech.name}>
              <Code2 size={20} />

              <div>
                <h4>{tech.name}</h4>
                <p>{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Proposed Workflow</h3>
          <p>Overall processing pipeline</p>
        </div>

        <div className="about-workflow">
          {[
            "MRI Image Upload",
            "Image Preprocessing",
            "Deep Learning Models",
            "Model Comparison",
            "Best Model Selection",
            "Disease Classification",
            "Confidence Score",
            "Grad-CAM Explanation",
            "Tumor Segmentation",
            "Web-Based Result",
          ].map((step, index) => (
            <div className="about-workflow-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="about-section">
        <div className="about-section-heading">
          <h3>Project Development Team</h3>
          <p>Four members working on the academic project</p>
        </div>

        <div className="about-team-grid">
          {team.map((member) => (
            <div className="about-team-card" key={member.prn}>
              <div className="about-team-avatar">
                {member.initials}
              </div>

              <h4>{member.name}</h4>
              <p className="about-team-role">{member.role}</p>
              <span className="about-team-prn">
                PRN: {member.prn}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor */}
      <section className="about-mentor-card">
        <GraduationCap size={32} />

        <div>
          <h4>Project Mentor</h4>
          <p>Pradip Tiwari Sir</p>
          <span>
            M.Sc. Computer Science | MIT World Peace University
          </span>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="about-disclaimer">
        <ShieldCheck size={20} />

        <p>
          NeuroScan AI is an academic research project and
          AI-assisted prototype. It is not a clinically
          validated medical device and must not replace
          professional medical advice or diagnosis.
        </p>
      </div>

    </div>
  );
}

export default About;
