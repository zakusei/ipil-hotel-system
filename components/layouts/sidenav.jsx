"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems as nav_links } from "@/lib/nav-items";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed hidden h-screen w-72 flex-col border-r bg-background md:flex">
      <nav className="relative h-full p-6 py-12 text-center">
        <figure>
          <Image
            className="mx-auto"
            alt="hotel-logo"
            height={64}
            width={64}
            src={"/hotel-logo.svg"}
          />
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Sibugay Hotel
          </h3>
        </figure>
        <ul className="mt-6 grid gap-1">
          <li>
            {nav_links.map(({ href, item, icon }, index) => (
              <Link
                key={`link-${index}`}
                href={href}
                className={`flex w-full items-center justify-start gap-4 rounded-md px-4  py-3 text-sm font-medium transition-colors hover:bg-zinc-50 ${
                  pathname == href && "bg-zinc-100"
                }`}
              >
                {icon}
                {item}
              </Link>
            ))}
          </li>
        </ul>
        <section className="absolute bottom-0 w-full py-6 pr-12">
          <Button className="w-full" variant="ghost">
            © Zakusei Dev
          </Button>
        </section>
      </nav>
    </aside>
  );
};

export default SideNav;
