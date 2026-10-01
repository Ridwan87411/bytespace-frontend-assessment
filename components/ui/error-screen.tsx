import Link from "next/link";
import styles from "./error-screen.module.css";

type ErrorScreenProps = {
  code?: "404" | "500";
  retry?: () => void;
};

export default function ErrorScreen({ code = "404", retry }: ErrorScreenProps) {
  const notFound = code === "404";

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code} aria-hidden="true">{code}</p>
        <h1 className={styles.title}>
          {notFound ? <>The page you are looking<br className={styles.break} /> for doesn’t exist</> : <>Something went wrong.<br />Let’s try that again.</>}
        </h1>
        <p className={styles.description}>
          {notFound ? "Try using a correct URL or go back to the homepage to start again." : "We couldn’t load this page. Please try again or return to the homepage."}
        </p>
        <div className={styles.actions}>
          {retry && <button className={styles.primary} type="button" onClick={retry}>Try Again</button>}
          <Link className={retry ? styles.secondary : styles.primary} href="/">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
