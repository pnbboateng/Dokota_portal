("use client");

import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Icons
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

// Mock user data
const users = [
  { fullName: "John Doe", phoneNumber: "233548359582", role: "Administrator" },
  {
    fullName: "Jane Smith",
    phoneNumber: "233548359583",
    role: "Super Administrator",
  },
  {
    fullName: "Michael Brown",
    phoneNumber: "233548359584",
    role: "Administrator",
  },
  {
    fullName: "Sarah Johnson",
    phoneNumber: "233548359585",
    role: "Super Administrator",
  },
  {
    fullName: "David Wilson",
    phoneNumber: "233548359586",
    role: "Administrator",
  },
  {
    fullName: "Emily Davis",
    phoneNumber: "233548359587",
    role: "Super Administrator",
  },
  {
    fullName: "Daniel Martinez",
    phoneNumber: "233548359588",
    role: "Administrator",
  },
  {
    fullName: "Sophia Garcia",
    phoneNumber: "233548359589",
    role: "Super Administrator",
  },
  {
    fullName: "Michael Brown",
    phoneNumber: "233548359584",
    role: "Administrator",
  },
  {
    fullName: "Sophia Garcia",
    phoneNumber: "233548359589",
    role: "Super Administrator",
  },
  {
    fullName: "Daniel Martinez",
    phoneNumber: "233548359588",
    role: "Administrator",
  },
  {
    fullName: "Michael Brown",
    phoneNumber: "233548359584",
    role: "Administrator",
  },
  {
    fullName: "Sophia Garcia",
    phoneNumber: "233548359589",
    role: "Super Administrator",
  },
];

const ManageUsersTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(users);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    setFilteredData(
      users.filter(
        (user) =>
          (query === "" || user.fullName.toLowerCase().includes(query)) &&
          (roleFilter === "all" || user.role === roleFilter)
      )
    );
  };

  const columns = useMemo(
    () => [
      { accessorKey: "fullName", header: "Full Name" },
      { accessorKey: "phoneNumber", header: "Phone Number" },
      { accessorKey: "role", header: "Role" },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 12 } },
  });

  return (
    <div className="space-y-4 mt-4 ml-4 mr-4 mb-4">
      {/* Search & Filter Controls */}
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search by full name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/3"
        />

        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Administrator">Administrator</SelectItem>
            <SelectItem value="Super Administrator">
              Super Administrator
            </SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="bg-rose-950 text-white hover:bg-rose-900"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setSearchQuery("");
            setRoleFilter("all");
            setFilteredData(users);
          }}
        >
          Reset
        </Button>
      </div>

      {/* Data Table */}
      <Table>
        <TableHeader className="bg-slate-200 rounded-t-lg ">
          <TableRow>
            {table
              .getHeaderGroups()
              .map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))
              )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* Pagination Controls */}
      <div className="flex justify-end mt-4">
        <div className="flex items-center gap-2">
          {/* First Page */}
          <Button
            className="bg-rose-950 text-white w-8 h-8"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft className="w-4 h-4 text-white" />
          </Button>

          {/* Previous Page */}
          <Button
            className="bg-rose-950 text-white w-8 h-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </Button>

          {/* Page Numbers */}
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <Button
              key={i}
              className={`w-8 h-8 border ${
                table.getState().pagination.pageIndex === i
                  ? "bg-rose-950 text-white border-rose-950" // Selected page
                  : "bg-white text-rose-950 border-rose-950" // Unselected pages
              }`}
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </Button>
          ))}

          {/* Next Page */}
          <Button
            className="bg-rose-950 text-white w-8 h-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </Button>

          {/* Last Page */}
          <Button
            className="bg-rose-950 text-white w-8 h-8"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersTable;
