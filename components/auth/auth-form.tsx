"use client";

import { useState, type FormEvent } from "react";
import styles from "./auth.module.css";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(signup
      ? "Account creation is not available yet. Please check back soon. Your details have not been sent or saved."
      : "Sign-in is not available yet. Please check back soon. Your details have not been sent or saved.");
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {signup && (
          <div className={styles.field}>
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" name="name" autoComplete="name" placeholder="Jamie Davis" required maxLength={100} pattern=".*\S.*" />
          </div>
        )}
        <div className={styles.field}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.password}>
            <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete={signup ? "new-password" : "current-password"} placeholder={signup ? "Create a password" : "Enter your password"} minLength={signup ? 8 : undefined} required aria-describedby={signup ? "password-hint" : undefined} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} aria-controls="password" aria-pressed={showPassword}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
                {showPassword && <path d="m3 3 18 18" />}
              </svg>
            </button>
          </div>
          {signup && <p id="password-hint" className={styles.hint}>Use at least 8 characters.</p>}
        </div>
        <button type="submit" className={styles.submit}>{signup ? "Create account" : "Sign in"}<span aria-hidden="true">↗</span></button>
      </form>

      {!signup && (
        <>
          <div className={styles.divider}><span>or continue with</span></div>
          <div className={styles.socials}>
            <button type="button" onClick={() => setMessage("Google sign-in is not available yet. Please check back soon.")}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.36Z" /><path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.81-1.76-5.6-4.12H3.05v2.59A10 10 0 0 0 12 22Z" /><path fill="#FBBC05" d="M6.4 13.92a6 6 0 0 1 0-3.84V7.49H3.05a10 10 0 0 0 0 9.02l3.35-2.59Z" /><path fill="#EA4335" d="M12 5.96c1.47 0 2.79.51 3.83 1.51l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.95 5.49l3.35 2.59C7.19 7.72 9.4 5.96 12 5.96Z" /></svg>
              Google
            </button>
            <button type="button" onClick={() => setMessage("Facebook sign-in is not available yet. Please check back soon.")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true"><path d="M24 12a12 12 0 1 0-13.88 11.86v-8.39H7.08V12h3.04V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.96.92-1.96 1.87V12h3.33l-.53 3.47h-2.8v8.39A12 12 0 0 0 24 12Z" /></svg>
              Facebook
            </button>
          </div>
        </>
      )}
      <p role="status" aria-live="polite" className={message ? styles.notice : styles.emptyNotice}>{message}</p>
    </>
  );
}
