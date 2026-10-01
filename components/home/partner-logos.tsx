import type { CSSProperties, ReactNode } from "react";
import styles from "./partner-logos.module.css";

type Brand = {
  name: string;
  color: string;
  tint: string;
  icon: ReactNode;
};

// Fictional brands for the learning community showcase.
const brands: Brand[] = [
  {
    name: "Skillwave",
    color: "#2556db",
    tint: "#eaf0ff",
    icon: (
      <>
        <path d="m5 22 7-8 5 4 10-11" />
        <circle cx="5" cy="22" r="2" />
        <circle cx="12" cy="14" r="2" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="27" cy="7" r="2" />
      </>
    ),
  },
  {
    name: "Designory",
    color: "#7c3aed",
    tint: "#f3e8ff",
    icon: (
      <>
        <path d="m16 4 11 11-11 13L5 16 16 4Z" />
        <circle cx="16" cy="16" r="3" />
        <path d="m7 26 6-6" />
      </>
    ),
  },
  {
    name: "Codecraft",
    color: "#07806a",
    tint: "#e2f9f2",
    icon: (
      <>
        <path d="m16 3 12 7v12l-12 7-12-7V10l12-7Z" />
        <path d="m4 10 12 7 12-7M16 17v12" />
      </>
    ),
  },
  {
    name: "Orbit Labs",
    color: "#e85b22",
    tint: "#fff0e9",
    icon: (
      <>
        <ellipse cx="16" cy="16" rx="13" ry="6" transform="rotate(-25 16 16)" />
        <circle cx="16" cy="16" r="3" />
        <circle cx="25" cy="9" r="2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "Brightpath",
    color: "#b77904",
    tint: "#fff7dc",
    icon: (
      <>
        <path d="M5 26h6v-6h6v-6h6V8h5" />
        <path d="m23 4 5 4-5 4" />
        <circle cx="8" cy="9" r="3" />
      </>
    ),
  },
  {
    name: "Createbase",
    color: "#d72f77",
    tint: "#fff0f6",
    icon: (
      <>
        <rect x="4" y="5" width="10" height="10" rx="2" />
        <rect x="18" y="5" width="10" height="10" rx="2" />
        <rect x="11" y="18" width="10" height="10" rx="2" />
      </>
    ),
  },
  {
    name: "Learnloop",
    color: "#0784a5",
    tint: "#e6f8fc",
    icon: (
      <>
        <path d="M13 10H9a6 6 0 0 0 0 12h4" />
        <path d="M19 10h4a6 6 0 0 1 0 12h-4" />
        <path d="M11 16h10" />
      </>
    ),
  },
];

export default function PartnerLogos() {
  return (
    <section aria-labelledby="community-heading" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.routeIcon} aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M4 23C8 11 15 10 19 18s6 7 9-2" />
              <circle cx="4" cy="23" r="2.25" />
              <circle cx="19" cy="18" r="2.25" />
              <path className={styles.spark} d="m25 4 1.2 2.8L29 8l-2.8 1.2L25 12l-1.2-2.8L21 8l2.8-1.2L25 4Z" />
            </svg>
          </span>

          <div>
            <span className={styles.eyebrow}>Connected learning</span>
            <h2 id="community-heading" className={styles.heading}>
              Made to grow together
            </h2>
          </div>
        </div>

        <div
          className={styles.viewport}
          role="region"
          aria-label="Learning community brands; scroll horizontally on smaller screens"
          tabIndex={0}
        >
          <span className={styles.route} aria-hidden="true" />
          <ul className={styles.brandList}>
            {brands.map((brand, index) => (
              <li
                key={brand.name}
                className={styles.brand}
                style={
                  {
                    "--brand-color": brand.color,
                    "--brand-tint": brand.tint,
                    "--reveal-delay": `${180 + index * 75}ms`,
                    "--lift": index % 2 === 0 ? "-4px" : "4px",
                  } as CSSProperties
                }
              >
                <span className={styles.brandIcon} aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none">
                    {brand.icon}
                  </svg>
                </span>
                <span className={styles.brandName}>{brand.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
