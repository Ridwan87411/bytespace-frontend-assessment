"use client";

import ErrorScreen from "@/components/ui/error-screen";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <ErrorScreen code="500" retry={retry} />;
}
