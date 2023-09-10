"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";
import { DatePickerWithRange } from "@/components/daterange-picker";
import { DataTableOpenRooms } from "@/components/datatable/datatable-open-rooms";

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address!",
  }),
  phone_number: z.string().min(11, {
    message: "Phone number must be 11 characters",
  }),
});

import { useSelectedRooms } from "@/lib/store-selected-rooms";
import { useDateRangeState } from "@/lib/store-form-date-range";

export const FormBooking = () => {
  const { selected_room } = useSelectedRooms();
  const { stay_date } = useDateRangeState();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    if (selected_room < 1) return;
    data["stay_room"] = selected_room;
    data["stay_date"] = stay_date;
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Landrei" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Zerna" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="zakusei.dev@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input maxLength={11} placeholder="09123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Ipil, Zamboanga Sibugay" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-4 md:col-span-3" />
        <FormField
          control={form.control}
          name="stay_date"
          className="col-span-2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stay Dates</FormLabel>
              <FormControl>
                <DatePickerWithRange {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="col-span-3">
          <DataTableOpenRooms />
        </section>
        <Button type="submit" className="mb-6">
          Submit Booking Form
        </Button>
      </form>
    </Form>
  );
};
