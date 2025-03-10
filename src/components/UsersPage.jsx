"use client";

import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

// Mock user data
const users = [
  { date: "01 March 2025", name: "John Doe", number: "233548359582", role: "Doctor", status: "Active" },
  { date: "02 March 2025", name: "Jane Smith", number: "233548359583", role: "Patient", status: "Inactive" },
  { date: "03 March 2025", name: "Michael Brown", number: "233548359584", role: "Doctor", status: "Active" },
  { date: "04 March 2025", name: "Emily White", number: "233548359585", role: "Patient", status: "Inactive" },
  { date: "05 March 2025", name: "David Black", number: "233548359586", role: "Doctor", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },
  { date: "06 March 2025", name: "Anna Green", number: "233548359587", role: "Patient", status: "Active" },


];

const usersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(users);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    setFilteredData(
      users.filter(
        (user) =>
          (query === "" ||
            Object.values(user).some((value) =>
              value.toLowerCase().includes(query)
            )) &&
          (roleFilter === "all" || user.role === roleFilter)
      )
    );
  };

  const columns = useMemo(
    () => [
      { accessorKey: "date", header: "Date" },
      { accessorKey: "name", header: "Customer Name" },
      { accessorKey: "number", header: "Customer Number" },
      { accessorKey: "role", header: "Role" },
      { accessorKey: "status", header: "Payment Status" },
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
    <div className='mt-4 ml-4 mr-4 mb-4 border-2 border-b-stone-300 rounded-lg h-min-full'>
    <div className="space-y-4 mt-4 ml-4 mr-4 mb-4 ">
      {/* Search & Filter Controls */}
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search..."
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
            <SelectItem value="Doctor">Doctor</SelectItem>
            <SelectItem value="Patient">Patient</SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-rose-950 text-white hover:bg-rose-900" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outline" onClick={() => { setSearchQuery(""); setRoleFilter("all"); setFilteredData(users); }}>
          Reset
        </Button>
      </div>

      {/* Data Table */}
      <Table>
        <TableHeader className="bg-slate-200">
          <TableRow>
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
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
    </div>
    
  );
};

export default usersPage
