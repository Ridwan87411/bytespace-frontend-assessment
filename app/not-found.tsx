import type { Metadata } from "next";
import ErrorScreen from "@/components/ui/error-screen";

export const metadata: Metadata = {
  title: "Page not found | ByteSpace",
};

export default function NotFound() {
  return <ErrorScreen />;
}
