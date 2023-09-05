"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");

  return (
    <form action="" className="h-fit border p-6 py-9 shadow-sm">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="first_name">First Name</Label>
          <Input type="text" id="first_name" placeholder="First Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="last_name">Last Name</Label>
          <Input type="text" id="last_name" placeholder="Last Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="text">Gender</Label>
          <Select>
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
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Phone</Label>
          <Input type="email" id="email" placeholder="Phone no" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Address</Label>
          <Input type="text" id="address" placeholder="Address" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="text">Package</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Package" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="starter">Starter Package</SelectItem>
                <SelectItem value="honeymoon">Honeymoon Package</SelectItem>
                <SelectItem value="vacation">Vacation Package</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="room_type">Room Type</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Room Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="delux">Delux</SelectItem>
                <SelectItem value="super_delux">Super Delux</SelectItem>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="double">Double</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="room_type">Arrived Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="room_type">Depart Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="persons">Total Person</Label>
          <Input type="text" id="persons" placeholder="Total Person" />
        </div>
      </section>
      <section className="mt-6 grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="persons">Note</Label>
        <Textarea placeholder="Type your message here." />
      </section>
      <section className="mt-12">
        <Button
          variant="ghost"
          className="bg-yellow-300 text-foreground hover:bg-yellow-200"
          size="lg"
        >
          Add Booking
        </Button>
      </section>
    </form>
  );
};

export default BookingForm;
