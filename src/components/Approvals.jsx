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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const approvals = [
  { id: "DOC001", name: "Dr. John Doe", specialty: "Cardiology", status: "Pending", submittedOn: "05 March 2025" },
  { id: "DOC002", name: "Dr. Jane Smith", specialty: "Neurology", status: "Pending", submittedOn: "06 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Approved", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Rejected", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
  { id: "DOC003", name: "Dr. Mark Taylor", specialty: "Dermatology", status: "Pending", submittedOn: "07 March 2025" },
];

const ApprovalsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(approvals);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    setFilteredData(
      approvals.filter(
        (approval) =>
          (query === "" || approval.name.toLowerCase().includes(query)) &&
          (statusFilter === "all" || approval.status === statusFilter)
      )
    );
  };

  const columns = useMemo(() => [
    { accessorKey: "submittedOn", header: "Submitted On" },
    { accessorKey: "name", header: "Doctor Name" },
    { accessorKey: "specialty", header: "Specialty" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "actions", header: "Actions", cell: ({ row }) => (
        <Button className="bg-rose-950 text-white" onClick={() => setSelectedDoctor(row.original)}>View</Button>
      )
    }
  ], []);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 12 } },
  });

  return (
    <div className='mt-4 ml-4 mr-4 mb-4 border-2 border-b-stone-300 rounded-lg h-min-full'>
    <div className="space-y-4 mt-4 ml-4 mr-4 mb-4">
      <div className="flex items-center gap-4">
        <Input placeholder="Search by doctor name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-1/3" />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-rose-950 text-white" onClick={handleSearch}>Search</Button>
        <Button variant="outline" onClick={() => { setSearchQuery(""); setStatusFilter("all"); setFilteredData(approvals); }}>Reset</Button>
      </div>

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
              <TableRow key={row.id} className="cursor-pointer" onClick={() => setSelectedDoctor(row.original)}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">No results found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Dialog open={!!selectedDoctor} onOpenChange={() => setSelectedDoctor(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Doctor Approval</DialogTitle>
          </DialogHeader>
          {selectedDoctor && (
            <div className="space-y-4">
              <p><strong>Name:</strong> {selectedDoctor.name}</p>
              <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
              <p><strong>Status:</strong> {selectedDoctor.status}</p>
              <p><strong>Submitted On:</strong> {selectedDoctor.submittedOn}</p>
              <div className="flex justify-end gap-2">
                <Button className="bg-green-600 text-white" onClick={() => setSelectedDoctor(null)}>Approve</Button>
                <Button className="bg-red-600 text-white" onClick={() => setSelectedDoctor(null)}>Reject</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
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

export default ApprovalsTable;