
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Results from "./pages/Results";
import ExplainableAI from "./pages/ExplainableAI";
import Segmentation from "./pages/Segmentation";
import ModelComparison from "./pages/ModelComparison";
import History from "./pages/History";
import Reports from "./pages/Reports";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/register";
import ForgotPassword from "./pages/ForgotPassword";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPage, setAuthPage] = useState("login");

  const [activePage, setActivePage] = useState("dashboard");
  const [image, setImage] = useState(null);
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const pageLabels = {
    dashboard: "Dashboard",
    upload: "Upload MRI",
    results: "Analysis Results",
    explain: "Explainable AI",
    segmentation: "Segmentation",
    models: "Model Comparison",
    history: "Analysis History",
    reports: "Reports",
    about: "About Project",
  };

  // Authentication pages
  if (!isAuthenticated) {
    if (authPage === "register") {
      return (
        <Register
          onRegister={() => setAuthPage("login")}
          onLogin={() => setAuthPage("login")}
        />
      );
    }

    if (authPage === "forgot") {
      return (
        <ForgotPassword
          onBackToLogin={() => setAuthPage("login")}
        />
      );
    }

    return (
      <Login
        onLogin={() => setIsAuthenticated(true)}
        onRegister={() => setAuthPage("register")}
        onForgotPassword={() => setAuthPage("forgot")}
      />
    );
  }

  // Main application pages
  const pages = {
    dashboard: (
      <Dashboard navigate={setActivePage} />
    ),

    upload: (
      <Upload
        image={image}
        setImage={setImage}
        navigate={setActivePage}
      />
    ),

    results: (
      <Results
        image={image}
        navigate={setActivePage}
      />
    ),

    explain: (
      <ExplainableAI
        image={image}
        navigate={setActivePage}
      />
    ),

    segmentation: (
      <Segmentation
        image={image}
        navigate={setActivePage}
      />
    ),

    models: (
      <ModelComparison />
    ),

    reports: (
      <Reports navigate={setActivePage} />
    ),

    history: (
      <History navigate={setActivePage} />
    ),

    about: (
      <About />
    ),
  };

  return (
    <div className={`app-shell ${dark ? "dark-theme" : ""}`}>

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <main className="main-content">

        <Topbar
          activeLabel={pageLabels[activePage]}
          dark={dark}
          setDark={setDark}
          setMobileMenu={setMobileMenu}
        />

        <div className="page-content">
          {pages[activePage] || (
            <div className="content-card">
              <h2>{pageLabels[activePage] || "Page"}</h2>
              <p>
                This section is under development.
                We will build it in the next steps.
              </p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

export default App;
