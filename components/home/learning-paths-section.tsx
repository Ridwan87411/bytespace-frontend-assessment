import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function LearningPathsSection() {
  return (
    <section className="bg-white px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-500">
            At ByteSpace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {[
            {
              title: "Design",
              image: "/images/path-design.png",
            },
            {
              title: "Development",
              image: "/images/path-development.png",
            },
            {
              title: "IT & Software",
              image: "/images/path-it-software.png",
            },
            {
              title: "Business",
              image: "/images/path-business.png",
            },
            {
              title: "Marketing",
              image: "/images/path-marketing.png",
            },
            {
              title: "Photography",
              image: "/images/path-photography.png",
            },
          ].map((path) => (
            <ScrollReveal
              key={path.title}
              className="flex h-[145px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-center"
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#D4FB20]">
                <div className="relative h-[30px] w-[30px]">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="mt-3 text-sm font-medium text-gray-900">
                {path.title}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
