import SideNav from "@/components/layouts/sidenav";
import Container from "@/components/layouts/container";
import TopNav from "@/components/layouts/topnav";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { AiOutlinePlus, AiOutlineExport } from "react-icons/ai";
import { DataTableRooms } from "@/components/datatable/datatable-rooms";

const Bookings = () => {
  return (
    <main className="flex">
      <SideNav />
      <Container className="h-screen md:ml-72">
        <TopNav />
        <header className="mt-12 flex items-center justify-between px-12">
          <section>
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Hotel Room Lists
            </h2>
            <p className="text-muted-foreground">
              You have total 2,595 booking's.
            </p>
          </section>
          <section className="flex gap-4">
            <Link
              href="/rooms/export"
              className={`${buttonVariants({ variant: "outline" })} gap-4`}
            >
              <AiOutlineExport /> Export as Excel
            </Link>
            <Link
              href="/rooms/add"
              className={`${buttonVariants({ variant: "outline" })} gap-4`}
            >
              <AiOutlinePlus /> Add New Room
            </Link>
          </section>
        </header>
        <section className="px-12">
          <DataTableRooms />
        </section>
      </Container>
    </main>
  );
};

export default Bookings;
