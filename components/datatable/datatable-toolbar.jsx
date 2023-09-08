import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown } from "lucide-react";
import { FaFilter } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const DataTableSearchInput = ({ table, columnFilters }) => {
  const [filterOption, setFilterOption] = useState(table.getAllColumns()[1].id);
  return (
    <div className="flex w-full items-center gap-4">
      <Input
        placeholder={`Filter ${filterOption}...`}
        value={table.getColumn(`${filterOption}`)?.getFilterValue() ?? ""}
        onChange={(event) =>
          table.getColumn(`${filterOption}`)?.setFilterValue(event.target.value)
        }
        className="max-w-xs"
      />
      <Select onValueChange={(value) => setFilterOption(value)}>
        <SelectTrigger className="max-w-max">
          <SelectValue
            placeholder={`Filter ${
              table.getAllColumns()[1].id.charAt(0).toUpperCase() +
              table.getAllColumns()[1].id.slice(1)
            }`}
          />
        </SelectTrigger>
        <SelectContent>
          {table.getAllColumns().map((column) => (
            <div key={column.id}>
              {column.id !== "actions" && column.id !== "select" && (
                <SelectItem className="capitalize" value={column.id}>
                  Filter {column.columnDef.header}
                </SelectItem>
              )}
            </div>
          ))}
        </SelectContent>
      </Select>
      <ul className="flex w-full gap-2">
        {columnFilters.map((filter) => {
          return (
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      key={filter.id}
                      onClick={() =>
                        console.log(
                          table.getColumn(filter.id).setFilterValue(""),
                        )
                      }
                      variant="outline"
                      className="items-center gap-2 border-dashed text-sm capitalize text-muted-foreground"
                    >
                      <span className="font-bold">{filter.id}:</span>{" "}
                      {filter.value}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove filter: {filter.id}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}

        {columnFilters.length > 0 && (
          <Button variant="ghost">Reset Filters</Button>
        )}
      </ul>
    </div>
  );
};

export const DataTableBulkAction = ({ table, options }) => {
  return (
    <div className="flex gap-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Bulk Action" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="email">Send Email</SelectItem>
          <SelectItem value="delete">Delete Booking</SelectItem>
        </SelectContent>
      </Select>
      <Button>Apply</Button>
    </div>
  );
};

export const DataTableFilterColumns = ({ table }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Columns <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const DataTableFilterOptions = ({ table }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-4">
          <FaFilter /> Filter Options
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-12 grid w-fit grid-cols-2 gap-4 p-6">
        <Select name="status">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Room Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Send Email</SelectItem>
            <SelectItem value="delete">Delete Booking</SelectItem>
          </SelectContent>
        </Select>
        <Select name="room_type">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Room Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Send Email</SelectItem>
            <SelectItem value="delete">Delete Booking</SelectItem>
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  );
};
