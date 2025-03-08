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

// Icons
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

// Mock data
const invoices = [
    { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card", date: "05 March 2025", customerName: "John Boakye", customerNumber: "233548359582" },
    { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal", date: "06 March 2025", customerName: "Attah Mensah", customerNumber: "233548359582" },
    { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer", date: "07 March 2025", customerName: "Philip Boateng", customerNumber: "233548359582" },
    { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card", date: "08 March 2025", customerName: "Elvis Mensah", customerNumber: "233548359582" },
    { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$500.00", paymentMethod: "Cash", date: "09 March 2025", customerName: "Sandra Owusu",customerNumber: "233548359582" },
    { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$220.00", paymentMethod: "PayPal", date: "10 March 2025", customerName: "Michael Owusu",customerNumber: "233548359582" },
    { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$600.00", paymentMethod: "Bank Transfer", date: "11 March 2025", customerName: "Stephen Addo",customerNumber: "233548359582" },
    { invoice: "INV008", paymentStatus: "Unpaid", totalAmount: "$600.00", paymentMethod: "Bank Transfer", date: "11 March 2025", customerName: "Stephen Addo",customerNumber: "233548359582" },
    { invoice: "INV009", paymentStatus: "Paid", totalAmount: "$275.00", paymentMethod: "Credit Card", date: "12 March 2025", customerName: "Ama Serwaa",customerNumber: "233548359582" },
    { invoice: "INV010", paymentStatus: "Pending", totalAmount: "$180.00", paymentMethod: "Mobile Money", date: "13 March 2025", customerName: "Yaw Frimpong",customerNumber: "233548359582" },
    { invoice: "INV011", paymentStatus: "Unpaid", totalAmount: "$320.00", paymentMethod: "Bank Transfer", date: "14 March 2025", customerName: "Nana Yaw",customerNumber: "233548359582" },
    { invoice: "INV012", paymentStatus: "Paid", totalAmount: "$510.00", paymentMethod: "Cash", date: "15 March 2025", customerName: "Dorcas Adjei",customerNumber: "233548359582" },
    { invoice: "INV013", paymentStatus: "Pending", totalAmount: "$195.00", paymentMethod: "PayPal", date: "16 March 2025", customerName: "Isaac Mensah",customerNumber: "233548359582" },
    { invoice: "INV014", paymentStatus: "Unpaid", totalAmount: "$710.00", paymentMethod: "Bank Transfer", date: "17 March 2025", customerName: "Joseph Osei",customerNumber: "233548359582" },
    { invoice: "INV015", paymentStatus: "Paid", totalAmount: "$365.00", paymentMethod: "Credit Card", date: "18 March 2025", customerName: "Patricia Asante",customerNumber: "233548359582" },
    { invoice: "INV016", paymentStatus: "Pending", totalAmount: "$260.00", paymentMethod: "Mobile Money", date: "19 March 2025", customerName: "Cynthia Ofori",customerNumber: "233548359582" },
    { invoice: "INV017", paymentStatus: "Unpaid", totalAmount: "$430.00", paymentMethod: "Bank Transfer", date: "20 March 2025", customerName: "Kojo Antwi",customerNumber: "233548359582" },
    { invoice: "INV018", paymentStatus: "Paid", totalAmount: "$590.00", paymentMethod: "Cash", date: "21 March 2025", customerName: "Richmond Owusu",customerNumber: "233548359582" },
    { invoice: "INV019", paymentStatus: "Pending", totalAmount: "$135.00", paymentMethod: "PayPal", date: "22 March 2025", customerName: "Emmanuel Tetteh",customerNumber: "233548359582" },
    { invoice: "INV020", paymentStatus: "Unpaid", totalAmount: "$780.00", paymentMethod: "Bank Transfer", date: "23 March 2025", customerName: "Gloria Amponsah",customerNumber: "233548359582" },
  ];
  
  

const PaymentTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(invoices);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    setFilteredData(
      invoices.filter(
        (invoice) =>
          (query === "" || invoice.invoice.toLowerCase().includes(query)) &&
          (statusFilter === "all" || invoice.paymentStatus === statusFilter)
      )
    );
  };

  const columns = useMemo(() => [
    { accessorKey: "date", header: "Date" },
    { accessorKey: "paymentStatus", header: "Status" },
    { accessorKey: "invoice", header: "Reference" },
    { accessorKey: "totalAmount", header: "Amount" },
    { accessorKey: "paymentMethod", header: "Payment Method" },
    { accessorKey: "customerName", header: "Customer Name" },
    { accessorKey: "customerNumber", header: "Customer Number" },
  ], []);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 12 } }, // Show 3 items per page
  });

  return (
    <div className="space-y-4 mt-4 ml-4 mr-4 mb-4">
      {/* Search & Filter Controls */}
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search by invoice number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/3"
        />
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Paid">Paid</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Unpaid">Unpaid</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="bg-rose-950 text-white hover:bg-rose-900"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Button variant="outline" onClick={() => { setSearchQuery(""); setStatusFilter("all"); setFilteredData(invoices); }}>
          Reset
        </Button>
      </div>

      {/* Data Table */}
      <Table >
        <TableHeader className="bg-slate-200 rounded-t-lg ">
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
  );
};

export default PaymentTable;
