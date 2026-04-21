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
          Let&apos;s build it.
        </h2>
        <p>Start with a small sample dataset and see the output quality for yourself.</p>
        <a className="btn btn-primary" href="#request">
          Request a sample dataset
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
