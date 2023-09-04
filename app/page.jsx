import SideNav from "@/components/layouts/sidenav";
import Container from "@/components/layouts/container";
import TopNav from "@/components/layouts/topnav";
import { DatePickerWithRange } from "@/components/daterange-picker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <main className="flex">
      <SideNav />
      <Container className="ml-72 h-screen">
        <TopNav />
        <header className="flex items-center justify-between p-12">
          <section>
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Dashboard Overview
            </h2>
            <p className="text-muted-foreground">
              Welcome to Ipil Hotel Management System
            </p>
          </section>
          <section className="flex gap-4">
            <DatePickerWithRange />
            <Button>Export Reports</Button>
          </section>
        </header>
        <section className="mx-auto grid w-full grid-cols-3 gap-6 place-self-center px-12">
          <Card>
            <CardHeader>
              <CardTitle>Total Booking</CardTitle>
              <CardDescription>In last 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl">11,230</p>
            </CardContent>
            <CardFooter>
              <section>
                <ul className="flex justify-between gap-6">
                  <li className="text-xs">
                    <h5>THIS MONTH</h5>
                    <p className="text-sm">1913</p>
                  </li>
                  <li className="text-xs">
                    <h5>THIS WEEK</h5>
                    <p className="text-sm">1125</p>
                  </li>
                </ul>
              </section>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rooms Available</CardTitle>
              <CardDescription>24 hour period</CardDescription>{" "}
            </CardHeader>
            <CardContent>
              <p className="text-2xl">11,230</p>
            </CardContent>
            <CardFooter>
              <section>
                <ul className="flex justify-between gap-6">
                  <li className="text-xs">
                    <h5>BOOKED (M)</h5>
                    <p className="text-sm">913</p>
                  </li>
                  <li className="text-xs">
                    <h5>THIS WEEK (W)</h5>
                    <p className="text-sm">125</p>
                  </li>
                </ul>
              </section>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales Revenue</CardTitle>
              <CardDescription>
                In last 30 days revenue from rent.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl">2,158,368.00 PHP</p>
            </CardContent>
            <CardFooter>
              <section>
                <ul className="flex justify-between gap-6">
                  <li className="text-xs">
                    <h5>MONTHLY</h5>
                    <p className="text-sm">1.65M PHP</p>
                  </li>
                  <li className="text-xs">
                    <h5>WEEKLY</h5>
                    <p className="text-sm">257K PHP</p>
                  </li>
                  <li className="text-xs">
                    <h5>DAILY</h5>
                    <p className="text-sm">25K PHP</p>
                  </li>
                </ul>
              </section>
            </CardFooter>
          </Card>
        </section>
        <section className="mx-auto p-12">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Available Rooms
          </h2>
        </section>
      </Container>
    </main>
  );
};

export default Home;
