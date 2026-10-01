"use client";

import ErrorScreen from "@/components/ui/error-screen";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ErrorScreen code="500" retry={retry} />
      </body>
    </html>
  );
}
