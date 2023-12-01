import React from "react";
import { Link } from "react-router-dom";
import { FaCircle, FaAdjust,FaCircleNotch, } from "react-icons/fa";
 import ResciveIcon  from '../../Assests/Dashboard/rescived.svg';
 import VoicIcon from '../../Assests/Dashboard/void.svg';
 import ActiveIcon from '../../Assests/Dashboard/active.svg';


const PurchaseTable = () => {

  const purchaseData = [
    {
      order: 'PO0001',
      status: "Received",
      received: "Yes",
      totalQty: 100,
      vendorName: "ABC Vendor",
      totalCost: 1000,
      due: 200,
      lastUpdate: "2023-01-01",
      receivedAt: "2023-01-15",
    },
    {
        order: 'PO0001',
        status: "Partial",
        received: "Partial",
        totalQty: 100,
        vendorName: "ABC Vendor",
        totalCost: 1000,
        due: 200,
        lastUpdate: "2023-01-01",
        receivedAt: "2023-01-15",
      },
      {
        order: 'PO0001',
        status: "Active",
        received: "Active",
        totalQty: 100,
        vendorName: "ABC Vendor",
        totalCost: 1000,
        due: 200,
        lastUpdate: "2023-01-01",
        receivedAt: "2023-01-15",
      },
      {
        order: 'PO0001',
        status: "Draft",
        received: "Partial",
        totalQty: 100,
        vendorName: "ABC Vendor",
        totalCost: 1000,
        due: 200,
        lastUpdate: "2023-01-01",
        receivedAt: "2023-01-15",
      },
      {
        order: 'PO0001',
        status: "Void",
        received: "Yes",
        totalQty: 100,
        vendorName: "ABC Vendor",
        totalCost: 1000,
        due: 200,
        lastUpdate: "2023-01-01",
        receivedAt: "2023-01-15",
      },
    // Add more data as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Received":
        return "text-green-500";
      case "Partial":
        return "text-yellow-500";
      case "Active":
        return "text-blue-500";
      case "Draft":
        return "text-gray-500";
      case "Void":
        return "text-red-500";
      default:
        return "";
    }
  };
//   const getReceivedIcon = (status) => {
//     switch (status) {
//       case "Received":
//         return <FaCheck className="text-green-500" />;
//       case "Active":
//         return <FaAdjust className="text-blue-500" />;
//       default:
//         return null;
//     }
//   };
const getReceivedIcon = (received) => {
    if (received === "Yes") {
      return <img src={ResciveIcon} alt="Timesheet" className="h-6 w-6 mt-4 mb-4 text-2xl" /> ;
    } else if (received === "Partial") {
      return<img src={VoicIcon} alt="Timesheet" className="h-6 w-6 mt-4 mb-4 text-2xl" />;
    } else if (received === "Active") {
      return <img src={ActiveIcon} alt="Timesheet" className="h-6 w-6 mt-4 mb-4 text-2xl" />
    } else if (received === "Draft") {
      return <img src={VoicIcon} alt="Timesheet" className="h-6 w-6 mt-4 mb-4 text-2xl" />
    } else if (received === "Void") {
      return <img src={ResciveIcon} alt="Timesheet" className="h-6 w-6 mt-4 mb-4 text-2xl" />
    } else {
      return null; // You can customize this for other cases or add a default icon
    }
  };
  

  return (
    <div className="mx-2 my-2">
      <div className="box-content h-[600px] w-70 p-4 border-4 border-white bg-white rounded-xl opacity-100 my-9 mx-8">
        <div>
          <div className="flex justify-between gap-2 mx-6 my-6">
            <div className="text-[18px] Admin_std leading-0 text-black admin_medium font-semibold opacity-100">
              Purchase Order
            </div>
            <div>
              <div className="text-[18px] Admin_std leading-0 text-blue-500 admin_medium font-semibold opacity-100">
                <Link to="/addpurchaseOrder">
                  Add New PO
                  <button className="text-[18px] text-blue-500 ml-1 focus:outline-none">
                    +
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
  <table className="min-w-full bg-white">
    <thead>
      <tr className="bg-black text-white">
        <th className="py-2 px-4">Order</th>
        <th className="py-2 px-4">Status</th>
        <th className="py-2 px-4">Received</th>
        <th className="py-2 px-4">Total Qty</th>
        <th className="py-2 px-4">Vendor Name</th>
        <th className="py-2 px-4">Total Cost</th>
        <th className="py-2 px-4">Due</th>
        <th className="py-2 px-4">Last Update</th>
        <th className="py-2 px-4">Received At</th>
      </tr>
    </thead>
    <tbody>
      {purchaseData.map((purchase, index) => (
        <tr key={purchase.order} className={index % 2 === 0 ? 'bg-[#F9F9F9] h-16' : 'bg-white h-16'}>
          <td className="py-2 px-4">{purchase.order}</td>
          <td className={`py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal ${getStatusColor(purchase.status)}`}>
            {purchase.status}
          </td>
          <td className="py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal" style={{ height: '20px' }}>
            {getReceivedIcon(purchase.received)}
          </td>
          <td className="py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal" style={{ height: '20px' }}>{purchase.totalQty}</td>
          <td className="py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal" style={{ height: '20px' }}>{purchase.vendorName}</td>
          <td className="py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal" style={{ height: '20px' }}>{`$${purchase.totalCost}`}</td>
          <td className="py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal" style={{ height: '20px' }}>{`$${purchase.due}`}</td>
          <td className="py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal" style={{ height: '20px' }}>{purchase.lastUpdate}</td>
          <td className="py-2 px-4 text-[16px] text-[131313] leading-3 opacity-100 admin_medium font-normal" style={{ height: '20px' }}>{purchase.receivedAt}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default PurchaseTable;
