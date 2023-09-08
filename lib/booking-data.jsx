import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const getBookingData = () => {
  return [
    {
      id: "AB-101",
      customer: "Landrei Zerna",
      booking: "Active",
      room_type: "Single",
      email: "zernalandrei@gmail.com",
      mobile_number: "+639455868528",
      arrive: "10 Feb 2023",
      departure: "12 Feb 2023",
      payment: "Paid",
    },
    {
      id: "AB-102",
      customer: "Jane Smith",
      booking: "Active",
      room_type: "Double",
      email: "jane.smith@example.com",
      mobile_number: "+1-555-123-4567",
      arrive: "15 Mar 2023",
      departure: "20 Mar 2023",
      payment: "Paid",
    },
    {
      id: "AB-103",
      customer: "John Doe",
      booking: "Active",
      room_type: "Suite",
      email: "john.doe@example.com",
      mobile_number: "+44-20-1234-5678",
      arrive: "5 Apr 2023",
      departure: "10 Apr 2023",
      payment: "Pending",
    },
    {
      id: "AB-104",
      customer: "Alice Johnson",
      booking: "Active",
      room_type: "Single",
      email: "alice.johnson@example.com",
      mobile_number: "+61-2-9876-5432",
      arrive: "20 May 2023",
      departure: "25 May 2023",
      payment: "Paid",
    },
    {
      id: "AB-105",
      customer: "Michael Brown",
      booking: "Active",
      room_type: "Double",
      email: "michael.brown@example.com",
      mobile_number: "+1-123-456-7890",
      arrive: "8 Jun 2023",
      departure: "14 Jun 2023",
      payment: "Pending",
    },
    {
      id: "AB-106",
      customer: "Emily Davis",
      booking: "Active",
      room_type: "Single",
      email: "emily.davis@example.com",
      mobile_number: "+44-20-9876-5432",
      arrive: "17 Jul 2023",
      departure: "22 Jul 2023",
      payment: "Paid",
    },
    {
      id: "AB-107",
      customer: "David Lee",
      booking: "Active",
      room_type: "Suite",
      email: "david.lee@example.com",
      mobile_number: "+1-555-987-6543",
      arrive: "3 Aug 2023",
      departure: "9 Aug 2023",
      payment: "Paid",
    },
    {
      id: "AB-108",
      customer: "Olivia Wilson",
      booking: "Active",
      room_type: "Single",
      email: "olivia.wilson@example.com",
      mobile_number: "+61-2-1234-5678",
      arrive: "12 Sep 2023",
      departure: "16 Sep 2023",
      payment: "Pending",
    },
    {
      id: "AB-109",
      customer: "James Johnson",
      booking: "Active",
      room_type: "Double",
      email: "james.johnson@example.com",
      mobile_number: "+44-20-555-1234",
      arrive: "25 Oct 2023",
      departure: "31 Oct 2023",
      payment: "Paid",
    },
    {
      id: "AB-110",
      customer: "Sophia Kim",
      booking: "Active",
      room_type: "Single",
      email: "sophia.kim@example.com",
      mobile_number: "+1-123-555-7890",
      arrive: "8 Nov 2023",
      departure: "15 Nov 2023",
      payment: "Paid",
    },
    {
      id: "AB-111",
      customer: "Ethan Martin",
      booking: "Active",
      room_type: "Suite",
      email: "ethan.martin@example.com",
      mobile_number: "+44-20-123-9876",
      arrive: "18 Dec 2023",
      departure: "24 Dec 2023",
      payment: "Pending",
    },
    {
      id: "AB-112",
      customer: "Ava Hernandez",
      booking: "Active",
      room_type: "Double",
      email: "ava.hernandez@example.com",
      mobile_number: "+1-555-789-1234",
      arrive: "2 Jan 2024",
      departure: "9 Jan 2024",
      payment: "Paid",
    },
    {
      id: "AB-113",
      customer: "Mason Lopez",
      booking: "Active",
      room_type: "Single",
      email: "mason.lopez@example.com",
      mobile_number: "+61-2-555-9876",
      arrive: "14 Feb 2024",
      departure: "19 Feb 2024",
      payment: "Pending",
    },
    {
      id: "AB-114",
      customer: "Liam Martinez",
      booking: "Active",
      room_type: "Suite",
      email: "liam.martinez@example.com",
      mobile_number: "+44-20-789-1234",
      arrive: "25 Mar 2024",
      departure: "30 Mar 2024",
      payment: "Paid",
    },
    {
      id: "AB-115",
      customer: "Sophia Adams",
      booking: "Active",
      room_type: "Single",
      email: "sophia.adams@example.com",
      mobile_number: "+1-555-987-7890",
      arrive: "8 Apr 2024",
      departure: "15 Apr 2024",
      payment: "Paid",
    },
    {
      id: "AB-116",
      customer: "Aiden Hall",
      booking: "Active",
      room_type: "Double",
      email: "aiden.hall@example.com",
      mobile_number: "+61-2-789-1234",
      arrive: "16 May 2024",
      departure: "21 May 2024",
      payment: "Pending",
    },
    {
      id: "AB-117",
      customer: "Emma Turner",
      booking: "Active",
      room_type: "Suite",
      email: "emma.turner@example.com",
      mobile_number: "+44-20-987-7890",
      arrive: "22 Jun 2024",
      departure: "27 Jun 2024",
      payment: "Paid",
    },
    {
      id: "AB-118",
      customer: "Noah Scott",
      booking: "Active",
      room_type: "Single",
      email: "noah.scott@example.com",
      mobile_number: "+1-123-789-1234",
      arrive: "8 Jul 2024",
      departure: "14 Jul 2024",
      payment: "Paid",
    },
    {
      id: "AB-119",
      customer: "Olivia Parker",
      booking: "Active",
      room_type: "Double",
      email: "olivia.parker@example.com",
      mobile_number: "+61-2-987-7890",
      arrive: "15 Aug 2024",
      departure: "20 Aug 2024",
      payment: "Pending",
    },
    {
      id: "AB-120",
      customer: "Liam Turner",
      booking: "Active",
      room_type: "Suite",
      email: "liam.turner@example.com",
      mobile_number: "+44-20-123-7890",
      arrive: "24 Sep 2024",
      departure: "30 Sep 2024",
      payment: "Paid",
    },
  ];
};

