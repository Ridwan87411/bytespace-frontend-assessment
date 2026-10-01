import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-white via-[#F8FFE5] to-[#EEF1FF] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-gray-600">
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah M.",
              role: "Enthusiastic Learner",
              image: "/images/testimonial-sarah.png",
              text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations.",
            },
            {
              name: "James L.",
              role: "Lifelong Learner",
              image: "/images/testimonial-james.png",
              text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available.",
            },
            {
              name: "Alex B.",
              role: "Inspired Creator",
              image: "/images/testimonial-alex.png",
              text: "As a creator, ByteSpace has been a game-changer for me. The course editor is user-friendly, and the support from the community is incredible.",
            },
          ].map((testimonial) => (
            <ScrollReveal as="article"
              key={testimonial.name}
              className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                {testimonial.name}
              </h3>

              <p className="mt-1 text-xs font-medium text-[#003BE2]">
                {testimonial.role}
              </p>

              <p className="mt-5 text-sm leading-6 text-gray-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
