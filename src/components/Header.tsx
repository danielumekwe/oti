"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, mainNav } from "@/lib/site";

const topLink = "flex items-center gap-2 px-[15px] text-light-text/90 transition-colors hover:text-secondary";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-50">
      {/* top bar */}
      <div className="hidden h-[50px] bg-tertiary px-[10px] md:block">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between">
          <span className={topLink}>
            <svg className="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.6l3.2 3.2-1.4 1.4-3.8-3.8V6h2v6.6z" />
            </svg>
            Open Hours: {site.hours}
          </span>
          <div className="flex items-center">
            <a href={site.phoneHref} className={topLink}>
              <svg className="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1.1l-2.3 2.2z" />
              </svg>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className={topLink}>
              <svg className="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {site.email}
            </a>
            <a href={site.social.facebook} aria-label="Facebook" className={`${topLink} ml-4`}>
              <svg className="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 8h3V4h-3c-2.8 0-4.5 1.9-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z" />
              </svg>
            </a>
            <a href={site.social.twitter} aria-label="Twitter" className={topLink}>
              <svg className="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.5 6.2c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.9A8.3 8.3 0 012 18.6a11.7 11.7 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className={topLink}>
              <svg className="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.2zM5.3 7.4a2 2 0 110-4 2 2 0 010 4zM7.1 20.4H3.6V9h3.5v11.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* main nav: transparent over the hero, solid once scrolled */}
      <nav
        className={`left-0 right-0 w-full transition-all duration-150 ${
          sticky
            ? "fixed top-0 bg-tertiary px-[10px] py-[10px] shadow-[0_2px_28px_0_rgba(0,0,0,0.09)]"
            : "absolute top-full px-[10px] py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-[15px]">
          <Link href="/" className="flex items-center">
            <Image
              src={site.logo}
              alt={site.name}
              width={160}
              height={45}
              className="h-[45px] w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center lg:flex">
            <ul className="flex items-center">
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-[17px] py-2 font-medium uppercase transition-colors duration-300 hover:text-secondary ${
                        item.children.some((c) => isActive(c.href)) || isActive(item.href)
                          ? "text-secondary"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="invisible absolute left-[15px] top-full w-max min-w-[120px] rounded-r-[5px] bg-white py-2 opacity-0 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex min-h-[35px] items-center border-l-4 px-3 py-1.5 text-[0.9rem] transition-colors hover:border-primary hover:text-primary ${
                            isActive(child.href)
                              ? "border-primary text-primary"
                              : "border-black/10 text-tertiary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-[17px] py-2 font-medium uppercase transition-colors duration-300 hover:text-secondary ${
                        isActive(item.href) ? "text-secondary" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link
              href="/request-a-quote"
              className="ml-[15px] rounded-full border border-secondary bg-secondary px-[26px] py-2.5 font-medium uppercase leading-[1.2] text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="mx-[15px] flex items-center justify-center p-2 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-md bg-white px-4 py-4 shadow-lg lg:hidden">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <span className="block font-medium uppercase text-tertiary">{item.label}</span>
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm text-dark-text hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 font-medium uppercase hover:text-secondary ${
                    isActive(item.href) ? "text-secondary" : "text-tertiary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/request-a-quote"
              className="mt-3 block rounded-full bg-secondary px-6 py-3 text-center font-medium uppercase text-white"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
