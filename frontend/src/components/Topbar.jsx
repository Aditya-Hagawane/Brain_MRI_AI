
import {
  Menu,
  Moon,
  Sun,
  ChevronRight
} from "lucide-react";

function Topbar({
  activeLabel,
  dark,
  setDark,
  setMobileMenu
}) {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <button
          className="menu-button"
          onClick={() => setMobileMenu(true)}
        >
          <Menu />
        </button>

        <span className="breadcrumb">
          Workspace
        </span>

        <ChevronRight size={15} />

        <strong>{activeLabel}</strong>

      </div>

      <div className="topbar-right">

        <span className="system-status">
          <i />
          System UI Ready
        </span>

        <button
          className="theme-button"
          onClick={() => setDark(!dark)}
          title="Toggle theme"
        >
          {dark ? <Sun size={19} /> : <Moon size={19} />}
        </button>

      </div>

    </header>
  );
}

export default Topbar;
