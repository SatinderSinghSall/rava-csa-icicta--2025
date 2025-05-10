import React from "react";

export default function RegistrationFeeTable() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Particulars Registration Fee
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-blue-700 text-left">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-3 font-semibold border border-blue-700">
                Particulars
              </th>
              <th className="px-4 py-3 font-semibold border border-blue-700">
                Registration Fee
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr>
              <td className="px-4 py-2 border border-blue-700">
                Academicians/Research Scholars/Industry
              </td>
              <td className="px-4 py-2 border border-blue-700">Rs. 2000</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-4 py-2 border border-blue-700">Students</td>
              <td className="px-4 py-2 border border-blue-700">Rs. 1300</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-blue-700">
                Foreign Participants (Excluding Travel Fare)
              </td>
              <td className="px-4 py-2 border border-blue-700">US $200</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-4 py-2 border border-blue-700">
                Participation (Faculty/Industrialist)
              </td>
              <td className="px-4 py-2 border border-blue-700">Rs. 300</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-blue-700">
                Participation (Student)
              </td>
              <td className="px-4 py-2 border border-blue-700">Rs. 250</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-700 font-medium">
        <span className="font-bold">Note:</span> The Registration should be done
        on or before <span className="text-red-600">May 15, 2025</span>
      </p>
    </div>
  );
}
