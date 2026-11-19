import Link from "next/link";
import Image from "next/image";
import { site, footerNav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-light-text">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Image
              src={site.logo}
              alt={site.name}
              width={160}
              height={45}
              className="mb-4 h-11 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-gray-300">{site.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{site.address}</li>
              <li>
                <a href={site.phoneHref} className="hover:text-secondary">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-secondary">
                  {site.email}
                </a>
              </li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-gray-400 md:flex-row">
          <p>© 2026 OTI Business Limited. All rights reserved.</p>
          <p>Powered by OTI Business Limited</p>
        </div>
      </div>
    </footer>
  );
}
