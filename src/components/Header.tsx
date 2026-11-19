"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site, mainNav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* top bar */}
      <div className="hidden bg-tertiary text-white md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <span>Open Hours: {site.hours}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="hover:text-secondary">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-secondary">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={site.logo}
            alt={site.name}
            width={160}
            height={45}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 font-medium text-tertiary hover:text-primary">
                  {item.label}
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-72 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-tertiary hover:bg-light-bg hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-medium text-tertiary hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/request-a-quote"
            className="rounded-md bg-secondary px-6 py-3 font-medium text-white transition hover:bg-accent-hover"
          >
            Request a Quote
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md border border-gray-200 p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="py-2">
                <span className="block font-medium text-tertiary">{item.label}</span>
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
                className="block py-2 font-medium text-tertiary hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/request-a-quote"
            className="mt-3 block rounded-md bg-secondary px-6 py-3 text-center font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
