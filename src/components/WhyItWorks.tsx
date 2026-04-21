export function WhyItWorks() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Why this works when others don't</span>
          <h2>
            Synthetic data only works if the <em>dataset is usable.</em>
          </h2>
          <p className="deck">
            Good renders are not enough. The dataset has to match the class, the scene conditions,
            and the annotation format your training pipeline expects.
          </p>
        </div>

        <div className="reasons">
          <Reason
            marker="01 · asset fidelity"
            title="We build around your object, not a generic demo class."
            body="Every dataset starts from your 3D asset. That keeps the geometry, materials, and annotation target tied to the class you actually need to train on."
            callout={
              <>
                inputs supported: <b>.glb · .gltf · .fbx · .obj · .blend</b>
              </>
            }
          />
          <Reason
            marker="02 · scene coverage"
            title="We render for the conditions your model will face."
            body="Lighting, environment, viewpoint, and occlusion are designed around the deployment scenario. The goal is coverage that reflects the job, not a volume of interchangeable renders."
            callout={
              <>
                coverage designed for: <b>lighting · environment · occlusion · viewpoint</b>
              </>
            }
          />
          <Reason
            marker="03 · annotation fidelity"
            title="Annotations that match what your trainers expect."
            body="The dataset ships with labels in COCO or YOLO format, plus a datasheet documenting dataset composition, scene coverage, and deliverables. That makes the handoff usable, not just visually convincing."
            callout={
              <>
                included in every delivery: <b>COCO/YOLO labels + comprehensive datasheet</b>
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
