
import { useState } from "react";

import {
  History as HistoryIcon,
  Search,
  Filter,
  FileText,
  CalendarDays,
  Brain,
} from "lucide-react";

import PageHeading from "../components/PageHeading";
import EmptyState from "../components/EmptyState";

function History({ navigate }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Actual records will come from the backend.
  const historyRecords = [];

  const filteredRecords = historyRecords.filter((record) => {
    const matchesSearch = record.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || record.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="history-page">

      <PageHeading
        eyebrow="ACTIVITY"
        title="Analysis History"
        subtitle="Track and review your previous MRI analysis sessions."
      />

      <div className="history-summary-grid">

        <div className="history-summary-card">
          <div className="history-summary-icon purple">
            <HistoryIcon size={21} />
          </div>
          <div>
            <p>Total Analyses</p>
            <h2>{historyRecords.length}</h2>
          </div>
        </div>

        <div className="history-summary-card">
          <div className="history-summary-icon blue">
            <Brain size={21} />
          </div>
          <div>
            <p>Classifications</p>
            <h2>0</h2>
          </div>
        </div>

        <div className="history-summary-card">
          <div className="history-summary-icon green">
            <FileText size={21} />
          </div>
          <div>
            <p>Reports Generated</p>
            <h2>0</h2>
          </div>
        </div>

      </div>

      <div className="history-main-panel">

        <div className="history-panel-heading">
          <div>
            <h3>Previous Analysis</h3>
            <p>Review your MRI analysis records</p>
          </div>

          <span className="history-record-count">
            {filteredRecords.length} Records
          </span>
        </div>

        <div className="history-toolbar">

          <div className="history-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search analysis..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="history-filter">
            <Filter size={17} />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Records</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

        </div>

        {filteredRecords.length === 0 ? (
          <EmptyState
            icon={CalendarDays}
            title="No analysis history found"
            description="Your previous MRI analysis sessions will appear here after you complete an analysis."
            action="Start First Analysis"
            onClick={() => navigate("upload")}
          />
        ) : (
          <div className="history-table-wrapper">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Analysis</th>
                  <th>Date</th>
                  <th>Classification</th>
                  <th>Status</th>
                  <th>Report</th>
                </tr>
              </thead>

              <tbody>
                {filteredRecords.map((record) => (
                  <tr key={record.id}>
                    <td>{record.name}</td>
                    <td>{record.date}</td>
                    <td>{record.classification || "—"}</td>
                    <td>{record.status}</td>
                    <td>{record.report ? "Available" : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

      <div className="history-info-panel">
        <div className="history-info-icon">
          <HistoryIcon size={21} />
        </div>

        <div>
          <h4>History Management</h4>
          <p>
            Analysis records will be stored in the PostgreSQL
            database after backend integration. Each record
            will contain analysis details, classification results,
            and report references.
          </p>
        </div>
      </div>

    </div>
  );
}

export default History;
