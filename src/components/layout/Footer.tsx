"use client";

import { Hairline } from "@/components/ui/Hairline";
import { FOOTER_PRACTICE, FOOTER_SERVICES } from "@/lib/constants";

function Monogram() {
  return (
    <div
      className="w-7 h-7 rounded-full border border-paper-light/60 flex items-center justify-center shrink-0"
      aria-hidden
    >
      <div className="w-[3px] h-[3px] rounded-full bg-paper-light" />
    </div>
  );
}

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

        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Monogram />
              <div>
                <p className="heading-md text-base !text-paper-light">Apex</p>
                <p className="text-sm text-paper-light/80">Document Management</p>
              </div>
            </div>
            <p className="text-sm max-w-sm mb-6 text-paper-warm/80 leading-relaxed">
              Apex Document Management Services. A discreet, professional records
              management practice for Canadian small and medium-sized businesses.
              Established 2025.
            </p>
            <div className="flex gap-6">
              <a href="#" className={footerLink}>
                X (Twitter)
              </a>
              <a
                href="https://www.linkedin.com/in/apex-document-management-services-bab089420"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                LinkedIn
              </a>
            </div>
          </div>

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
            <p className="label-mono mb-6 !text-accent-bronze">[ PRACTICE ]</p>
            <ul className="space-y-3">
              {FOOTER_PRACTICE.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={footerLink}
                  >
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
              <p>Mon–Fri · 9:00 to 17:30 ET</p>
            </div>
            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <label
                htmlFor="newsletter-email"
                className="label-mono-sm block mb-3 !text-paper-warm/60"
              >
                Subscribe to our quarterly →
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-accent-blue px-0 py-3 text-paper-light placeholder:text-paper-warm/40 text-sm outline-none transition-colors duration-300"
              />
            </form>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-4 pt-10 pb-10 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
          <p className="label-mono-sm !text-paper-warm/50">
            © 2026 Apex Document Management Services. All rights reserved.
          </p>
          <p className="label-mono-sm !text-paper-warm/50">END OF DOCUMENT — 048 / 048</p>
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
