export function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-cols">
          <div>
            <div className="logo" style={{ marginBottom: 14 }}>
              <span className="logo-mark" />
              <span>Polymer</span>
            </div>
            <p style={{ maxWidth: 320, color: "var(--ink-3)", margin: 0 }}>
              Photorealistic synthetic training data for object detection teams who need lift, not
              vibes.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#benchmark">Benchmark</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:founder@polymersynth.com">founder@polymersynth.com</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bar">
          <div>© 2026 Polymer Synthetic, Inc.</div>
          <div>Deterministic · reproducible · documented</div>
          <div>Built in Brooklyn</div>
        </div>
      </div>
    </footer>
  );
}
