import { useEffect, useState } from "react";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "https://rava-csa-icicta-2025.onrender.com/api/registrations",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setData(res.data);
      } catch (err) {
        console.log("Unauthorized or error loading data");
      }
    };

    fetchRegistrations();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Adjust path if needed
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold text-gray-900">
          📊 Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition duration-300"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>

      {/* Table Section */}
      <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Phone</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Institution</th>
                <th className="px-6 py-3 font-medium">Country</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((entry, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4">{entry.fullName}</td>
                  <td className="px-6 py-4">{entry.email}</td>
                  <td className="px-6 py-4">{entry.phone}</td>
                  <td className="px-6 py-4">{entry.category}</td>
                  <td className="px-6 py-4">{entry.institution}</td>
                  <td className="px-6 py-4">{entry.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
