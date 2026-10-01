import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function CreatorSection() {
  return (
    <ScrollReveal
      id="creators"
      className="mx-auto mt-20 grid max-w-6xl items-center gap-14 md:grid-cols-2"
    >
      {/* CREATOR VISUAL */}
      <div className="relative mx-auto h-[540px] w-full max-w-[520px]">

        {/* Total Revenue */}
        <div className="absolute left-0 top-[55px] z-20 w-[155px] rounded-xl bg-[#003BE2] p-4 text-white shadow-lg">
          <p className="text-[10px] text-white/80">Total Revenue</p>
          <p className="text-[9px] text-white/60">July-12</p>

          <p className="mt-2 text-lg font-bold">$120.29</p>

          <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-[60%] rounded-full bg-[#D4FB20]" />
          </div>
        </div>

        {/* Year to Date */}
        <div className="absolute left-0 top-[180px] z-20 w-[125px] rounded-xl bg-[#003BE2] p-4 text-white shadow-lg">
          <p className="text-[10px] text-white/80">Year to Date</p>
          <p className="text-[9px] text-white/60">2023</p>

          <p className="mt-2 text-base font-bold">$1,200.38</p>

          <span className="mt-3 inline-block rounded-full bg-[#D4FB20] px-2 py-1 text-[9px] font-bold text-black">
            +12%
          </span>
        </div>

        {/* Female student */}
        <Image
          src="/images/creator-student.png"
          alt="ByteSpace creator"
          width={520}
          height={540}
          className="absolute bottom-0 left-1/2 z-10 h-auto w-[390px] -translate-x-1/2 object-contain"
        />

        {/* Lime spiral beside the creator's head and shoulder */}
        <Image
          src="/images/hero-decor-right-3.png"
          alt=""
          width={637}
          height={653}
          sizes="180px"
          className="pointer-events-none absolute right-[20px] top-[95px] z-20 h-auto w-[180px] -scale-x-100 select-none"
          style={{
            filter: "brightness(0.95) sepia(1) saturate(18) hue-rotate(15deg)",
          }}
        />

        {/* Happy Students */}
        <div className="absolute bottom-[40px] right-0 z-30 w-[220px] rounded-xl bg-white p-4 shadow-xl">
          <p className="text-sm font-medium text-gray-900">
            Happy Students
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            4.5 (240) ⭐
          </p>

          <div className="mt-3 flex items-center">
            {["A", "B", "C", "D", "E"].map((student, index) => (
              <div
                key={student}
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-[9px] font-bold text-gray-700 ${index !== 0 ? "-ml-2" : ""
                  }`}
              >
                {student}
              </div>
            ))}

            <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] text-[9px] font-bold text-black">
              2K+
            </div>
          </div>
        </div>
      </div>

      {/* Creator text */}
      <div>
        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Create &amp; Manage
          <br />
          Courses Easily.
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600">
          ByteSpace supports individuals or entities in the creation,
          publication, and administration of educational courses.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Share Your Expertise",
            "Monetize Your Passion",
            "Flexibility and Autonomy",
            "Build a Community",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#003BE2] text-[10px] text-white">
                ✓
              </div>

              <span className="text-sm font-medium text-gray-700">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
