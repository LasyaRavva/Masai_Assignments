// 6. Table Styling
function TableStyling() {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        Table Styling
      </h3>
      <div className="overflow-x-auto rounded-2xl shadow-xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <th className="px-8 py-5 text-left font-bold text-xl">Name</th>
              <th className="px-8 py-5 text-left font-bold text-xl">Email</th>
              <th className="px-8 py-5 text-left font-bold text-xl">Role</th>
              <th className="px-8 py-5 text-left font-bold text-xl">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
              <td className="px-8 py-6 font-bold text-gray-800 text-lg">John Doe</td>
              <td className="px-8 py-6 text-gray-600 text-lg">john@example.com</td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-base font-bold">Developer</span>
              </td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-bold">● Active</span>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-200 hover:bg-blue-50 transition-colors">
              <td className="px-8 py-6 font-bold text-gray-800 text-lg">Jane Smith</td>
              <td className="px-8 py-6 text-gray-600 text-lg">jane@example.com</td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-base font-bold">Designer</span>
              </td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-bold">● Active</span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
              <td className="px-8 py-6 font-bold text-gray-800 text-lg">Mike Johnson</td>
              <td className="px-8 py-6 text-gray-600 text-lg">mike@example.com</td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-base font-bold">Manager</span>
              </td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-base font-bold">● Away</span>
              </td>
            </tr>
            <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
              <td className="px-8 py-6 font-bold text-gray-800 text-lg">Sarah Williams</td>
              <td className="px-8 py-6 text-gray-600 text-lg">sarah@example.com</td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-bold">Analyst</span>
              </td>
              <td className="px-8 py-6">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-bold">● Active</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableStyling;
