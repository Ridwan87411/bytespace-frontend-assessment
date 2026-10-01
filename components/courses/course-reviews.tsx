import Image from "next/image";
import styles from "./course-detail.module.css";

const reviews = [
  { name: "Sarah Mitchell", image: "sarah", rating: 5, date: "August 18, 2026", title: "A clear and practical starting point", text: "The explanations were easy to follow, and the exercises helped me put each idea into practice. I especially liked being able to build on one small project throughout the lessons." },
  { name: "James Lewis", image: "james", rating: 4, date: "August 24, 2026", title: "Great structure and a comfortable pace", text: "Each module had a clear focus, which made it easy to fit learning around my work. A few more advanced examples would be welcome, but the foundations were really useful." },
  { name: "Alex Bennett", image: "alex", rating: 5, date: "September 2, 2026", title: "More confidence to start my own project", text: "I came in with plenty of ideas but no clear process. The practical walkthroughs gave me a better way to plan my work and the confidence to keep experimenting." },
];

export default function CourseReviews() {
  return (
    <>
      <div className={styles.reviewHeading}><h2>Student reviews</h2><span>Sample reviews</span></div>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <article key={review.name} className={styles.reviewCard}>
            <header className={styles.reviewHeader}>
              <Image src={`/images/testimonial-${review.image}.png`} alt="" width={44} height={44} />
              <div><h3>{review.name}</h3><p>{review.date}</p></div>
              <span className={styles.reviewStars} aria-label={`${review.rating} out of 5 stars`}><span aria-hidden="true">{"★".repeat(review.rating)}<span className={styles.emptyStars}>{"★".repeat(5 - review.rating)}</span></span></span>
            </header>
            <h4>{review.title}</h4>
            <p className={styles.reviewText}>{review.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
