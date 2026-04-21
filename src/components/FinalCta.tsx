export function FinalCta() {
  return (
    <section className="cta-final">
      <div className="gridbg" />
      <div className="wrap" style={{ position: "relative" }}>
        <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          We're early · this matters
        </span>
        <h2 style={{ marginTop: 24 }}>
          If your class isn't in COCO
          <br />
          and you have <em>fewer than 250 labels —</em>
          <br />
          we want to hear from you.
        </h2>
        <p>First benchmark is free. No deck, no sales call, no MSA.</p>
        <a className="btn btn-primary" href="#request">
          Request a benchmark
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
