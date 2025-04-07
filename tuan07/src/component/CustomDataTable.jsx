import React, { useState } from "react";
import CustomerData from "../data/CustomeData.js";


export const CustomDataTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());

  const filteredData = CustomerData.filter((customer) =>
    customer.customername.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = filteredData.map((_, index) => index);
      setSelectedRows(new Set(allIds));
    } else {
      setSelectedRows(new Set());
    }
  };


  const toggleSelectRow = (index) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index);
    } else {
      newSelectedRows.add(index);
    }
    setSelectedRows(newSelectedRows);
  };

  return (
    <div className="overflow-x-auto px-4 py-4">
      <table className="min-w-full table-auto border-collapse border border-gray-500">
        <thead className="bg-gray-150">
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">
              <input
                type="checkbox"
                className="w-4 h-4"
                onChange={toggleSelectAll}
                checked={filteredData.length === selectedRows.size}
              />
            </th>
            <th className="py-2 px-4 border-b text-left">Avatar</th>
            <th className="py-2 px-4 border-b text-left">Customer Name</th>
            <th className="py-2 px-4 border-b text-left">Company</th>
            <th className="py-2 px-4 border-b text-left">Order Value</th>
            <th className="py-2 px-4 border-b text-left">Order Date</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
            <th className="py-2 px-4 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((customer, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedRows.has(index)}
                  onChange={() => toggleSelectRow(index)}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <img
                  src={customer.avatar}
                  alt={customer.customername}
                  className="w-8 h-8 rounded-full"
                />
              </td>
              <td className="py-2 px-4 border-b">{customer.customername}</td>
              <td className="py-2 px-4 border-b">{customer.company}</td>
              <td className="py-2 px-4 border-b">{customer.ordervalue}</td>
              <td className="py-2 px-4 border-b">{customer.orderdate}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`px-2 py-1 rounded-full text-white ${
                    customer.status === "New"
                      ? "bg-green-500"
                      : customer.status === "In-progress"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                >
                  {customer.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center py-4">
    <span className="text-sm text-gray-700">Showing 1 to 10 of 100 results</span>
    <div className="flex space-x-2">
      <button className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200">
        &lt; Prev
      </button>
      <button className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200">
        1
      </button>
      <button className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200">
        2
      </button>
      <button className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200">
        3
      </button>
      <button className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200">
        &gt; Next
      </button>
    </div>
  </div>
    </div>
    
  );
 
}
