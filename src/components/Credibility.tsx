import type { ReactNode } from "react";

export function Credibility() {
  return (
    <section className="credibility">
      <div className="wrap row">
        <div className="cred-caption">
          Validated on held-out real-world data.
          <br />
          <span style={{ color: "var(--ink-2)" }}>Evidence, not cherry-picked renders.</span>
        </div>
        <div className="logos">
          <Logo name="COCO">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 14a4 4 0 0 0 8 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="9" cy="10" r="0.9" fill="currentColor" />
            <circle cx="15" cy="10" r="0.9" fill="currentColor" />
          </Logo>
          <Logo name="Oxford-IIIT Pet">
            <path
              d="M7 10c0-2 1-4 3-4s3 2 3 4M11 10c0-2 1-4 3-4s3 2 3 4M8 13c-1 0-2 .5-2 2s1 3 3 3h6c2 0 3-1.5 3-3s-1-2-2-2"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </Logo>
          <Logo name="Objaverse">
            <path
              d="M12 3 L20 7.5 V16 L12 20.5 L4 16 V7.5 Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M12 3 V12 M4 7.5 L12 12 L20 7.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </Logo>
          <Logo name="Poly Haven">
            <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
            <path
              d="M3 18 L9 11 L13 15 L17 11 L21 16"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <rect x="2.5" y="4" width="19" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
          </Logo>
          <Logo name="Hugging Face">
            <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="9.5" cy="10" r="1" fill="currentColor" />
            <circle cx="14.5" cy="10" r="1" fill="currentColor" />
            <path d="M9 13.5c1 1 5 1 6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M8 6 L6 4 M16 6 L18 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </Logo>
          <Logo name="Voxel51">
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <path
              d="M8 8 H16 M8 12 H14 M8 16 H12"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </Logo>
        </div>
      </div>
    </section>
  );
}

function Logo({ name, children }: { name: string; children: ReactNode }) {
  return (
    <span className="lg">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
      {name}
    </span>
  );
}
