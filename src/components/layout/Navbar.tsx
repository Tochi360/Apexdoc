"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cinematicEase } from "@/lib/animations";

function Monogram() {
  return (
    <div
      className="w-7 h-7 rounded-full border border-accent-blue flex items-center justify-center shrink-0"
      aria-hidden
    >
      <div className="w-[3px] h-[3px] rounded-full bg-accent-blue" />
    </div>
  );
}

function BrandMark() {
  return (
    <a href="#" className="flex items-center gap-3 group">
      <Monogram />
      <div className="flex items-center gap-3">
        <span className="heading-md text-base">Apex</span>
        <span className="body-sm hidden sm:inline">Document Management</span>
        <span className="h-4 w-px bg-white/10 hidden md:block" aria-hidden />
        <span className="label-mono-sm hidden md:inline">EST. 2025 · CANADA</span>
      </div>
    </a>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-ink-night/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          <BrandMark />

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ice-muted hover:text-ice-bright transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm">
              Begin records audit
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-ice-muted hover:text-ice-bright transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink-deepest/98 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: cinematicEase }}
          >
            <div className="flex flex-col h-full px-6 py-8">
              <div className="flex items-center justify-between mb-16">
                <BrandMark />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-ice-muted hover:text-ice-bright"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" strokeWidth={1.25} />
                </button>
              </div>

              <nav className="flex flex-col gap-8 flex-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="heading-xl"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: cinematicEase }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="pt-8 border-t border-white/[0.08]">
                <Button href="#contact" className="w-full justify-center">
                  Begin records audit
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
