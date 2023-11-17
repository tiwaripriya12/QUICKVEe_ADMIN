import { useState } from 'react';

const TableViewData = () => {
  const [selectedStatus, setSelectedStatus] = useState(''); // State to hold selected status filter

  const tableData = [
    { id: 1, customer: 'John Doe', order: '1234', amount: '$50', status: 'Accepted' },
    { id: 2, customer: 'Jane Smith', order: '5678', amount: '$75', status: 'Rejected' },
    { id: 3, customer: 'Alice Johnson', order: '91011', amount: '$100', status: 'Processing' },
    // Add more data as needed...
  ];

  const filterByStatus = (status) => {
    setSelectedStatus(status);
    // Logic to filter table data based on status (you can implement this based on your data structure)
    // For example:
    // const filteredData = tableData.filter((row) => row.status === status);
    // Update state with filteredData or use it to render the table accordingly
  };

  return (
    <>
      <div className='mx-4 my-9'>
        <div className='box-content h-[500px] w-70 p-4 border-4 border-white bg-white rounded-2xl opacity-100' style={{ boxShadow: "0px 3px 6px #0000001F" }}>
          <div className="flex justify-end mb-4">
            <div className="relative inline-block text-left">
              <div>
                <span className="rounded-md shadow-sm">
                  <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Filter by Status
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M4.293 8.293a1 1 0 011.414-1.414L10 10.086l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 01-1.414 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </span>
              </div>
              {/* Dropdown for status filter */}
              {selectedStatus && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button onClick={() => filterByStatus('')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      All
                    </button>
                    <button onClick={() => filterByStatus('Accepted')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      Accepted
                    </button>
                    <button onClick={() => filterByStatus('Rejected')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      Rejected
                    </button>
                    <button onClick={() => filterByStatus('Processing')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      Processing
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <table className="w-full">
            <thead className="bg-black text-white">
              <tr className="border-b">
                <th className="py-3 px-6 text-left">Customer</th>
                <th className="py-3 px-6 text-left">Order</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render table rows */}
              {tableData
                .filter((row) => !selectedStatus || row.status === selectedStatus)
                .map((rowData) => (
                  <tr key={rowData.id} className="border-b">
                    <td className="py-3 px-6">{rowData.customer}</td>
                    <td className="py-3 px-6">{rowData.order}</td>
                    <td className="py-3 px-6">{rowData.amount}</td>
                    <td className="py-3 px-6">{rowData.status}</td>
                    <td className="py-3 px-6">
                      <a href={`#`} target="_blank" rel="noopener noreferrer">
                        View Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableViewData;