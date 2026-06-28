"use client";

import { Hairline } from "@/components/ui/Hairline";
import { FOOTER_PRACTICE, FOOTER_SERVICES } from "@/lib/constants";

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

export function Footer() {
  return (
    <footer className="relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-ink-deepest to-ink-deepest pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="pt-12 flex flex-col items-center gap-4">
          <Hairline variant="default" />
          <Hairline variant="cream" width="w-10" />
        </div>

        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Monogram />
              <div>
                <p className="heading-md text-base">Apex</p>
                <p className="body-sm">Document Management</p>
              </div>
            </div>
            <p className="body-sm max-w-sm mb-6">
              Apex Document Management Services. A discreet, professional records
              management practice for Canadian small and medium-sized businesses.
              Established 2025.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="body-sm hover:text-ice-bright transition-colors duration-300"
              >
                X (Twitter)
              </a>
              <a
                href="#"
                className="body-sm hover:text-ice-bright transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="label-mono mb-6">[ SERVICES ]</p>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="body-sm hover:text-ice-bright transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono mb-6">[ PRACTICE ]</p>
            <ul className="space-y-3">
              {FOOTER_PRACTICE.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="body-sm hover:text-ice-bright transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono mb-6">[ CONTACT ]</p>
            <div className="space-y-3 body-sm">
              <p>
                <a
                  href="mailto:hello@apexdms.ca"
                  className="hover:text-ice-bright transition-colors duration-300"
                >
                  hello@apexdms.ca
                </a>
              </p>
              <p>
                <a
                  href="tel:+14165550100"
                  className="hover:text-ice-bright transition-colors duration-300"
                >
                  +1 (416) 555-0100
                </a>
              </p>
              <p>Mon–Fri · 9:00 to 17:30 ET</p>
            </div>
            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="label-mono-sm block mb-3">
                Subscribe to our quarterly →
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-0 border-b border-white/15 focus:border-accent-blue px-0 py-3 text-ice-warm placeholder-ice-faint text-sm outline-none transition-colors duration-300"
              />
            </form>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-4 pt-10 pb-10 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
          <p className="label-mono-sm">
            © 2026 Apex Document Management Services. All rights reserved.
          </p>
          <p className="label-mono-sm">END OF DOCUMENT — 048 / 048</p>
          <p className="label-mono-sm">
            <a href="#" className="hover:text-ice-muted transition-colors">
              Privacy Policy
            </a>
            {" · "}
            <a href="#" className="hover:text-ice-muted transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
