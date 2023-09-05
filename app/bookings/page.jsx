import SideNav from "@/components/layouts/sidenav";
import Container from "@/components/layouts/container";
import TopNav from "@/components/layouts/topnav";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { AiOutlinePlus, AiOutlineExport } from "react-icons/ai";
import { DataTable } from "@/components/layouts/datatable";

const Bookings = () => {
  return (
    <main className="flex">
      <SideNav />
      <Container className="h-screen md:ml-72">
        <TopNav />
        <header className="flex items-center justify-between p-12">
          <section>
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Booking Lists
            </h2>
            <p className="text-muted-foreground">
              You have total 2,595 booking's.
            </p>
          </section>
          <section className="flex gap-4">
            <Button variant="outline" className="gap-4">
              <AiOutlineExport /> Export
            </Button>
            <Link
              href="/bookings/add"
              className={`${buttonVariants()} bg-yellow-200 text-zinc-950 hover:bg-yellow-300`}
            >
              <AiOutlinePlus />
            </Link>
          </section>
        </header>
        <section className="px-12">
          <DataTable />
        </section>
      </Container>
    </main>
  );
};

export default Bookings;
