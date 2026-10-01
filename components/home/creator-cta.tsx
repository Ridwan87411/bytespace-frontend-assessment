import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import styles from "./creator-cta.module.css";

const decorations = [
  { image: "hero-decor-left-1.png", position: styles.topSpiral },
  { image: "hero-decor-left-2.png", position: styles.whiteSpiral },
  { image: "hero-decor-right-2.png", position: styles.whiteCone },
  { image: "hero-decor-left-3.png", position: styles.limeRing, lime: true },
  { image: "hero-decor-right-2.png", position: styles.limePyramid, lime: true },
  { image: "hero-decor-right-1.png", position: styles.whiteCylinder },
  { image: "hero-decor-right-3.png", position: styles.bottomSpiral, lime: true },
];

export default function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-[#003BE2] px-6 py-20 text-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Decorations */}
      <div className={styles.decorations} aria-hidden="true">
        {decorations.map(({ image, position, lime }) => (
          <div key={position} className={`${styles.shape} ${position}`}>
            <Image
              src={`/images/${image}`}
              alt=""
              fill
              sizes="(max-width: 640px) 120px, 280px"
              className={`${styles.image} ${lime ? styles.lime : ""}`}
            />
          </div>
        ))}
      </div>

      <ScrollReveal className="relative z-10 mx-auto max-w-4xl text-center lg:max-w-[64%]">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/75">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators.
        </p>

        <Link href="/signup" className="mt-8 inline-block rounded-full bg-[#D4FB20] px-7 py-3 text-sm font-semibold text-black transition hover:scale-105">
          Join as Creator
        </Link>
      </ScrollReveal>
    </section>
  );
}
