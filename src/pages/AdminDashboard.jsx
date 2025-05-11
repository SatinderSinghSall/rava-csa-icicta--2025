import { useEffect, useState } from "react";
import axios from "axios";
import { FaSignOutAlt, FaUserPlus, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ email: "", password: "" });
  const [showViewModal, setShowViewModal] = useState(false);
  const [adminList, setAdminList] = useState([]);
  const [confirmDeleteEmail, setConfirmDeleteEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

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

  const fetchAdmins = async () => {
    try {
      const res = await axios.get(
        "https://rava-csa-icicta-2025.onrender.com/api/admin/all"
      );
      setAdminList(res.data);
    } catch (err) {
      console.error("Failed to load admin list", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://rava-csa-icicta-2025.onrender.com/api/admin/register",
        newAdmin,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("✅ Admin added successfully!");
      setNewAdmin({ email: "", password: "" });
      setShowModal(false);
    } catch (err) {
      console.error("Error adding admin", err);
      toast.error("❌ Failed to add admin.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAdmin = (email) => {
    setConfirmDeleteEmail(email); // Show the modal with the selected email
  };

  const confirmDelete = async () => {
    setDeleting(true);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://rava-csa-icicta-2025.onrender.com/api/admin/delete/${confirmDeleteEmail}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(`${confirmDeleteEmail} has been deleted successfully!`);
      setAdminList(
        adminList.filter((admin) => admin.email !== confirmDeleteEmail)
      );
    } catch (err) {
      console.error("Error deleting admin", err);
      toast.error("Failed to delete admin.");
    } finally {
      setDeleting(false);
      setConfirmDeleteEmail(null);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold text-gray-900">
          📊 Admin Dashboard
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
          >
            <FaUserPlus className="mr-2" /> Add Admin
          </button>
          <button
            onClick={() => {
              fetchAdmins();
              setShowViewModal(true);
            }}
            className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition"
          >
            👁️ View Admins
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Modal to add an Admin: */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Register New Admin</h2>
            <form onSubmit={handleAddAdmin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                required
                value={newAdmin.email}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={newAdmin.password}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, password: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white px-4 py-2 rounded-md transition`}
                >
                  {loading ? "Creating..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal to view the Admins: */}
      {showViewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">All Admins</h2>
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {adminList.map((admin, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-1 text-gray-800"
                >
                  <div className="flex items-center gap-2">
                    <span>{admin.email}</span>
                    <button
                      onClick={() => handleDeleteAdmin(admin.email)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTrashAlt /> {/* Trash icon for delete */}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowViewModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom delete confirmation modal: */}
      {confirmDeleteEmail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Confirm Deletion
            </h2>
            <p className="mb-6">
              Are you sure you want to delete{" "}
              <strong>{confirmDeleteEmail}</strong>? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDeleteEmail(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className={`${
                  deleting
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                } text-white px-4 py-2 rounded-md transition`}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

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
