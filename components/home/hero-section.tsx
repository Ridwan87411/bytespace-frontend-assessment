import Image from "next/image";
import SiteHeader from "@/components/layout/site-header";

export default function HeroSection() {
  return (
    <section className="relative flex h-[100svh] min-h-[600px] max-h-[800px] flex-col overflow-hidden bg-[#003BE2] text-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* NAVBAR */}
      <SiteHeader />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col items-center px-4 pt-[clamp(8px,2svh,24px)] text-center sm:px-6">
        <h1 className="max-w-3xl shrink-0 text-[clamp(28px,4.5vw,52px)] font-bold leading-[1.08]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-[clamp(12px,2svh,20px)] max-w-2xl shrink-0 text-sm leading-6 text-white/75 md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <div className="mt-[clamp(16px,3svh,32px)] flex w-full max-w-xl shrink-0 items-center rounded-full bg-white p-1.5 shadow-lg">
          <input
            type="text"
            placeholder="Course, topic, creator"
            aria-label="Search courses, topics, or creators"
            className="min-w-0 flex-1 bg-transparent px-5 py-2 text-sm text-gray-800 outline-none"
          />

          <button className="rounded-full bg-[#D4FB20] px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-105">
            Search
          </button>
        </div>

        {/* IMAGE AREA */}
        <div className="relative mt-8 min-h-0 w-full max-w-4xl flex-1">

          {/* Hero decorative elements */}

          {/* LEFT 1 - top */}
          <Image
            src="/images/hero-decor-left-1.png"
            alt=""
            width={90}
            height={90}
            className="pointer-events-none absolute left-[-300px] top-[-275px] z-0 hidden h-auto w-[245px] md:block"
          />

          {/* LEFT 2 - middle */}
          <Image
            src="/images/hero-decor-left-2.png"
            alt=""
            width={100}
            height={100}
            className="pointer-events-none absolute left-[-85px] top-[-35px] z-0 hidden h-auto w-[185px] md:block"
          />

          {/* LEFT 3 - bottom */}
          <Image
            src="/images/hero-decor-left-3.png"
            alt=""
            width={90}
            height={90}
            className="pointer-events-none absolute bottom-[25px] left-[-75px] z-0 hidden h-auto w-[230px] md:block"
          />

          {/* RIGHT 1 - top */}
          <Image
            src="/images/hero-decor-right-1.png"
            alt=""
            width={90}
            height={90}
            className="pointer-events-none absolute right-[-300px] top-[-255px] z-0 hidden h-auto w-[200px] md:block"
          />

          {/* RIGHT 2 - middle */}
          <Image
            src="/images/hero-decor-right-2.png"
            alt=""
            width={100}
            height={100}
            className="pointer-events-none absolute right-[-70px] top-[40px] z-0 hidden h-auto w-[115px] md:block"
          />

          {/* RIGHT 3 - bottom */}
          <Image
            src="/images/hero-decor-right-3.png"
            alt=""
            width={90}
            height={90}
            className="pointer-events-none absolute bottom-[60px] right-[-105px] z-0 hidden h-auto w-[120px] md:block"
          />

          {/* Green semicircle */}
          <div className="absolute bottom-0 left-1/2 aspect-square h-[160%] max-h-[570px] -translate-x-1/2 translate-y-[42%] rounded-full bg-[#D4FB20]" />       {/* Student */}
          <Image
            src="/images/hero-student.png"
            alt="Student learning with ByteSpace"
            width={578}
            height={541}
            priority
            className="absolute bottom-[-5px] left-1/2 z-10 h-[110%] max-h-[430px] w-auto max-w-none -translate-x-1/2"
          />

          {/* UI/UX card */}
          <div className="absolute left-0 top-[15%] z-20 origin-top-left scale-75 rounded-xl bg-white px-5 py-4 text-left text-black shadow-lg sm:left-[7%] sm:scale-100 md:left-[14%]">
            <p className="text-xs text-gray-500">UI/UX Design</p>
            <p className="mt-1 text-[10px] text-gray-400">
              200 Courses • 1000+ Students
            </p>
          </div>

          {/* Learning progress */}
          <div className="absolute right-0 top-[17%] z-20 origin-top-right scale-75 rounded-xl bg-white px-5 py-4 text-left text-black shadow-lg sm:right-[7%] sm:scale-100 md:right-[14%]">
            <p className="text-xs text-gray-500">Learning Progress</p>
            <p className="text-3xl font-bold">55%</p>

            <div className="mt-2 h-1.5 w-24 rounded-full bg-gray-200">
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>

          {/* Happy Students */}
          <div className="absolute bottom-[8%] left-0 z-20 origin-bottom-left scale-75 rounded-xl bg-white px-4 py-3 text-left text-black shadow-lg sm:left-[5%] sm:scale-100 md:left-[12%]">
            <p className="text-[10px] text-gray-500">Happy Students</p>

            <div className="mt-2 flex items-center gap-2">
              <div className="relative h-[30px] w-[105px]">
                <Image
                  src="/images/hero-happy-students.png"
                  alt="Happy ByteSpace students"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="text-sm font-bold">45,200+</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
