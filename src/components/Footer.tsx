import Link from "next/link";
import { footerNav } from "@/lib/site";

const columns = [
  { title: "Company", links: footerNav.company },
  { title: "Services", links: footerNav.services },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg">
      <section className="py-[50px] md:py-[130px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start">
          {columns.map((col) => (
            <div key={col.title} className="my-[15px] w-full px-[15px] md:w-1/2 lg:w-1/4">
              <div className="rounded-[10px] bg-[#ffffff06] p-[35px]">
                <h4 className="mb-6 font-sans text-[1.5rem] font-bold leading-[1.2] text-white">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base leading-6 text-light-text transition-colors hover:text-secondary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#ffffff05] py-[10px]">
        <div className="mx-auto flex max-w-[1200px] flex-col md:flex-row md:items-center md:justify-between">
          <span className="mx-[15px] px-[15px] py-2 text-base leading-6 text-light-text">
            © 2026.
          </span>
          <span className="mx-[15px] px-[15px] py-2 text-base leading-6 text-light-text">
            Powered by OTI BUSINESS LIMITED
          </span>
        </div>
      </section>
    </footer>
  );
}
