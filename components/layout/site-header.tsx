import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl shrink-0 items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex items-center gap-2">
        <Image
          src="/images/bytespace-logo.svg"
          alt="ByteSpace"
          width={120}
          height={35}
          priority
        />
      </div>

      <nav className="hidden items-center gap-8 text-sm md:flex">
        <Link className="transition hover:text-[#D4FB20]" href="/">
          Home
        </Link>
        <Link className="transition hover:text-[#D4FB20]" href="/courses">
          Courses
        </Link>
        <Link className="transition hover:text-[#D4FB20]" href="/#creators">
          Creators
        </Link>
      </nav>

      <div className="flex shrink-0 items-center gap-3 text-sm sm:gap-4">
        <Link className="hover:text-[#D4FB20]" href="/login">
          Sign In
        </Link>

        <Link
          className="rounded-full border border-white/30 px-4 py-2 transition hover:bg-white hover:text-[#003BE2]"
          href="/signup"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
}
