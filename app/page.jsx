import SideNav from "@/components/layouts/sidenav";
import Container from "@/components/layouts/container";
import TopNav from "@/components/layouts/topnav";
import { DatePickerWithRange } from "@/components/daterange-picker";
import { Button } from "@/components/ui/button";
import { AiOutlineExport } from "react-icons/ai";
import {
  CardTotalBooking,
  CardRoomsAvailable,
  CardTotalProfit,
} from "@/components/card-dashboard";

const Home = () => {
  return (
    <main className="flex">
      <SideNav />
      <Container className="h-screen md:ml-72">
        <TopNav />
        <header className="items-center justify-between p-12 md:flex">
          <section className="mb-4 md:mb-0">
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Dashboard Overview
            </h2>
            <p className="text-muted-foreground">
              Welcome to Ipil Hotel Management System
            </p>
          </section>
          <section className="flex flex-col gap-4 md:flex-row">
            <DatePickerWithRange />
            <Button variant="outline" className="gap-4">
              <AiOutlineExport /> Export Reports
            </Button>
          </section>
        </header>
        <section className="mx-auto grid w-full grid-cols-1 gap-6 place-self-center px-12 md:grid-cols-3">
          <CardTotalBooking />
          <CardTotalProfit />
          <CardRoomsAvailable />
        </section>
      </Container>
    </main>
  );
};

export default Home;
