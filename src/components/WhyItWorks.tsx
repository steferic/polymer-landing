export function WhyItWorks() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Why this works when others don't</span>
          <h2>
            Most synthetic data demos are <em>pretrained-backbone theater.</em>
          </h2>
          <p className="deck">
            Every vendor shows cats or cars. COCO already taught YOLO those. Here's what we do
            differently so the lift you see on the chart is the lift you'll actually get on your
            class.
          </p>
        </div>

        <div className="reasons">
          <Reason
            marker="01 · novel classes"
            title="We benchmark on classes your pretrained model doesn't already know."
            body="Cats and cars are rigged experiments — COCO pretraining is doing the work, not the synth data. We test on classes outside COCO so the lift is real, not a ceiling you'd hit anyway."
            callout={
              <>
                our test class: <b>hard hats (novel)</b>
              </>
            }
          />
          <Reason
            marker="02 · annotation fidelity"
            title="Annotations that match what your trainers expect."
            body="Silent mismatches between how a dataset is annotated and how your trainer interprets it can quietly cost 20 to 40 mAP@50 points. We handle that for you — so you're not debugging a data bug disguised as a model problem."
            callout={
              <>
                typical hidden mismatch cost: <b>20–40 pts mAP@50</b>
              </>
            }
          />
          <Reason
            marker="03 · honest reporting"
            title="We tell you where the model still fails."
            body="Every dataset ships with a slice breakdown — small objects vs large, cluttered scenes vs clean, dark images vs bright. You see where your detector is solved and where it isn't. No summary-statistic illusions."
            callout={
              <>
                included in every delivery: <b>per-slice recall report</b>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function Reason({
  marker,
  title,
  body,
  callout,
}: {
  marker: string;
  title: string;
  body: string;
  callout: React.ReactNode;
}) {
  return (
    <div className="reason">
      <div className="marker">{marker}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="callout-num">{callout}</div>
    </div>
  );
}
