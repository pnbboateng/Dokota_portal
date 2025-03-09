import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const Approvals = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      date: "05 March 2025, 8:46 PM",
      customerName: "John Boakye",
      customerNumber: "233548359582",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
      date: "05 March 2025, 8:46 PM",
      customerName: "Attah Mensah",
      customerNumber: "233548359582",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
      date: "05 March 2025, 8:46 PM",
      customerName: "Philip Boateng",
      customerNumber: "233548359582",
    },
  ];

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsOpen(true);
  };

  return (
    <div className="mt-4 ml-4 mr-4 mb-4 border-2 border-b-stone-300 rounded-lg h-min-full">
      <Table>
        <TableCaption>A list of pending doctor approvals.</TableCaption>
        <TableHeader className="bg-slate-200">
          <TableRow>
            <TableHead className="text-stone-950 font-bold">Date</TableHead>
            <TableHead className="text-stone-950 font-bold">Status</TableHead>
            <TableHead className="text-stone-950 font-bold">Reference</TableHead>
            <TableHead className="text-stone-950 font-bold">Amount</TableHead>
            <TableHead className="text-stone-950 font-bold">Payment Method</TableHead>
            <TableHead className="text-stone-950 font-bold">Customer Name</TableHead>
            <TableHead className="text-stone-950 font-bold">Customer Number</TableHead>
            <TableHead className="text-stone-950 font-bold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="cursor-pointer hover:bg-gray-100" onClick={() => openModal(invoice)}>
              <TableCell>{invoice.date}</TableCell>
              <TableCell className={invoice.paymentStatus === "Paid" ? "text-green-700" : "text-rose-900"}>
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>{invoice.customerNumber}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); openModal(invoice); }}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Doctor Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {selectedDoctor && (
              <>
                <p><strong>Name:</strong> {selectedDoctor.customerName}</p>
                <p><strong>Invoice:</strong> {selectedDoctor.invoice}</p>
                <p><strong>Status:</strong> {selectedDoctor.paymentStatus}</p>
                <p><strong>Amount:</strong> {selectedDoctor.totalAmount}</p>
                <p><strong>Payment Method:</strong> {selectedDoctor.paymentMethod}</p>
                <p><strong>Customer Number:</strong> {selectedDoctor.customerNumber}</p>
              </>
            )}
          </div>
          <DialogFooter>
            <Button className="bg-rose-950" variant="destructive" onClick={() => setIsOpen(false)}>Reject</Button>
            <Button className="bg-green-700 hover:bg-green-500" variant="default" onClick={() => setIsOpen(false)}>Approve</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Approvals;
