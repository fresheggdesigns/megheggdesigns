import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Github,
  Dribbble,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 6h5a4 4 0 1 1 0 8H4" />
      <path d="M4 14h6a3 3 0 1 1 0 6H4" />
      <path d="M15 9h5" />
      <path d="M17 9a3 3 0 1 1 0 6" />
    </svg>
  );
}

const ICON_MAP = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  dribbble: Dribbble,
  behance: BehanceIcon,
} as const;

export function Footer() {
  return (
    <footer
      className="rounded-t-2xl px-6 py-12 text-white md:px-12"
      style={{ backgroundColor: "var(--nav)" }}
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start md:max-w-md">
          <Link
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav)] rounded-full"
            aria-label={`${siteConfig.name} - Home`}
          >
            <Image
              src="/megHegg-Logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-white/80">
            {siteConfig.footer.description}
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.footer.social.map((link) => {
              const IconComponent = ICON_MAP[link.icon];
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav)] rounded"
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="text-sm text-white/60 md:self-end">
          {siteConfig.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
