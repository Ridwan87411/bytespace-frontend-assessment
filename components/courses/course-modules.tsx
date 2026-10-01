import type { Course } from "./catalog-data";
import styles from "./course-detail.module.css";

const moduleTopics = [
  "Foundations and essential concepts",
  "Principles for effective practice",
  "Building a thoughtful workflow",
  "Practical techniques and experimentation",
  "Project development and critique",
  "Refining and sharing your work",
];

export default function CourseModules({ course }: { course: Course }) {
  const category = course.category.toLowerCase();
  const descriptions = [
    `Lay the groundwork with an introduction to ${category}, its core ideas, and the tools you will use throughout the course.`,
    `Explore the principles behind successful ${category} projects and learn how to make purposeful choices in your own work.`,
    "Turn a broad idea into a clear plan. Organize your resources, set useful goals, and build a process you can repeat.",
    `Practice essential ${category} techniques with guided exercises. Compare different approaches and discover what works best for you.`,
    "Bring your skills together in a practical project. Learn to review your progress, respond to feedback, and improve the details.",
    "Add the finishing touches, reflect on what you have learned, and prepare your project to share with others.",
  ];

  return (
    <>
      <h2>Explore the Modules</h2>
      <p>Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
      <h2>Lesson List</h2>
      <ol className={styles.moduleList}>
        {moduleTopics.map((title, index) => {
          const count = Math.floor(course.lessons / moduleTopics.length) + (index < course.lessons % moduleTopics.length ? 1 : 0);
          return (
            <li key={title}>
              <span className={styles.moduleIcon} aria-hidden="true"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="12" height="12" rx="2" /><path d="m15 10 6-3v10l-6-3" /></svg></span>
              <div><h3>Module {index + 1}: {index === 0 ? `Introduction to ${course.category}` : title}</h3><p>{descriptions[index]}</p><span className={styles.moduleCount}>{count} lessons</span></div>
            </li>
          );
        })}
      </ol>
      <h2>Lesson Content</h2>
      <p>Engage with each lesson through captivating video content, detailed text explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
      <p className={styles.moduleNote}>{course.lessons} planned lessons · {Math.floor(course.minutes / 60)}h {course.minutes % 60}m total. This is a sample course outline; lesson videos and learning resources are not available yet.</p>
    </>
  );
}
