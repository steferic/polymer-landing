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
                  We have already validated the pipeline against held-out real-world evaluation data.
                  The results show that the synthetic data improves downstream detection performance
                  on novel classes, not just synthetic-only benchmarks. <a href="#benchmark">See the proof.</a>
                </>
              }
            />
            <Q
              q="Do we need to have a 3D model already?"
              a={
                <>
                  Ideally, yes. We get the best results when you provide the 3D model directly. If we
                  have to create one from photos or video, it will be an approximation, and you should
                  expect some loss in downstream performance.
                </>
              }
            />
            <Q
              q="What do you deliver?"
              a={
                <>
                  A high-quality synthetic dataset with rendered images, labels in COCO or YOLO
                  format, object pose annotations, and a comprehensive datasheet describing dataset
                  composition and scene coverage.
                </>
              }
            />
            <Q
              q="How realistic are the renders?"
              a={
                <>
                  We build scenes around the conditions your model is expected to face, including
                  lighting, environment, viewpoint, and occlusion. The goal is coverage that maps to
                  your use case, not generic renders.
                </>
              }
            />
            <Q
              q="How long does a pilot take?"
              a={
                <>
                  Pilot datasets are delivered in 48 hours. Scale jobs typically take about 7 days,
                  depending on asset readiness and coverage requirements.
                </>
              }
            />
            <Q
              q="Can you train the model too?"
              a={
                <>
                  Yes. Model training is available as an add-on service if you want us to take the
                  dataset through training as well.
                </>
              }
            />
          </div>
        </div>

        <div id="request" style={{ position: "sticky", top: 80 }}>
          <span className="eyebrow">Request a sample dataset</span>
          <h2 style={{ marginBottom: 16 }}>
            See a sample in <em>48 hours.</em>
          </h2>
          <p style={{ color: "var(--ink-2)", marginBottom: 28 }}>
            Tell us your class and share your 3D asset. We&apos;ll generate a small sample dataset
            of about 10 labeled renders so you can see the output quality.
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
        <label>Deployment environment</label>
        <input type="text" placeholder="e.g. warehouse, roadway, retail shelf" />
      </div>
      <div className="full">
        <label>Work email</label>
        <input type="email" placeholder="you@company.com" required />
      </div>
      <div className="full">
        <label>Notes (optional)</label>
        <textarea
          rows={3}
          placeholder="Link your 3D asset and describe the scene conditions and edge cases you care about."
        />
      </div>
      <div className="form-actions full">
        <span className={`form-status mono${submitted ? " show" : ""}`}>
          ✓ Received · we'll reply within 12h
        </span>
        <button type="submit" className="btn btn-primary">
          {submitted ? "Queued — we'll email you" : "Request the sample dataset"}
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
