export function Hero() {
  return (
    <section className="hero">
      <div className="gridbg" />
      <div className="ticks top" />
      <div className="ticks bot" />

      <div className="wrap hero-inner">
        <span className="eyebrow">Synthetic training data · for object detection</span>
        <h1>
          Your training data was the <em>bottleneck.</em>
          <br />
          Not anymore.
        </h1>
        <p className="sub">
          Photorealistic synthetic training data built from your 3D asset.
        </p>

        <div className="hero-ctas">
          <a className="btn btn-primary" href="#benchmark">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 14 L6 10 L9 12 L14 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 5 H14 V9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            See the proof <span className="kbd">B</span>
          </a>
          <a className="btn btn-ghost" href="#request">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2.5" y="3.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M3 5 L8 8.5 L13 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Request a sample dataset <span className="kbd dark">R</span>
          </a>
        </div>

        <div className="hero-meta">Free sample dataset · 48h turnaround</div>
      </div>

      <div className="wrap" style={{ marginTop: "64px", position: "relative" }}>
        <div className="hero-stats">
          <Stat label="zero-label mAP@50" val="0.154" unit="on novel class" />
          <Stat label="Lift @ 25 real labels" val="+32.9" unit="points" />
          <Stat label="Real-eval recall" val="0.90" unit="5,710 real instances" />
          <Stat label="Pilot turnaround" val="48" unit="hours, asset → dataset" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, val, unit }: { label: string; val: string; unit: string }) {
  return (
    <div className="hero-stat">
      <div className="label">{label}</div>
      <div className="val">
        {val}
        <span className="unit">{unit}</span>
      </div>
    </div>
  );
}
