import React, { useState, useEffect } from "react";
import Edit from "../image/create.png";

export const CustomDataTable = () => {
  const [customerData, setCustomerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [updatedCustomerData, setUpdatedCustomerData] = useState({});


  useEffect(() => {
    fetch("https://67ecb27daa794fb3222e7adf.mockapi.io/subnav1/customer")
      .then((res) => res.json())
      .then((data) => setCustomerData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const filteredData = customerData.filter((customer) =>
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

  const handleEditClick = (customer) => {
    setEditingCustomer(customer);
    setUpdatedCustomerData({ ...customer });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCustomerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
  try {
    const response = await fetch(
      `https://67ecb27daa794fb3222e7adf.mockapi.io/subnav1/customer/${editingCustomer.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCustomerData),
      }
    );

    if (!response.ok) throw new Error("Failed to update customer");

    const updatedCustomer = await response.json();

    setCustomerData((prevData) =>
      prevData.map((cust) =>
        cust.id === updatedCustomer.id ? updatedCustomer : cust
      )
    );

    setEditingCustomer(null);
  } catch (err) {
    console.error("Error updating customer:", err);
  }
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
            <tr key={customer.id} className="hover:bg-gray-50">
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
                  className={`px-2 py-1 rounded-full text-white flex items-center justify-center ${
                    customer.status === "New"
                      ? "bg-blue-500"
                      : customer.status === "In-progress"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {customer.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button className="px-4 py-2" onClick={() => handleEditClick(customer)}>
                  <img src={Edit} alt="Edit" className="px-2 w-[40px] h-[25px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCustomer && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">Edit Customer</h3>


            <div>
              <label className="block mb-2">Customer Name</label>
              <input
                type="text"
                name="customername"
                value={updatedCustomerData.customername}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={updatedCustomerData.company}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Order Value</label>
              <input
                type="text"
                name="ordervalue"
                value={updatedCustomerData.ordervalue}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setEditingCustomer(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

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
};
