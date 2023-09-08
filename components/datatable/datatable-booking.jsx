"use client";

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/datatable/datatable-pagination";

import {
  DataTableBulkAction,
  DataTableSearchInput,
} from "@/components/datatable/datatable-toolbar";

export const data = [
  {
    id: "AB-101",
    customer: "Landrei Zerna",
    booking: "Active",
    room_type: "Single",
    mobile_number: "09123456789",
    check_in: "Fri Sep 08 2023",
    check_out: "Sat Sep 09 2023",
    payment: "Paid",
  },
  {
    id: "AB-102",
    customer: "Jane Smith",
    booking: "Pending",
    room_type: "Double",
    mobile_number: "09123456789",
    check_in: "Fri Sep 08 2023",
    check_out: "Sat Sep 09 2023",
    payment: "Due",
  },
  {
    id: "AB-103",
    customer: "John Doe",
    booking: "Pending",
    room_type: "Suite",
    mobile_number: "09123456789",
    check_in: "Sat Sep 09 2023",
    check_out: "Sun Sep 10 2023",
    payment: "Due",
  },
  {
    id: "AB-104",
    customer: "Alice Johnson",
    booking: "Active",
    room_type: "Single",
    mobile_number: "09123456789",
    check_in: "Mon Sep 11 2023",
    check_out: "Tue Sep 12 2023",
    payment: "Paid",
  },
  {
    id: "AB-105",
    customer: "Michael Brown",
    booking: "Active",
    room_type: "Double",
    mobile_number: "09123456789",
    check_in: "Mon Sep 11 2023",
    check_out: "Tue Sep 12 2023",
    payment: "Due",
  },
  {
    id: "AB-106",
    customer: "Emily Davis",
    booking: "Active",
    room_type: "Single",
    mobile_number: "09123456789",
    check_in: "Mon Sep 11 2023",
    check_out: "Tue Sep 12 2023",
    payment: "Paid",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
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
        {row.getValue("booking") == "Active" && (
          <Badge variant="outline">{row.getValue("booking")}</Badge>
        )}
        {row.getValue("booking") == "Pending" && (
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
    accessorKey: "mobile_number",
    header: "Mobile Number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("mobile_number")}</div>
    ),
  },
  {
    accessorKey: "check_in",
    header: "Check in",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("check_in")}</div>
    ),
  },
  {
    accessorKey: "check_out",
    header: "Check out",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("check_out")}</div>
    ),
  },
  {
    accessorKey: "payment",
    header: "Payment",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("payment") == "Paid" ? (
          <Badge variant="outline">{row.getValue("payment")}</Badge>
        ) : (
          <Badge>{row.getValue("payment")}</Badge>
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

export function DataTableBooking() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 py-4">
        <DataTableSearchInput table={table} columnFilters={columnFilters} />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-4 space-x-2 py-4">
        <DataTableBulkAction table={table} />
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
