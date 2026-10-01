import type { Metadata } from "next";
import CourseCatalog from "@/components/courses/course-catalog";

export const metadata: Metadata = {
  title: "Explore courses | ByteSpace",
  description: "Find your next course. Explore design, development, business, and more with ByteSpace.",
};

export default function CoursesPage() {
  return <CourseCatalog />;
}
