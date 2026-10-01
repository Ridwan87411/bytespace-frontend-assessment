import type { Metadata } from "next";
import AuthScreen from "@/components/auth/auth-screen";

export const metadata: Metadata = {
  title: "Sign in | ByteSpace",
  description: "Sign in to your ByteSpace learning account.",
};

export default function LoginPage() {
  return <AuthScreen mode="login" />;
}
