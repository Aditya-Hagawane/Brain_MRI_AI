
import {
  BrainCircuit,
  LayoutDashboard,
  ScanLine,
  Activity,
  ChartBar,
  History,
  FileText,
  Info,
  Layers,
  X,
  ShieldCheck
} from "lucide-react";

const navigation = [
  {
    title: "OVERVIEW",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      { id: "upload", label: "New MRI Analysis", icon: ScanLine }
    ]
  },
  {
    title: "AI ANALYSIS",
    items: [
      { id: "results", label: "Analysis Results", icon: Activity },
      { id: "explain", label: "Explainable AI", icon: BrainCircuit },
      { id: "segmentation", label: "Tumor Segmentation", icon: Layers },
      { id: "models", label: "Model Comparison", icon: ChartBar }
    ]
  },
  {
    title: "MANAGEMENT",
    items: [
      { id: "history", label: "Analysis History", icon: History },
      { id: "reports", label: "PDF Reports", icon: FileText },
      { id: "about", label: "About Project", icon: Info }
    ]
  }
];

function Sidebar({
  activePage,
  setActivePage,
  mobileMenu,
  setMobileMenu
}) {
  return (
    <>
      {mobileMenu && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenu(false)}
        />
      )}

      <aside className={`sidebar ${mobileMenu ? "mobile-open" : ""}`}>

        <div className="brand">
          <div className="brand-mark">
            <BrainCircuit size={25} />
          </div>

          <div>
            <strong>NeuroScan<span> AI</span></strong>
            <small>MEDICAL AI PLATFORM</small>
          </div>

          <button
            className="mobile-close"
            onClick={() => setMobileMenu(false)}
          >
            <X />
          </button>
        </div>

        <div className="workspace-label">WORKSPACE</div>

        {navigation.map((group) => (
          <div className="nav-group" key={group.title}>

            <div className="nav-heading">
              {group.title}
            </div>

            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className={`nav-link ${
                    activePage === item.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenu(false);
                  }}
                >
                  <Icon size={18} />

                  <span>{item.label}</span>

                  {activePage === item.id && (
                    <span className="active-dot" />
                  )}
                </button>
              );
            })}

          </div>
        ))}

        <div className="sidebar-bottom">

          <div className="prototype-card">
            <ShieldCheck size={19} />

            <strong>Research Prototype</strong>

            <p>
              For academic research and demonstration.
            </p>
          </div>

          <div className="sidebar-footer">
            MIT-WPU · MSc Computer Science
          </div>

        </div>
      </aside>
    </>
  );
}

export default Sidebar;
