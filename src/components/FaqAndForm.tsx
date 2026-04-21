import { useState } from "react";

export function FaqAndForm() {
  return (
    <section className="section" id="faq">
      <div
        className="wrap faq-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
      >
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 style={{ marginBottom: 40 }}>
            Answered, <em>not dodged.</em>
          </h2>

          <div className="faq">
            <Q
              open
              q="How do you know it works?"
              a={
                <>
                  We benchmarked against public real-world eval data — the Voxel51 hard-hat-detection
                  set. Full results, training configs, and code available <a href="#">here</a>. Not
                  a whitepaper. A repo.
                </>
              }
            />
            <Q
              q="What asset formats do you accept?"
              a={<>.glb, .gltf, .fbx, .obj, .blend. If your asset has a rigged armature, we handle it. If it's poorly UV-unwrapped, we'll fix materials before rendering.</>}
            />
            <Q
              q="How do you measure sim-to-real gap?"
              a={
                <>
                  mAP@50 on a held-out real eval set you choose — ideally public and canonical. We
                  also compute FID between synth and real on request, but we consider downstream
                  task performance the only metric that matters.
                </>
              }
            />
            <Q
              q="Can I use my own eval data?"
              a={<>Yes. Drop in a YOLO or COCO eval set and we report lift against that specifically. Your eval set stays yours.</>}
            />
            <Q
              q="How long does a pilot take?"
              a={<>48 hours from asset upload to images + validation report. Scale jobs take about a week because of the multi-seed sweep.</>}
            />
          </div>
        </div>

        <div id="request" style={{ position: "sticky", top: 80 }}>
          <span className="eyebrow">Request a class benchmark</span>
          <h2 style={{ marginBottom: 16 }}>
            Free first run. <em>48 hours.</em>
          </h2>
          <p style={{ color: "var(--ink-2)", marginBottom: 28 }}>
            Tell us your class and what you have. We'll benchmark one dataset at 2k renders on your
            eval set, free. No sales call.
          </p>

          <RequestForm />
        </div>
      </div>
    </section>
  );
}

function Q({ q, a, open = false }: { q: string; a: React.ReactNode; open?: boolean }) {
  return (
    <details className="q" open={open}>
      <summary>
        {q} <span className="plus">+</span>
      </summary>
      <div className="a">{a}</div>
    </details>
  );
}

function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="form-card"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="full">
        <label>Class name</label>
        <input type="text" placeholder="e.g. road cones, shelf SKUs, missing PPE" required />
      </div>
      <div>
        <label># real labels you have</label>
        <select defaultValue="25 – 100">
          <option>0 (cold start)</option>
          <option>1 – 25</option>
          <option>25 – 100</option>
          <option>100 – 250</option>
          <option>250+ (we'd advise against)</option>
        </select>
      </div>
      <div>
        <label>Target mAP@50</label>
        <input type="text" placeholder="0.70" defaultValue="0.70" />
      </div>
      <div className="full">
        <label>Work email</label>
        <input type="email" placeholder="you@company.com" required />
      </div>
      <div className="full">
        <label>Notes (optional)</label>
        <textarea
          rows={3}
          placeholder="Link your 3D asset, or describe it. If you have an eval set link, even better."
        />
      </div>
      <div className="form-actions full">
        <span className={`form-status mono${submitted ? " show" : ""}`}>
          ✓ Received · we'll reply within 12h
        </span>
        <button type="submit" className="btn btn-primary">
          {submitted ? "Queued — we'll email you" : "Queue the benchmark"}
          {!submitted && (
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8 H13 M9 4 L13 8 L9 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
