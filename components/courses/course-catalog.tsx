"use client";

import { useRef, useState, type FormEvent } from "react";
import SiteHeader from "@/components/layout/site-header";
import CourseCard from "./course-card";
import { categories, defaultFilters, PAGE_SIZE, selectCourses, type Filters } from "./catalog-data";
import styles from "./catalog.module.css";

export default function CourseCatalog() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);
  const results = selectCourses(filters);
  const pageCount = Math.ceil(results.length / PAGE_SIZE);
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const filtered = filters.query || filters.category !== "All" || filters.level !== "All" || filters.type !== "All";

  function update<K extends keyof Filters>(key: K, value: Filters[K]) {
    setFilters((previous) => ({ ...previous, [key]: value }));
    setPage(1);
  }
  function reset() { setFilters(defaultFilters); setSearch(""); setPage(1); }
  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    update("query", search);
    resultsRef.current?.scrollIntoView({ block: "start" });
  }
  function changePage(next: number) {
    setPage(next);
    resultsRef.current?.scrollIntoView({ block: "start" });
    resultsRef.current?.focus({ preventScroll: true });
  }

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <h1>Find Your Next Course</h1>
          <p>A new skill. A fresh perspective. Your next big idea.</p>
          <form className={styles.search} onSubmit={submitSearch} role="search">
            <div className={styles.searchInput}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
              <input type="search" aria-label="Search courses, categories, or creators" placeholder="Search courses, topics, or creators" value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
            <button type="submit">Find courses <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </div>

      <div className={styles.catalog} ref={resultsRef} tabIndex={-1}>
        <div className={styles.toolbar}>
          <div className={styles.filters}>
            <label><span>Type</span><select aria-label="Course type" value={filters.type} onChange={(event) => update("type", event.target.value)}><option value="All">All types</option><option>Free</option><option>Paid</option></select></label>
            <label><span>Level</span><select aria-label="Course level" value={filters.level} onChange={(event) => update("level", event.target.value)}><option value="All">All levels</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
            <label><span>Category</span><select aria-label="Course category" value={filters.category} onChange={(event) => update("category", event.target.value)}><option value="All">All categories</option>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
          </div>
          <label className={styles.sort}><span>Sort by</span><select aria-label="Sort courses" value={filters.sort} onChange={(event) => update("sort", event.target.value)}><option value="popular">Most popular</option><option value="rating">Highest rated</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
        </div>

        <div className={styles.categories} role="group" aria-label="Filter by category">
          {["All", ...categories].map((category) => <button key={category} type="button" aria-pressed={filters.category === category} onClick={() => update("category", category)}>{category === "All" ? "Featured" : category}</button>)}
        </div>
        <div className={styles.resultsLine}>
          <p role="status" aria-live="polite">{results.length ? `Showing ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, results.length)} of ${results.length} courses` : "No courses found"}{filters.query && <> for “{filters.query}”</>}</p>
          {filtered && <button type="button" onClick={reset}>Clear filters ×</button>}
        </div>

        {visible.length ? <div className={styles.grid}>{visible.map((course) => <CourseCard key={course.id} course={course} />)}</div> : (
          <div className={styles.empty}><h2>No courses match just yet.</h2><p>Try a different search or remove a filter to explore more courses.</p><button type="button" onClick={reset}>Explore all courses</button></div>
        )}

        {pageCount > 1 && <nav className={styles.pagination} aria-label="Course pagination">
          <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => changePage(page - 1)}>←</button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} type="button" aria-label={`Page ${number}`} aria-current={page === number ? "page" : undefined} onClick={() => changePage(number)}>{number}</button>)}
          <button type="button" aria-label="Next page" disabled={page === pageCount} onClick={() => changePage(page + 1)}>→</button>
        </nav>}
      </div>
    </main>
  );
}
