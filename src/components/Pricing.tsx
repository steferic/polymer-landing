export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Pricing · published, not per-call</span>
          <h2>
            Priced like <em>a dataset,</em> not a demo.
          </h2>
          <p className="deck">
            Every tier includes a comprehensive datasheet covering dataset composition, scene
            coverage, annotations, and deliverables.
          </p>
        </div>

        <div className="pricing">
          <Tier
            name="Pilot"
            price="$2,400"
            unit="/ one class"
            sub="Start with a focused, production-quality dataset for one class."
            items={[
              "2,000 labeled renders, one class",
              "Coverage across lighting · environment · occlusion · viewpoint",
              "COCO + YOLO annotations",
              "Comprehensive Datasheet",
              "48 hour delivery",
            ]}
            ctaHref="#request"
            ctaLabel="Start a pilot"
            ctaPrimary={false}
          />
          <Tier
            name="Scale"
            badge="MOST PICKED"
            featured
            price="$9,800"
            unit="/ one class"
            sub="For teams moving beyond pilot and building broader training coverage."
            items={[
              "Everything in Pilot",
              "10,000 labeled renders, one class",
              "Expanded coverage across lighting · environment · occlusion · viewpoint",
              "Object pose included",
              "7 day delivery",
            ]}
            ctaHref="#request"
            ctaLabel="Run a scale job"
            ctaPrimary={true}
          />
          <Tier
            name="Enterprise"
            price="Let's talk"
            priceTalk
            sub="Multi-class dataset programs with custom coverage, asset prep, and deployment needs."
            items={[
              "Multi-class dataset program",
              "Asset prep for complex 3D pipelines",
              "Custom coverage design and annotation schema",
              "On-prem / VPC rendering available",
              "SLA + dedicated ML engineer",
              "Classified / ITAR engagements via NDA",
            ]}
            ctaHref="mailto:founder@polymersynth.com"
            ctaLabel="Talk to a founder"
            ctaPrimary={false}
          />
        </div>
      </div>
    </section>
  );
}

function Tier({
  name,
  price,
  unit,
  priceTalk,
  badge,
  featured,
  sub,
  items,
  ctaHref,
  ctaLabel,
  ctaPrimary,
}: {
  name: string;
  price: string;
  unit?: string;
  priceTalk?: boolean;
  badge?: string;
  featured?: boolean;
  sub: string;
  items: string[];
  ctaHref: string;
  ctaLabel: string;
  ctaPrimary: boolean;
}) {
  return (
    <div className={`tier${featured ? " featured" : ""}`}>
      {badge && <div className="badge">{badge}</div>}
      <div className="name">{name}</div>
      <div className="price-row">
        <span className={`price${priceTalk ? " talk" : ""}`}>{price}</span>
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="sub">{sub}</div>
      <ul>
        {items.map((it, i) => (
          <li key={i}>
            <span className="check">→</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <div className="cta">
        <a href={ctaHref} className={`btn ${ctaPrimary ? "btn-primary" : "btn-ghost"}`}>
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
