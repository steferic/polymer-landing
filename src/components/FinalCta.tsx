export function FinalCta() {
  return (
    <section className="cta-final">
      <div className="gridbg" />
      <div className="wrap" style={{ position: "relative" }}>
        <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          We're early · this matters
        </span>
        <h2 style={{ marginTop: 24 }}>
          Need training data for
          <br />
          a hard-to-capture <em>object class?</em>
          <br />
          Start with the pilot.
        </h2>
        <p>Scope one class, share your 3D asset, and get a production-quality pilot dataset in 48 hours.</p>
        <a className="btn btn-primary" href="#request">
          Start the 48h pilot
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8 H13 M9 4 L13 8 L9 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
