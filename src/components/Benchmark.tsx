export function Benchmark() {
  return (
    <section className="section" id="benchmark">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The proof · hard-hat-detection eval</span>
          <h2>
            We tested on a class <em>YOLO doesn't know.</em>
          </h2>
          <p className="deck">
            A novel class not in COCO (construction hard hats), evaluated against the public
            Voxel51 hard-hat-detection real-world eval set: 1,375 held-out real images, 5,710
            instances. Here's what changes when you add 2,000 of our synthetic renders to whatever
            real labels you already have.
          </p>
        </div>

        <div className="chart-panel">
          <div className="chart-header">
            <div className="chart-title">
              <span className="path">benchmarks/hard-hat-detection/</span>
              <span style={{ color: "var(--ink)" }}>data-efficiency.csv</span>
            </div>
            <div className="legend">
              <span>
                <span className="sw" style={{ background: "var(--ink-3)" }} />
                Real only
              </span>
              <span>
                <span className="sw" style={{ background: "var(--accent)" }} />
                Real + 2k synth
              </span>
              <span>
                <span className="sw dashed" style={{ color: "var(--warn)" }} />
                Synth only (0 real)
              </span>
            </div>
          </div>

          <ChartSvg />
        </div>

        <div className="chart-callouts">
          <Callout
            k="Headline lift"
            v={
              <>
                25 real labels <b>+ our synth</b> ≈ <i>75 real alone</i>
              </>
            }
            d="Three times fewer annotations to reach the same accuracy. The synthetic data carries the weight your labeling budget can't."
          />
          <Callout
            k="Cold start"
            v={
              <>
                From zero labels: <b>0.154 mAP@50</b>
              </>
            }
            d="A working baseline on day one — a detector that fires on your class before you've labeled a single real image."
          />
          <Callout
            k="When to stop"
            v={
              <>
                Past <b>250</b> labels, we give <i>diminishing returns</i>
              </>
            }
            d="And we tell you that. We want you to use us when it matters, not sell you renders you don't need."
          />
        </div>

        <table className="results-table" aria-label="Raw benchmark results">
          <thead>
            <tr>
              <th># real labels</th>
              <th>Real only</th>
              <th>Real + 2k synth</th>
              <th>Lift</th>
              <th style={{ width: "30%" }} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>—</td>
              <td>0.154</td>
              <td>
                <span className="lift-pos">cold start</span>
              </td>
              <td>
                <span className="bar-mini" style={{ width: 30, background: "var(--warn)" }} />
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>0.342</td>
              <td>0.671</td>
              <td>
                <span className="lift-pos">+32.9 pts</span>
              </td>
              <td>
                <span className="bar-mini" style={{ width: 68, opacity: 0.5, background: "var(--ink-3)" }} />
                <span className="bar-mini" style={{ width: 134 }} />
              </td>
            </tr>
            <tr>
              <td>50</td>
              <td>0.558</td>
              <td>0.742</td>
              <td>
                <span className="lift-pos">+18.4 pts</span>
              </td>
              <td>
                <span className="bar-mini" style={{ width: 112, opacity: 0.5, background: "var(--ink-3)" }} />
                <span className="bar-mini" style={{ width: 148 }} />
              </td>
            </tr>
            <tr>
              <td>100</td>
              <td>0.765</td>
              <td>0.796</td>
              <td>
                <span className="lift-pos">+3.1 pts</span>
              </td>
              <td>
                <span className="bar-mini" style={{ width: 153, opacity: 0.5, background: "var(--ink-3)" }} />
                <span className="bar-mini" style={{ width: 159 }} />
              </td>
            </tr>
            <tr>
              <td>250</td>
              <td>0.875</td>
              <td>0.867</td>
              <td>
                <span className="lift-zero">— parity</span>
              </td>
              <td>
                <span className="bar-mini" style={{ width: 175, opacity: 0.5, background: "var(--ink-3)" }} />
                <span className="bar-mini" style={{ width: 173 }} />
              </td>
            </tr>
            <tr>
              <td>500</td>
              <td>0.912</td>
              <td>0.903</td>
              <td>
                <span className="lift-zero">— parity</span>
              </td>
              <td>
                <span className="bar-mini" style={{ width: 182, opacity: 0.5, background: "var(--ink-3)" }} />
                <span className="bar-mini" style={{ width: 180 }} />
              </td>
            </tr>
            <tr>
              <td>1000</td>
              <td>0.927</td>
              <td>0.927</td>
              <td>
                <span className="lift-zero">— parity</span>
              </td>
              <td>
                <span className="bar-mini" style={{ width: 185, opacity: 0.5, background: "var(--ink-3)" }} />
                <span className="bar-mini" style={{ width: 185 }} />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="methodology">
          <b style={{ color: "var(--ink-2)" }}>Methodology.</b> Standard pretrained detector · 30
          epochs · averaged across 2 random seeds. Eval: Voxel51/hard-hat-detection held-out val
          split (1,375 real images · 5,710 instances). Synth set: 2,000 physically-based renders
          with full domain randomization. Best model achieves <b style={{ color: "var(--ink-2)" }}>0.90
          recall / 0.87 precision</b> on the real eval set. Full methodology, training logs, and
          raw CSVs available on request.
        </div>
      </div>
    </section>
  );
}

function Callout({ k, v, d }: { k: string; v: React.ReactNode; d: string }) {
  return (
    <div className="callout">
      <div className="k">{k}</div>
      <div className="v">{v}</div>
      <div className="d">{d}</div>
    </div>
  );
}

