import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "@/components/courses/catalog-data";
import CourseDetail from "@/components/courses/course-detail";

type Props = { params: Promise<{ id: string }> };

function findCourse(id: string) {
  return courses.find((course) => String(course.id) === id);
}

export function generateStaticParams() {
  return courses.map((course) => ({ id: String(course.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = findCourse((await params).id);
  if (!course) notFound();
  return { title: `${course.title} | ByteSpace`, description: `Explore ${course.title} with ${course.creator}. ${course.lessons} lessons for ${course.level.toLowerCase()} learners.` };
}

export default async function CoursePage({ params }: Props) {
  const course = findCourse((await params).id);
  if (!course) notFound();
  return <CourseDetail course={course} />;
}
