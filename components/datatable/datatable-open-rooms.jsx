"use client";

import { useEffect, useState } from "react";
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
    id: 0,
    room_no: "101",
    room_type: "Single",
    meal: "None",
    bed_capacity: "1",
    rent: "599 PHP",
    status: "Open",
  },
  {
    id: 1,
    room_no: "102",
    room_type: "Delux",
    meal: "Two",
    bed_capacity: "2",
    rent: "1,599 PHP",
    status: "Open",
  },
  {
    id: 2,
    room_no: "103",
    room_type: "Double",
    meal: "Breakfast",
    bed_capacity: "1",
    rent: "899 PHP",
    status: "Open",
  },
  {
    id: 3,
    room_no: "104",
    room_type: "Delux",
    meal: "Dinner",
    bed_capacity: "1",
    rent: "1,599 PHP",
    status: "Open",
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
    accessorKey: "room_no",
    header: "Room No.",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("room_no")}</div>
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
    accessorKey: "meal",
    header: "Meal",
    cell: ({ row }) => <div className="capitalize">{row.getValue("meal")}</div>,
  },
  {
    accessorKey: "bed_capacity",
    header: "Bed Capacity",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bed_capacity")}</div>
    ),
  },
  {
    accessorKey: "rent",
    header: "Rent",
    cell: ({ row }) => <div className="capitalize">{row.getValue("rent")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <>
          {status == "Booked" && <Badge>Booked</Badge>}
          {status == "Pending" && <Badge variant="secondary">Pending</Badge>}
          {status == "Open" && <Badge variant="outline">Open</Badge>}
          {status == "Inactive" && (
            <Badge variant="destructive">Inactive</Badge>
          )}
        </>
      );
    },
  },
];

import { useSelectedRooms } from "@/lib/store-selected-rooms";

export function DataTableOpenRooms() {
  const { setSelectedRooms } = useSelectedRooms();
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

  useEffect(() => {
    const setSelection = () => {
      if (Object.keys(rowSelection).length < 1) return;
      let rooms = [];
      for (let i = 0; i < Object.keys(rowSelection).length; i++) {
        let { room_no } = data[Object.keys(rowSelection)[i]];
        rooms.push(room_no);
      }
      setSelectedRooms(rooms);
    };
    setSelection();
  }, [rowSelection]);

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
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
