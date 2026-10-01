"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SiteHeader from "@/components/layout/site-header";
import CourseReviews from "./course-reviews";
import CourseModules from "./course-modules";
import type { Course } from "./catalog-data";
import styles from "./course-detail.module.css";

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = typeof tabs[number];
const lessonTopics = ["Introduction and goals", "Core concepts", "Tools and workspace", "Planning your project", "Building a strong foundation", "A practical walkthrough", "Improving your workflow", "Common mistakes to avoid", "Guided practice", "Refining your work", "Review and feedback", "Your next steps"];

export default function CourseDetail({ course }: { course: Course }) {
  const [tab, setTab] = useState<Tab>("About");
  const [shareMessage, setShareMessage] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const previewRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lessonDuration = Math.floor(course.minutes / course.lessons);
  const lessons = Array.from({ length: course.lessons }, (_, index) => ({
    title: index === 0 ? `Introduction to ${course.category}` : `${lessonTopics[index % lessonTopics.length]}${index >= lessonTopics.length ? ` · Part ${Math.floor(index / lessonTopics.length) + 1}` : ""}`,
    minutes: lessonDuration + (index < course.minutes % course.lessons ? 1 : 0),
  }));
  const duration = `${Math.floor(course.minutes / 60)}h ${course.minutes % 60}m`;
  const points = [`Understand the foundations of ${course.category.toLowerCase()}`, "Develop a practical, repeatable workflow", "Turn your ideas into a focused project", "Learn to evaluate and improve your work", "Build confidence with guided exercises", "Plan the next step in your learning journey"];

  async function share() {
    try {
      if (navigator.share) await navigator.share({ title: course.title, url: window.location.href });
      else { await navigator.clipboard.writeText(window.location.href); setShareMessage("Course link copied."); }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) setShareMessage("Copy the address from your browser to share this course.");
    }
  }
  function showLessons() {
    setTab("Lessons");
    contentRef.current?.scrollIntoView({ block: "start" });
    document.getElementById("tab-lessons")?.focus({ preventScroll: true });
  }

  return (
    <main className={styles.page}>
      <div className={styles.blueBackground} aria-hidden="true" />
      <div className={styles.header}><SiteHeader /></div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Link className={styles.back} href="/courses">← All courses</Link>
          <div className={styles.titleRow}>
            <div><h1>{course.title}</h1><p>Unlock your potential in {course.category.toLowerCase()}, one lesson at a time.</p></div>
            <button type="button" className={styles.share} onClick={share}>↗ Share</button>
          </div>
          <p className={styles.byline}>by {course.creator}</p>
          <div className={styles.badges}><span>▥ {course.level}</span><span>★ {course.rating.toFixed(1)} rating</span><span>♧ {course.students.toLocaleString("en-US")} students</span></div>
          <p role="status" className={styles.shareStatus}>{shareMessage}</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.mainColumn}>
            <button className={styles.preview} type="button" onClick={() => previewRef.current?.showModal()} aria-label={`Open preview for ${course.title}`}>
              <Image src={course.image} alt={course.title} fill priority sizes="(max-width: 767px) 100vw, 700px" className={styles.cover} />
              <span className={styles.play} aria-hidden="true">▶</span><span className={styles.previewLabel}>Course preview</span>
            </button>

            <div ref={contentRef} className={styles.content}>
              <div role="tablist" aria-label="Course information" className={styles.tabs}>
                {tabs.map((item, index) => <button key={item} type="button" role="tab" id={`tab-${item.toLowerCase()}`} aria-controls={`panel-${item.toLowerCase()}`} aria-selected={tab === item} tabIndex={tab === item ? 0 : -1} onClick={() => setTab(item)} onKeyDown={(event) => {
                  let next: number;
                  if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
                  else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = tabs.length - 1;
                  else return;
                  event.preventDefault(); setTab(tabs[next]); document.getElementById(`tab-${tabs[next].toLowerCase()}`)?.focus();
                }}>{item}</button>)}
              </div>

              <div role="tabpanel" id="panel-about" aria-labelledby="tab-about" hidden={tab !== "About"} tabIndex={0} className={styles.panel}>
                <h2>Description</h2>
                <p>Explore {course.category.toLowerCase()} through <strong>{course.title}</strong>. This course brings together core ideas, practical exercises, and a project-focused approach to help you move from curiosity to confident practice.</p>
                <p>Designed for {course.level.toLowerCase()} learners, the course outline progresses from key concepts to hands-on application. Work at your own pace, revisit ideas as you need them, and connect what you learn to your own creative goals.</p>
                <p>Whether you are developing a new skill or exploring a fresh direction, use this learning path to build a clearer process and take the next step in your {course.category.toLowerCase()} journey.</p>
                <h2>Sneak peek</h2>
                <div className={styles.gallery}>{[course.image, "/images/course-figma.png", "/images/course-digital-asset.png", "/images/course-6.png"].map((image, index) => <button type="button" key={`${image}-${index}`} onClick={() => previewRef.current?.showModal()} aria-label={`Open course preview ${index + 1}`}><Image src={image} alt={`Course inspiration ${index + 1}`} fill sizes="160px" className={styles.cover} /></button>)}</div>
                <h2>Key points</h2><ul className={styles.points}>{points.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
              </div>

              <div role="tabpanel" id="panel-lessons" aria-labelledby="tab-lessons" hidden={tab !== "Lessons"} tabIndex={0} className={styles.panel}>
                <CourseModules course={course} />
              </div>

              <div role="tabpanel" id="panel-reviews" aria-labelledby="tab-reviews" hidden={tab !== "Reviews"} tabIndex={0} className={styles.panel}>
                <CourseReviews />
              </div>
            </div>
          </div>

          <aside className={styles.sidebar} aria-label="Course enrollment and details">
            <h2>{course.lessons} lessons <span>({duration})</span></h2>
            <ol className={styles.lessonPreview}>{lessons.slice(0, 3).map((lesson, index) => <li key={index}><span>{String(index + 1).padStart(2, "0")}</span><button type="button" onClick={showLessons}>{lesson.title}</button><small>{lesson.minutes} min</small></li>)}</ol>
            <button type="button" className={styles.moreLessons} onClick={showLessons}>+ {course.lessons - 3} more lessons</button>
            <p className={styles.pitch}>Ready to dive in? Start building your next chapter.</p>
            <p className={styles.price}>{course.price === 0 ? "Free" : `$${course.price}`}<span>{course.price === 0 ? " full access" : " /lifetime"}</span></p>
            <Link className={styles.enroll} href="/signup">Enroll now <span aria-hidden="true">↗</span></Link>
            <h3 className={styles.includesHeading}>This course includes</h3>
            <ul className={styles.includes}><li><span>▤</span>{course.lessons} planned lessons</li><li><span>◷</span>{duration} of learning content</li><li><span>▥</span>{course.level} learning path</li><li><span>◇</span>Practical project outline</li></ul>
            <div className={styles.creator}><Image src="/images/testimonial-alex.png" alt="" width={38} height={38} /><div><h3>{course.creator}</h3><p>{course.category} creator</p></div></div>
            <p className={styles.pitch}>Explore ideas, develop your skills, and make space for your creativity.</p>
            <button type="button" className={styles.profileButton} aria-expanded={profileOpen} aria-controls="creator-profile" onClick={() => setProfileOpen(!profileOpen)}>{profileOpen ? "Hide profile" : "See creator profile"}</button>
            <p hidden={!profileOpen} id="creator-profile" className={styles.profile}>{course.creator} shares a practical learning path in {course.category.toLowerCase()}, with a focus on exploring ideas and building projects.</p>
          </aside>
        </div>
      </div>

      <dialog ref={previewRef} className={styles.dialog} onClick={(event) => { if (event.target === event.currentTarget) previewRef.current?.close(); }} aria-labelledby="preview-title">
        <div className={styles.dialogBody}><button type="button" className={styles.close} aria-label="Close preview" onClick={() => previewRef.current?.close()}>×</button><h2 id="preview-title">{course.title}</h2><div className={styles.dialogImage}><Image src={course.image} alt={course.title} fill sizes="(max-width: 767px) 90vw, 640px" className={styles.cover} /></div><p>A video preview is not available for this course yet. Explore the About and Lessons tabs for the course overview.</p></div>
      </dialog>
    </main>
  );
}
