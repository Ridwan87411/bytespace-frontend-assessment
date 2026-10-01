import type { Metadata } from "next";
import AuthScreen from "@/components/auth/auth-screen";

export const metadata: Metadata = {
  title: "Create an account | ByteSpace",
  description: "Start your learning journey with ByteSpace.",
};

export default function SignupPage() {
  return <AuthScreen mode="signup" />;
}
