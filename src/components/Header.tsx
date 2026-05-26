"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/#approach" },
  { label: "Labs", href: "/labs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--background)]/80 backdrop-blur-[14px] border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="site-container">
          <div className="flex items-center justify-between h-16 lg:h-[68px] gap-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-8 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-[13.5px] text-[var(--ink-dim)] hover:text-[var(--foreground)] hover:bg-white/5 rounded-lg transition-all duration-150 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-[13.5px] font-semibold text-white bg-(--accent) hover:bg-[#3a7aff] rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-(--accent)/25 hover:-translate-y-px"
              >
                Book a Call
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-all"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[var(--background)] border-l border-[var(--border)] p-6 overflow-y-auto"
            >
              {/* Logo row */}
              <div className="mb-8 mt-2">
                <Logo className="h-7 w-auto" />
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-[var(--foreground)] hover:text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--card)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-3 border-t border-[var(--border)]">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 font-semibold text-white bg-[var(--accent)] rounded-[10px] transition-all text-sm"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
