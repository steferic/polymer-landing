import type { Theme } from "../useTheme";

export function Nav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="logo">
          <span className="logo-mark" />
          <span>Polymer</span>
          <span
            className="mono"
            style={{
              color: "var(--ink-3)",
              fontSize: "11px",
              marginLeft: "6px",
              padding: "2px 6px",
              border: "1px solid var(--line)",
              borderRadius: "3px",
            }}
          >
            v0.7 · beta
          </span>
        </div>
        <div className="nav-links">
          <a href="#benchmark">Proof</a>
          <a href="#how">How it works</a>
          <a href="#why">Why us</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#">Docs</a>
        </div>
        <div className="nav-right">
          <span className="mono">
            <span className="dot" />4 pilot slots / month
          </span>
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            onClick={onToggleTheme}
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          <a className="btn btn-ghost" href="#request">
            Start pilot
          </a>
        </div>
      </div>
    </nav>
  );
}
