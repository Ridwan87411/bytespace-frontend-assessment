import Image from "next/image";
import Link from "next/link";
import type { Course } from "./catalog-data";
import styles from "./catalog.module.css";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className={styles.card}>
      <Link href={`/courses/${course.id}`} className={styles.cardLink}>
      <div className={styles.thumbnail}>
        <Image src={course.image} alt={course.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px" className={styles.cover} />
        <div className={styles.tags}><span>{course.lessons} lessons</span><span>{Math.floor(course.minutes / 60)}h {course.minutes % 60}m</span></div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.category}>{course.category}</p>
        <div className={styles.titleRow}>
          <h2>{course.title}</h2>
          <span className={styles.rating} aria-label={`${course.rating} out of 5 stars`}>{course.rating.toFixed(1)} <b aria-hidden="true">★</b></span>
        </div>
        <p className={styles.creator}>by <span>{course.creator}</span></p>
        <div className={styles.meta}>
          <span className={styles.level}>▥ {course.level}</span>
          <div className={styles.learners} aria-label={`${course.students} learners`}>
            {["sarah", "james", "alex"].map((name) => <Image key={name} src={`/images/testimonial-${name}.png`} alt="" width={25} height={25} />)}
            <span>26+</span>
          </div>
        </div>
        <p className={styles.price}>{course.price === 0 ? "Free" : `$${course.price}`}<span>{course.price === 0 ? " /full access" : " /lifetime"}</span></p>
      </div>
      </Link>
    </article>
  );
}
