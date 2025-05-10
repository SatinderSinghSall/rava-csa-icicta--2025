import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import backgroundImg from "../assets/admin-bg.jpeg";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://rava-csa-icicta-2025.onrender.com/api/admin/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } catch {
      toast.error("Invalid email or password");
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 w-full max-w-lg md:max-w-md sm:max-w-sm bg-white/90 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="admin@example.com"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? <div className="loader"></div> : "Login"}
          </button>
        </form>
        {error && (
          <p className="text-sm text-red-600 text-center mt-4">{error}</p>
        )}
      </div>
    </main>
  );
};

export default AdminLogin;
