import Image from "next/image";
import Link from "next/link";
import AuthForm from "./auth-form";
import styles from "./auth.module.css";

export default function AuthScreen({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" aria-label="ByteSpace home">
            <Image src="/images/bytespace-logo.svg" alt="ByteSpace" width={140} height={41} priority />
          </Link>
          <Link href="/" className={styles.back}>← Back to home</Link>
        </header>

        <div className={styles.layout}>
          <section className={styles.intro} aria-label="Learn with ByteSpace">
            <p className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>{signup ? "Sign up and come in." : "Sign in with ease."}</h2>
            <p className={styles.description}>
              {signup
                ? "Big ideas start with a little curiosity. Join our creative community and discover what you can do next."
                : "A world of knowledge, a community of creators, and your next big idea. Pick up right where you left off."}
            </p>

            <div className={styles.artwork} aria-hidden="true">
              <div className={`${styles.course} ${styles.backCourse}`}>
                <div className={styles.thumbnail}>
                  <Image src="/images/course-digital-asset.png" alt="" fill sizes="250px" className={styles.cover} />
                </div>
                <h3>Build Digital Assets</h3>
                <p>by <span>purepearl studio</span></p>
                <div className={styles.courseMeta}>▥ Beginner <span>★★★★★</span></div>
                <strong>$25<small>/lifetime</small></strong>
              </div>
              <div className={`${styles.course} ${styles.frontCourse}`}>
                <div className={styles.thumbnail}>
                  <Image src="/images/course-big-data.png" alt="" fill sizes="300px" className={styles.cover} priority />
                  <div className={styles.lessonTags}><span>17 Lessons</span><span>2 hours 16 mins</span></div>
                </div>
                <div className={styles.courseTitle}><h3>The Power of Big Data</h3><span>4.5 <b>★</b></span></div>
                <p>by <span>purepearl studio</span></p>
                <div className={styles.courseMeta}>▥ Beginner <span>● ● ● <b>26+</b></span></div>
                <strong>$25<small>/lifetime</small></strong>
              </div>
              <Image src="/images/hero-decor-left-3.png" alt="" width={140} height={140} className={`${styles.ring} ${styles.lime}`} />
              <Image src="/images/hero-decor-right-2.png" alt="" width={150} height={150} className={`${styles.pyramid} ${styles.lime}`} />
              <Image src="/images/hero-decor-right-3.png" alt="" width={135} height={138} className={styles.spiral} />
              <div className={styles.students}>
                <Image src="/images/hero-happy-students.png" alt="" width={516} height={243} sizes="205px" />
              </div>
            </div>
            <p className={styles.caption}><span>✦</span> A little learning. Unlimited possibilities.</p>
          </section>

          <section className={styles.card} aria-labelledby="auth-title">
            <p className={styles.cardEyebrow}>{signup ? "Create an account" : "Sign in"}</p>
            <h1 id="auth-title">{signup ? <>Welcome to<br />ByteSpace<span>.</span></> : <>Welcome back<span>.</span></>}</h1>
            <p className={styles.cardDescription}>{signup ? "Your next great idea starts here." : "Good to see you. Let’s keep learning."}</p>
            <AuthForm key={mode} mode={mode} />
            <p className={styles.switch}>
              {signup ? "Already have an account? " : "New to ByteSpace? "}
              <Link href={signup ? "/login" : "/signup"}>{signup ? "Sign in" : "Create an account"}</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
