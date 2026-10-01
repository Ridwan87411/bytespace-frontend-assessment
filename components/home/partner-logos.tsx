"use client";

import { useState } from "react";
import styles from "./partner-logos.module.css";

// Fictional brands for the learning community showcase.
const brands = [
  { name: "Skillwave", color: "#2563eb", mark: "M3 12c4-10 8 10 12 0s8 10 14 0M3 21c4-10 8 10 12 0s8 10 14 0" },
  { name: "Designory", color: "#7c3aed", mark: "M6 5h10a11 11 0 0 1 0 22H6ZM13 5v22M6 16h20" },
  { name: "Codecraft", color: "#08916e", mark: "m10 8-8 8 8 8m12-16 8 8-8 8M19 5l-6 22" },
  { name: "Orbit Labs", color: "#ea580c", mark: "M27 7C17-3-3 17 7 27S37 17 27 7ZM5 5l22 22M13 16h6m-3-3v6" },
  { name: "Brightpath", color: "#ca8a04", mark: "M16 3v5m0 16v5M3 16h5m16 0h5M7 7l4 4m10 10 4 4M7 25l4-4M21 11l4-4M16 11l5 5-5 5-5-5Z" },
  { name: "Createbase", color: "#db2777", mark: "m16 3 13 7-13 7L3 10ZM3 16l13 7 13-7M3 22l13 7 13-7" },
  { name: "Learnloop", color: "#0891b2", mark: "M16 16c-4-12-14-9-14 0s10 12 14 0 14-9 14 0-10 12-14 0Z" },
];

export default function PartnerLogos() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Learning community brand showcase" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.viewport}>
          <div className={styles.track} data-paused={paused}>
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.group} aria-hidden={copy === 1 ? true : undefined}>
                {brands.map((brand) => (
                  <li key={brand.name} className={styles.brand}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={brand.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={brand.mark} />
                    </svg>
                    <span>{brand.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={styles.pause}
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play logo carousel" : "Pause logo carousel"}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            {paused ? <path d="m5 2 9 6-9 6Z" /> : <path d="M4 2h3v12H4zm5 0h3v12H9z" />}
          </svg>
        </button>
      </div>
    </section>
  );
}
