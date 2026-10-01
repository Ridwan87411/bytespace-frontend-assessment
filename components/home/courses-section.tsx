import { courses } from "@/components/courses/catalog-data";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import Link from "next/link";

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
            At ByteSpace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </ScrollReveal>

        {/* Categories */}
        <ScrollReveal className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {[
            "Featured",
            "Music",
            "Drawing & Painting",
            "Marketing",
            "Animation",
            "Social Media",
            "UI/UX Design",
            "Creative Marketing",
            "Digital Illustration",
            "Film & Video",
            "Crafts",
            "Freelance & Entrepreneurship",
            "Graphic Design",
            "Photography",
            "Productivity",
            "Web Development",
            "Data Science",
            "Cooking",
          ].map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-xs transition ${index === 0
                ? "bg-[#D4FB20] font-semibold text-black"
                : "bg-[#F5F5F5] text-gray-600 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}

          <Link href="/courses" className="px-2 py-2 text-xs font-semibold text-[#003BE2]">
            + More
          </Link>
        </ScrollReveal>

        {/* Course cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course, index) => (
            <ScrollReveal as="article"
              key={course.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/courses/${course.id}`} className="block focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#003BE2]">
              {/* Course thumbnail */}
              {course.image ? (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`flex h-48 items-center justify-center ${index % 2 === 0 ? "bg-[#E9EDFF]" : "bg-[#F1F1F1]"
                    }`}
                >
                  <ScrollReveal className="text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4FB20] text-xl">
                      ▶
                    </div>

                    <p className="text-xs font-medium text-gray-500">
                      Course Preview
                    </p>
                  </ScrollReveal>
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#003BE2]">
                    {course.category}
                  </span>

                  <span className="text-xs font-semibold text-gray-700">
                    ★ {course.rating}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  By {course.creator}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-bold text-[#003BE2]">$25</span>

                  <span className="text-xs text-gray-400">Beginner</span>
                </div>
              </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4FB20] px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#c7ef0c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003BE2]"
          >
            See More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
