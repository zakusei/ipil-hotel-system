import SideNav from "@/components/layouts/sidenav";
import Container from "@/components/layouts/container";
import TopNav from "@/components/layouts/topnav";
import { FormBooking } from "@/components/forms/form-booking";

const AddBookings = () => {
  return (
    <main className="flex">
      <SideNav />
      <Container className="h-screen md:ml-72">
        <TopNav />
        <header className="flex items-center justify-start p-12">
          <section>
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Add Booking
            </h2>
            <p className="text-muted-foreground">Booking check-in</p>
          </section>
        </header>
        <section className="h-56 w-full px-12">
          <FormBooking />
        </section>
      </Container>
    </main>
  );
};

export default AddBookings;
