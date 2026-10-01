export type Course = {
  id: number;
  title: string;
  category: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  type: "Free" | "Paid";
  price: number;
  rating: number;
  lessons: number;
  minutes: number;
  students: number;
  creator: string;
};

const topics = [
  ["UI/UX Design", "Figma", "course-figma.png"],
  ["Graphic Design", "Digital Asset Design", "course-digital-asset.png"],
  ["Data Science", "Data Analytics", "course-big-data.png"],
  ["Productivity", "Creative Productivity", "course-4.png"],
  ["Business", "Money Management", "course-5.png"],
  ["Freelance & Entrepreneurship", "Startup Strategy", "course-6.png"],
  ["Music", "Music Production", "course-digital-asset.png"],
  ["Drawing & Painting", "Digital Painting", "course-figma.png"],
  ["Marketing", "Brand Strategy", "course-6.png"],
  ["Animation", "Motion Design", "course-digital-asset.png"],
  ["Social Media", "Social Storytelling", "course-4.png"],
  ["Creative Marketing", "Campaign Design", "course-6.png"],
  ["Digital Illustration", "Vector Illustration", "course-figma.png"],
  ["Film & Video", "Video Editing", "course-digital-asset.png"],
  ["Crafts", "Handmade Product Design", "course-4.png"],
  ["Photography", "Visual Composition", "course-figma.png"],
  ["Web Development", "Frontend Development", "course-big-data.png"],
  ["Cooking", "Creative Cooking", "course-6.png"],
] as const;

const editions = ["Essentials", "Practical Workshop", "From Idea to Project", "Professional Techniques", "Masterclass"];
const creators = ["Purepearl Studio", "Maya Chen", "Alex Morgan", "Sarah Davis", "James Lee"];
const featuredTitles = ["Learn Figma from Basic", "Build Digital Asset", "The Power of Big Data", "Balancing Productivity and Creativity", "Mastering Money Management", "From Idea to Startup Success"];
export const categories = topics.map(([category]) => category);

// Local catalog content; images are reused from the existing landing page.
export const courses: Course[] = editions.flatMap((edition, editionIndex) =>
  topics.map(([category, subject, image], topicIndex) => {
    const id = editionIndex * topics.length + topicIndex + 1;
    const price = id <= 6 ? 25 : id % 7 === 0 ? 0 : [25, 35, 49, 19, 59][(topicIndex + editionIndex) % 5];
    return {
      id, title: id <= 6 ? featuredTitles[id - 1] : `${subject}: ${edition}`, category, image: `/images/${image}`,
      level: editionIndex < 2 ? "Beginner" : editionIndex < 4 ? "Intermediate" : "Advanced",
      type: price === 0 ? "Free" : "Paid", price,
      rating: Number((4.5 + (id % 5) / 10).toFixed(1)),
      lessons: 12 + (id % 18), minutes: 80 + (id % 12) * 15,
      students: 120 + id * 37, creator: creators[(topicIndex + editionIndex) % creators.length],
    };
  }),
);

export type Filters = { query: string; category: string; level: string; type: string; sort: string };
export const defaultFilters: Filters = { query: "", category: "All", level: "All", type: "All", sort: "popular" };
export const PAGE_SIZE = 18;

export function selectCourses(filters: Filters) {
  const query = filters.query.trim().toLowerCase();
  const result = courses.filter((course) =>
    (filters.category === "All" || course.category === filters.category) &&
    (filters.level === "All" || course.level === filters.level) &&
    (filters.type === "All" || course.type === filters.type) &&
    (!query || `${course.title} ${course.category} ${course.creator}`.toLowerCase().includes(query)),
  );
  return result.sort((a, b) => {
    switch (filters.sort) {
      case "rating": return b.rating - a.rating || a.id - b.id;
      case "price-low": return a.price - b.price || a.id - b.id;
      case "price-high": return b.price - a.price || a.id - b.id;
      case "newest": return b.id - a.id;
      default: return b.students - a.students;
    }
  });
}
