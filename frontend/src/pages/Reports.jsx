
import {
  FileText,
  Download,
  Clock,
  ShieldCheck,
  Info,
  FileDown,
} from "lucide-react";

import PageHeading from "../components/PageHeading";
import EmptyState from "../components/EmptyState";

function Reports({ navigate }) {
  // Reports will be loaded from the backend later.
  const reports = [];

  return (
    <div className="reports-page">

      <PageHeading
        eyebrow="DOCUMENTATION"
        title="Analysis Reports"
        subtitle="View and manage reports generated from your MRI analysis."
      />

      <div className="reports-summary-grid">

        <div className="report-summary-card">
          <div className="report-summary-icon purple">
            <FileText size={21} />
          </div>
          <div>
            <p>Total Reports</p>
            <h2>{reports.length}</h2>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon green">
            <Download size={21} />
          </div>
          <div>
            <p>Available Downloads</p>
            <h2>0</h2>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon orange">
            <Clock size={21} />
          </div>
          <div>
            <p>Pending Reports</p>
            <h2>0</h2>
          </div>
        </div>

      </div>

      <div className="reports-main-panel">

        <div className="reports-panel-heading">
          <div>
            <h3>Generated Reports</h3>
            <p>Your MRI analysis report collection</p>
          </div>

          <span className="reports-count">
            {reports.length} Reports
          </span>
        </div>

        {reports.length === 0 ? (
          <EmptyState
            icon={FileDown}
            title="No reports available"
            description="Your reports will appear here after an MRI analysis has been completed and a report has been generated."
            action="Start New Analysis"
            onClick={() => navigate("upload")}
          />
        ) : (
          <div className="reports-list">
            {reports.map((report) => (
              <div className="report-row" key={report.id}>
                <FileText size={22} />

                <div>
                  <h4>{report.name}</h4>
                  <p>{report.date}</p>
                </div>

                <button disabled>
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      <div className="reports-info-panel">
        <div className="reports-info-icon">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h4>Report Information</h4>
          <p>
            Reports will include MRI image details, classification
            results, model evaluation information, and explainable AI
            visualizations after backend integration.
          </p>
        </div>
      </div>

      <div className="reports-notice">
        <Info size={18} />
        <p>
          PDF report generation is currently under development.
          This application is an academic research prototype,
          not a clinical diagnostic tool.
        </p>
      </div>

    </div>
  );
}

export default Reports;
