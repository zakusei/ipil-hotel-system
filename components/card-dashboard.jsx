"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CardTotalBooking = () => {
  return (
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
  );
};

export const CardRoomsAvailable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rooms Available</CardTitle>
        <CardDescription>In last 24 hours.</CardDescription>{" "}
      </CardHeader>
      <div className="flex md:grid md:grid-cols-1">
        <CardContent>
          <p className="text-2xl">57</p>
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
      </div>
    </Card>
  );
};

export const CardTotalProfit = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Profit</CardTitle>
        <CardDescription>In last 24 hours.</CardDescription>
      </CardHeader>
      <div className="flex md:grid md:grid-cols-1">
        <CardContent>
          <p className="text-2xl">57</p>
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
      </div>
    </Card>
  );
};
