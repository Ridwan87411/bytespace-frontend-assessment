import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import CreatorSection from "./creator-section";

export default function ProfessionalGrowthSection() {
  return (
    <section className="bg-gradient-to-r from-[#F7FFE3] via-white to-[#E9EEFF] px-6 py-20">
      <ScrollReveal className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="mt-8 flex gap-10">
            <div>
              <p className="text-2xl font-bold text-[#003BE2]">12K</p>
              <p className="mt-1 text-xs text-gray-500">Students</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#003BE2]">70+</p>
              <p className="mt-1 text-xs text-gray-500">Courses</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#003BE2]">16</p>
              <p className="mt-1 text-xs text-gray-500">Creators</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto h-[540px] w-full max-w-[577px]">
          {/* Course card behind student */}
          <div className="absolute left-0 top-4 z-0 w-[300px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="relative h-[165px] w-full overflow-hidden">
              <Image
                src="/images/Frame (1).png"
                alt="Learn Figma course"
                fill
                sizes="300px"
                className="object-cover"
              />

              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] text-gray-600">
                17 Lessons
              </div>

              <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] text-gray-600">
                2 hours 16 mins
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-base font-bold text-gray-900">
                Learn Figma from Basic
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                by <span className="text-[#003BE2]">purepearl studio</span>
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600">
                  Beginner
                </span>
              </div>

              <p className="mt-3 font-bold text-[#003BE2]">
                $25
                <span className="ml-1 text-[9px] font-normal text-gray-400">
                  /lifetime
                </span>
              </p>
            </div>
          </div>

          {/* Lime spiral overlapping the top-right edge of the progress card */}
          <Image
            src="/images/hero-decor-right-3.png"
            alt=""
            width={637}
            height={653}
            sizes="160px"
            className="pointer-events-none absolute -right-6 top-[95px] z-40 h-auto w-[160px] select-none"
            style={{
              filter: "brightness(0.95) sepia(1) saturate(18) hue-rotate(15deg)",
            }}
          />

          {/* Student */}
          <Image
            src="/images/growth-visual.png"
            alt="ByteSpace student"
            width={577}
            height={540}
            className="absolute bottom-0 left-1/2 z-20 h-auto w-[440px] -translate-x-1/2 object-contain"
          />

          {/* Learning progress card */}
          <div className="absolute right-0 top-[205px] z-30 w-[205px] rounded-xl bg-white p-4 shadow-xl">
            <p className="text-[11px] text-gray-600">Learning Progress</p>

            <p className="mt-2 text-4xl font-bold text-gray-900">55%</p>

            <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CREATOR AREA */}
      <CreatorSection />
    </section>
  );
}
