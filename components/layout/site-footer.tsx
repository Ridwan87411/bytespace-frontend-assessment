import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-white px-6 pb-8 pt-16">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand/newsletter */}
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-lg bg-[#003BE2] px-4 py-3">
              <Image
                src="/images/bytespace-logo.svg"
                alt="ByteSpace"
                width={120}
                height={35}
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-6 flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm text-gray-900 outline-none focus:border-[#003BE2]"
              />

              <button className="rounded-full bg-[#D4FB20] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
                Search
              </button>
            </div>

            <p className="mt-3 max-w-md text-[10px] leading-5 text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Footer links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Featured Courses
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <p>Featured Categories</p>
              <p>Business</p>
              <p>IT</p>
              <p>Design</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">Development</h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <p>Marketing</p>
              <p>Photography</p>
              <p>Finance</p>
              <p>Sport</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Become a Creator
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <p>Affiliate Program</p>
              <p>Contact</p>
              <p>Help</p>
              <p>About</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ByteSpace. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>

            <a href="#" className="hover:text-gray-900">
              Cookies Settings
            </a>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
