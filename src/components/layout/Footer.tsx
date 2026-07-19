"use client";

import { Hairline } from "@/components/ui/Hairline";
import { FOOTER_SERVICES } from "@/lib/constants";

const footerLink =
  "text-sm text-paper-warm/80 hover:text-paper-light transition-colors duration-300";

export function Footer() {
  return (
    <footer className="relative bg-ink-deep text-paper-light">
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deepest via-ink-deep to-ink-deep pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="pt-12 flex flex-col items-center gap-4">
          <Hairline variant="default" className="bg-white/[0.08]" />
          <Hairline variant="bronze" width="w-10" />
        </div>

        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-8">
          <div>
            <p className="label-mono mb-6 !text-accent-bronze">[ SERVICES ]</p>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <a href="#services" className={footerLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono mb-6 !text-accent-bronze">[ CONTACT ]</p>
            <div className="space-y-3 text-sm text-paper-warm/80">
              <p>
                <a
                  href="mailto:info@apexdms.ca"
                  className="hover:text-paper-light transition-colors duration-300"
                >
                  info@apexdms.ca
                </a>
              </p>
              <p>Mon–Fri · 9:00 to 17:30 AST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-4 pt-10 pb-10 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
          <p className="label-mono-sm !text-paper-warm/50">
            © 2026 Apex Document Management Services. All rights reserved.
          </p>
          <p className="label-mono-sm !text-paper-warm/50">
            <a href="#" className="hover:text-paper-warm/80 transition-colors">
              Privacy Policy
            </a>
            {" · "}
            <a href="#" className="hover:text-paper-warm/80 transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