export const getBookingColumns = (table) => {
  return [
    {
      accessorKey: "customer",
      header: "Customer",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("customer")}</div>
      ),
    },
    {
      accessorKey: "booking",
      header: "Booking",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("booking") == "Active" ? (
            <Badge className="bg-yellow-300 text-foreground hover:bg-yellow-200">
              {row.getValue("booking")}
            </Badge>
          ) : (
            <Badge variant="secondary">{row.getValue("booking")}</Badge>
          )}
        </div>
      ),
    },
    {
      accessorKey: "room_type",
      header: "Room Type",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("room_type")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
      accessorKey: "mobile_number",
      header: "Mobile Number",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("mobile_number")}</div>
      ),
    },
    {
      accessorKey: "arrive",
      header: "Arrive",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("arrive")}</div>
      ),
    },
    {
      accessorKey: "departure",
      header: "Departure",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("departure")}</div>
      ),
    },
    {
      accessorKey: "payment",
      header: "Payment",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("payment") == "Paid" ? (
            <Badge className="bg-yellow-300 text-foreground hover:bg-yellow-200">
              {row.getValue("payment")}
            </Badge>
          ) : (
            <Badge variant="secondary">{row.getValue("payment")}</Badge>
          )}
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy booking ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Send Email</DropdownMenuItem>
              <DropdownMenuItem>Edit Booking</DropdownMenuItem>
              <DropdownMenuItem>Delete Booking</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
