import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // for redirection
import backgroundLogo from "../assets/register-bg.jpg";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    institution: "",
    country: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // New state for modal visibility
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.category ||
      !form.institution ||
      !form.country
    ) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        "https://rava-csa-icicta-2025.onrender.com/api/registrations",
        form
      );
      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        category: "",
        institution: "",
        country: "",
      });
      setModalVisible(true); // Show the modal after successful registration
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "institution", label: "Institution", type: "text" },
    { name: "country", label: "Country", type: "text" },
  ];

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        navigate("/"); // Redirect after 3-4 seconds
      }, 3000);
    }
  }, [modalVisible, navigate]);

  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundLogo})` }}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl bg-white/90 rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700">
          Register Now!
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map(({ name, label, type }) => (
            <div key={name} className="flex flex-col gap-1">
              <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700"
              >
                {label}
              </label>
              <input
                id={name}
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-sm transition"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-sm transition"
            >
              <option value="">Select Category</option>
              <option>Student</option>
              <option>Faculty</option>
              <option>Industry</option>
              <option>Foreign</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 sm:py-4 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
            }`}
          >
            {loading ? "Submitting..." : "Register"}
          </button>

          {status === "success" && (
            <div className="flex items-center justify-center gap-2 text-green-600 text-sm mt-2">
              <FaCheckCircle className="text-lg" />
              Registration successful!
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center justify-center gap-2 text-red-600 text-sm mt-2">
              <FaExclamationCircle className="text-lg" />
              Something went wrong. Try again.
            </div>
          )}

          {error && (
            <div className="text-red-600 text-sm mt-2 flex items-center">
              <FaExclamationCircle className="mr-2" />
              {error}
            </div>
          )}
        </form>
      </div>

      {/* Modal for successful registration */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96 text-center">
            <h2 className="text-xl font-semibold text-green-600">
              Registration Successful!
            </h2>
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Register;
