"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavItem = ({ id, label }: { id: string; label: string }) => {
    const href = isHome ? `#${id}` : `/#${id}`;

    const click = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isHome) {
        e.preventDefault();
        scrollTo(id);
        setIsMenuOpen(false);
      }
    };

    const active =
      typeof window !== "undefined" &&
      window.location.hash === `#${id}`;

    return (
      <Link
        href={href}
        onClick={click}
        className={`
          block px-4 py-2 sm:px-3 sm:py-1 rounded-md 
          text-sm transition
          hover:bg-black/5 dark:hover:bg-white/10 
          ${
            active
              ? "text-[var(--text-primary)]"
              : "text-neutral-400 dark:text-neutral-300"
          }
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <div
      className={`
        fixed left-0 right-0 flex justify-center z-50 transition-all duration-300
        ${hidden ? "-top-20" : "top-3"}
      `}
    >
      <nav
        className="
          glass-panel
          px-4 py-2 sm:px-4 sm:py-2
          rounded-full
          shadow-xl backdrop-blur-xl border border-white/10
          flex items-center justify-between sm:justify-center gap-2 
          w-[90%] sm:w-auto relative
        "
      >
        {/* Name (always visible) */}
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-sm font-medium px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
        >
          Tilak Raj Rawat
        </Link>

        {/* Desktop NavItems */}
        <div className="hidden sm:flex items-center gap-1">
          <NavItem id="projects" label="Work" />
          <NavItem id="about" label="About" />
          <NavItem id="blog" label="Blog" />
          <NavItem id="contact" label="Contact" />
        </div>

        {/* Resume Button (visible on ALL screens) */}
        <a
          href="https://drive.google.com/file/d/13q2CJ_douWWRzZTdWQhBnbNZtTwACGBz/view?usp=drive_link"
           target="_blank"
  rel="noopener noreferrer"
          className="
            inline-flex items-center px-3 py-1.5 
            text-xs sm:text-sm font-medium rounded-full
            border border-white/15 
            bg-white/5 hover:bg-white/10 
            text-[var(--text-primary)] transition
          "
        >
          Download Resume
        </a>

        {/* Theme Switcher */}
        <div className="relative z-50 scale-90 sm:scale-100">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden ml-2 p-2 rounded-md hover:bg-white/10"
          onClick={() => setIsMenuOpen((p) => !p)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="
              absolute top-full mt-3 left-0 right-0
              bg-black/80 dark:bg-neutral-900/80 
              border border-white/10 backdrop-blur-xl
              rounded-2xl p-4 flex flex-col gap-1
            "
          >
            {/* Only show About + Blog on mobile */}
            <NavItem id="featured-projects" label="Work" />
            <NavItem id="contact" label="Contact" />
            <NavItem id="about" label="About" />
            <NavItem id="blog" label="Blog" />
            
            
          </div>
        )}
      </nav>
    </div>
  );
}
