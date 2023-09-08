"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

import AvailableRooms from "@/components/layouts/available-rooms";

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  gender: z.string({ required_error: "Gender field cannot be empty!" }),
  email: z.string().email({
    message: "Invalid email address!",
  }),
  phone_number: z.string().min(11, {
    message: "Phone number must be 11 characters",
  }),
  address: z.string({ required_error: "Address field is required." }),
});

export const FormAvailableRooms = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
    },
  });

  const onSubmit = (formData) => {
    formData.preventDefault();
    console.log(formData);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {/* <Separator className="my-4 md:col-span-3" /> */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Room</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="SR">Single Room</SelectItem>
                      <SelectItem value="DD">Double</SelectItem>
                      <SelectItem value="DLUX">Delux</SelectItem>
                      <SelectItem value="SDLUX">Super Delux</SelectItem>
                      <SelectItem value="SUITE">Suite</SelectItem>
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
          name="address"
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
      </form>
      <section className="my-4">
        <AvailableRooms />
      </section>
    </Form>
  );
};
