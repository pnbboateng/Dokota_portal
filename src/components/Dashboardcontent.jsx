import React from 'react'
import Trend from "@/components/Trend";
import Piechart from "@/components/Piechart";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const Dashboardcontent = () => {
    const invoices = [
        {
          invoice: "INV001",
          paymentStatus: "Paid",
          totalAmount: "$250.00",
          paymentMethod: "Credit Card",
          date: "05 March 2025, 8:46 PM",
          customerName:"John Boakye",
          customerNumber: "233548359582"
        },
        {
          invoice: "INV002",
          paymentStatus: "Pending",
          totalAmount: "$150.00",
          paymentMethod: "PayPal",
          date: "05 March 2025, 8:46 PM",
          customerName:"Attah Mensah",
          customerNumber: "233548359582"
        },
        {
          invoice: "INV003",
          paymentStatus: "Unpaid",
          totalAmount: "$350.00",
          paymentMethod: "Bank Transfer",
          date: "05 March 2025, 8:46 PM",
          customerName:"Philip Boateng",
          customerNumber: "233548359582"
        },
        {
          invoice: "INV004",
          paymentStatus: "Paid",
          totalAmount: "$450.00",
          paymentMethod: "Credit Card",
          date: "05 March 2025, 8:46 PM",
          customerName:"Elvis Mensah",
          customerNumber: "233548359582"
        },
        {
          invoice: "INV005",
          paymentStatus: "Paid",
          totalAmount: "$550.00",
          paymentMethod: "PayPal",
          date: "05 March 2025, 8:46 PM",
          customerName:"John Boakye",
          customerNumber: "233548359582"
        },
        
      ]
  return (
    <div>
      <>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 p-4">
                <div>
                  <Trend />
                </div>
                <div>
                  <Piechart />
                </div>
              </div>

              <div className="w-full">
                <div className='mt-4 ml-4 mr-4 mb-4 border-2 border-b-stone-300 rounded-lg h-min-full'>
                    <p className='ml-4 mt-4 font-bold'>Last 5 payments</p>
                      <Table className="mt-4">
                      <TableCaption>Recent transactions</TableCaption>
                      <TableHeader className="bg-slate-200">
                        <TableRow>
                        <TableHead className="text-stone-950 font-bold">Date</TableHead>
                          <TableHead className="text-stone-950 font-bold">status</TableHead>
                          <TableHead className="text-stone-950 font-bold">Reference</TableHead>
                          <TableHead className=" text-stone-950 font-bold">Amount</TableHead>
                          <TableHead className="text-stone-950 font-bold">Payment Method</TableHead>
                          <TableHead className="text-stone-950 font-bold">Customer Name</TableHead>
                          <TableHead className="text-stone-950 font-bold">Customer Number</TableHead>
                          
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoices.map((invoice) => (
                          <TableRow key={invoice.invoice} >
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell className={invoice.paymentStatus === "Paid" ? "text-green-700" : "text-rose-900"}>{invoice.paymentStatus}</TableCell>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell >{invoice.totalAmount}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell>{invoice.customerName}</TableCell>
                            <TableCell >{invoice.customerNumber}</TableCell>
                            
                            
                          </TableRow>
                        ))}
                      </TableBody>
                      
                    </Table>
                    </div>
              </div>
            </>
          
    </div>
  )
}

export default Dashboardcontent
