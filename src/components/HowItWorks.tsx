export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works · 48h pipeline</span>
          <h2>
            From your 3D asset to a <em>labeled dataset</em>.
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
            title="Render realistic training images."
            body="We generate images with realistic lighting, environments, viewpoints, and occlusion so the dataset reflects the conditions your model will actually see."
            detailLeft={
              <>
                variation: <span style={{ color: "var(--ink-2)" }}>lighting · environment · occlusion · viewpoint</span>
              </>
            }
            detailRight={
              <>
                scenes: <span style={{ color: "var(--good)" }}>matched to your use case</span>
              </>
            }
          />
          <Step
            num="03"
            label="DELIVER"
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
            title="Receive a high-quality dataset."
            body="We deliver a high-quality synthetic dataset with rendered images and labels in COCO or YOLO format, with object pose included as part of the annotations."
            detailLeft={
              <>
                deliverables: <span style={{ color: "var(--ink-2)" }}>images · COCO/YOLO labels</span>
              </>
            }
            detailRight={
              <>
                included: <span style={{ color: "var(--good)" }}>object pose</span>
              </>
            }
          />
        </div>

        <p style={{ marginTop: "20px", textAlign: "center", color: "var(--ink-2)" }}>
          Need a model too? We can train it for you as an add-on service.
        </p>

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
