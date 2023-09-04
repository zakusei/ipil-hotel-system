import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { BiSolidDashboard } from "react-icons/bi";
import { MdBedroomParent } from "react-icons/md";
import { AiFillCalendar, AiFillSetting } from "react-icons/ai";

const SideNav = () => {
  return (
    <aside className="fixed h-screen w-72 border-r bg-background">
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
        <ul className="mt-6 grid gap-4">
          <li>
            <Link
              href="#"
              className={`flex w-full items-center justify-start gap-4 rounded-md px-4  py-3 text-sm font-medium transition-colors hover:bg-yellow-200`}
            >
              <BiSolidDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`flex w-full items-center justify-start gap-4 rounded-md px-4  py-3 text-sm font-medium transition-colors hover:bg-yellow-200`}
            >
              <AiFillCalendar />
              Bookings
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`flex w-full items-center justify-start gap-4 rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-yellow-200`}
            >
              <MdBedroomParent />
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`flex w-full items-center justify-start gap-4 rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-yellow-200`}
            >
              <AiFillSetting />
              Settings
            </Link>
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
