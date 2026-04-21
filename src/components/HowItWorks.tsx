export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works · 48h pipeline</span>
          <h2>
            One asset in. A <em>trained dataset</em> out.
          </h2>
        </div>

        <div className="steps">
          <Step
            num="01"
            label="UPLOAD"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 15 V5 M8 9 L12 5 L16 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            }
            title="Drop in your 3D asset."
            body="One file. We handle rigging, materials, and scale normalization."
            detailLeft={
              <>
                accepted: <span style={{ color: "var(--ink-2)" }}>.glb · .gltf · .fbx · .obj · .blend</span>
              </>
            }
            detailRight={
              <>
                rigged armature: <span style={{ color: "var(--good)" }}>supported</span>
              </>
            }
          />
          <Step
            num="02"
            label="RENDER"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M12 3 V6 M12 18 V21 M3 12 H6 M18 12 H21 M5.6 5.6 L7.7 7.7 M16.3 16.3 L18.4 18.4 M5.6 18.4 L7.7 16.3 M16.3 7.7 L18.4 5.6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
            title="Generate thousands of images."
            body="Full domain randomization across camera, lighting, pose, and materials. Physically-based rendering with AI denoise — photoreal by design."
            detailLeft={
              <>
                randomized: <span style={{ color: "var(--ink-2)" }}>pose · lighting · material · focal</span>
              </>
            }
            detailRight={
              <>
                reproducible seeds: <span style={{ color: "var(--good)" }}>yes</span>
              </>
            }
          />
          <Step
            num="03"
            label="TRAIN"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 19 L9 12 L13 16 L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 5 H20 V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Train your model. Track the lift."
            body="We deliver images + COCO/YOLO annotations + a validation report benchmarking synth-only, real-only, and real+synth on your eval set."
            detailLeft={
              <>
                formats: <span style={{ color: "var(--ink-2)" }}>COCO · YOLO · Pascal VOC</span>
              </>
            }
            detailRight={
              <>
                included: <span style={{ color: "var(--good)" }}>validation report</span>
              </>
            }
          />
        </div>

      </div>
    </section>
  );
}

function Step({
  num,
  label,
  icon,
  title,
  body,
  detailLeft,
  detailRight,
}: {
  num: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  detailLeft: React.ReactNode;
  detailRight: React.ReactNode;
}) {
  return (
    <div className="step">
      <div className="step-num">
        <span>{num}</span> / {label}
      </div>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="detail">
        {detailLeft}
        <br />
        {detailRight}
      </div>
    </div>
  );
}