/** The data-efficiency chart. SVG coordinates from the design prototype:
 *   x positions: 0→80, 25→260, 50→440, 100→620, 250→900
 *   y = 360 - value * 320
 */
function ChartSvg() {
  return (
    <svg className="chart-svg" viewBox="0 0 960 420" preserveAspectRatio="none" aria-label="Data efficiency curve">
      {/* Grid */}
      <g stroke="var(--line)" strokeWidth={1}>
        <line x1={80} y1={40} x2={80} y2={360} />
        <line x1={80} y1={360} x2={920} y2={360} />
        <line x1={80} y1={40} x2={920} y2={40} strokeDasharray="2 4" opacity={0.5} />
        <line x1={80} y1={120} x2={920} y2={120} strokeDasharray="2 4" opacity={0.5} />
        <line x1={80} y1={200} x2={920} y2={200} strokeDasharray="2 4" opacity={0.5} />
        <line x1={80} y1={280} x2={920} y2={280} strokeDasharray="2 4" opacity={0.5} />
      </g>

      {/* Y labels */}
      <g fontFamily="JetBrains Mono" fontSize={11} fill="var(--ink-3)" textAnchor="end">
        <text x={70} y={44}>1.00</text>
        <text x={70} y={124}>0.75</text>
        <text x={70} y={204}>0.50</text>
        <text x={70} y={284}>0.25</text>
        <text x={70} y={364}>0.00</text>
      </g>

      {/* X labels */}
      <g fontFamily="JetBrains Mono" fontSize={11} fill="var(--ink-3)" textAnchor="middle">
        <text x={80} y={385}>0</text>
        <text x={260} y={385}>25</text>
        <text x={440} y={385}>50</text>
        <text x={620} y={385}>100</text>
        <text x={900} y={385}>250</text>
      </g>

      <text
        x={500}
        y={408}
        fontFamily="JetBrains Mono"
        fontSize={11}
        fill="var(--ink-3)"
        textAnchor="middle"
      >
        ↳ # labeled real images (per class)
      </text>
      <text
        x={24}
        y={200}
        fontFamily="JetBrains Mono"
        fontSize={11}
        fill="var(--ink-3)"
        textAnchor="middle"
        transform="rotate(-90 24 200)"
      >
        mAP@50
      </text>

      {/* Synth-only baseline (dashed, y = 360 - 0.154*320 = 310.7) */}
      <line x1={80} y1={310.72} x2={920} y2={310.72} stroke="var(--warn)" strokeWidth={1.5} strokeDasharray="5 5" opacity={0.85} />
      <text x={914} y={304} fontFamily="JetBrains Mono" fontSize={10.5} fill="var(--warn)" textAnchor="end">
        synth-only = 0.154
      </text>

      {/* Real-only line (starts at 25): 0.342 / 0.558 / 0.765 / 0.875 */}
      <path
        d="M 260 250.56 L 440 181.44 L 620 115.2 L 900 80"
        stroke="var(--ink-2)"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Real+synth line: 0.154 / 0.671 / 0.742 / 0.796 / 0.867 */}
      <path
        d="M 80 310.72 L 260 145.28 L 440 122.56 L 620 105.28 L 900 82.56"
        stroke="var(--accent)"
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gap fill between curves from 25→100 */}
      <path
        d="M 260 250.56 L 440 181.44 L 620 115.2 L 620 105.28 L 440 122.56 L 260 145.28 Z"
        fill="var(--accent)"
        opacity={0.18}
      />

      {/* Data points — real-only */}
      <g fill="var(--bg)" stroke="var(--ink-2)" strokeWidth={2}>
        <circle cx={260} cy={250.56} r={4} />
        <circle cx={440} cy={181.44} r={4} />
        <circle cx={620} cy={115.2} r={4} />
        <circle cx={900} cy={80} r={4} />
      </g>

      {/* Data points — real+synth */}
      <g fill="var(--accent)" stroke="var(--bg)" strokeWidth={2}>
        <circle cx={80} cy={310.72} r={5} />
        <circle cx={260} cy={145.28} r={5} />
        <circle cx={440} cy={122.56} r={5} />
        <circle cx={620} cy={105.28} r={5} />
        <circle cx={900} cy={82.56} r={5} />
      </g>

      {/* Annotations */}
      <g fontFamily="JetBrains Mono" fontSize={11} fill="var(--ink)">
        <line x1={260} y1={250.56} x2={260} y2={145.28} stroke="var(--accent)" strokeWidth={1} strokeDasharray="2 3" />
        <rect x={278} y={180} width={86} height={26} rx={4} fill="var(--panel)" stroke="var(--accent)" strokeWidth={1} />
        <text x={285} y={197} fill="var(--accent)">+32.9 pts</text>

        <line x1={260} y1={145.28} x2={520} y2={150} stroke="var(--ink)" strokeWidth={0.5} strokeDasharray="1 3" opacity={0.4} />
        <rect x={390} y={58} width={230} height={30} rx={4} fill="var(--panel)" stroke="var(--line-2)" strokeWidth={1} />
        <text x={402} y={78} fill="var(--ink-2)">25 real + synth ≈ 75 real alone</text>

        <rect x={720} y={50} width={180} height={26} rx={4} fill="var(--panel)" stroke="var(--line-2)" strokeWidth={1} />
        <text x={732} y={67} fill="var(--ink-2)">≥ 250 labels → parity (stop)</text>
        <line x1={810} y1={76} x2={880} y2={82} stroke="var(--line-2)" strokeWidth={1} />
      </g>
    </svg>
  );
}
