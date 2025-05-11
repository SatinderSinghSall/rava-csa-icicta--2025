import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundLogo from "../assets/register-bg.jpg";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    institution: "",
    country: "",
    type: "",
    srnOrCollegeId: "",
    programmeName: "",
    paperTitle: "",
    amountPaid: "",
    transactionNumber: "",
    guideName: "",
  });

  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "category",
      "institution",
      "country",
      "type",
      "srnOrCollegeId", // Updated field name here
      "programmeName",
      "amountPaid",
      "transactionNumber",
    ];

    for (const field of requiredFields) {
      if (!form[field]) {
        setError("All fields are required!");
        setLoading(false);
        return;
      }
    }

    if (form.type === "Presentation" && (!form.paperTitle || !form.guideName)) {
      setError("Paper Title and Guide Name are required for presentations.");
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
        type: "",
        srn: "",
        programmeName: "",
        paperTitle: "",
        amountPaid: "",
        transactionNumber: "",
        guideName: "",
      });
      setModalVisible(true);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [modalVisible, navigate]);

  const renderStepFields = () => {
    switch (step) {
      case 1:
        return (
          <>
            {["fullName", "email", "phone", "institution", "country"].map(
              (name) => (
                <InputField
                  key={name}
                  name={name}
                  value={form[name]}
                  label={name.replace(/([A-Z])/g, " $1")}
                  onChange={handleChange}
                />
              )
            )}
          </>
        );
      case 2:
        return (
          <>
            <Dropdown
              label="Category"
              name="category"
              value={form.category}
              options={["Student", "Faculty", "Industry", "Foreign"]}
              onChange={handleChange}
            />
            <Dropdown
              label="Type"
              name="type"
              value={form.type}
              options={["Presentation", "Participant"]}
              onChange={handleChange}
            />
            <Dropdown
              label="Programme Name"
              name="programmeName"
              value={form.programmeName}
              options={["MCA", "M.SC", "Others"]}
              onChange={handleChange}
            />
            <InputField
              name="srnOrCollegeId"
              value={form.srnOrCollegeId}
              label="SRN / College ID"
              onChange={handleChange}
            />

            <Dropdown
              label="Amount Paid"
              name="amountPaid"
              value={form.amountPaid}
              options={["1300", "300", "250"]}
              onChange={handleChange}
            />
            <InputField
              name="transactionNumber"
              value={form.transactionNumber}
              label="Transaction Number"
              onChange={handleChange}
            />
          </>
        );
      case 3:
        if (form.type !== "Presentation") return null;
        return (
          <>
            <InputField
              name="paperTitle"
              value={form.paperTitle}
              label="Paper Title"
              onChange={handleChange}
            />
            <InputField
              name="guideName"
              value={form.guideName}
              label="Guide Name"
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundLogo})` }}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-0" />
      <div className="relative z-10 w-full max-w-xl bg-white/90 rounded-3xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Register Now!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {renderStepFields()}

          {error && (
            <div className="text-red-600 text-sm flex items-center">
              <FaExclamationCircle className="mr-2" />
              {error}
            </div>
          )}

          <div className="flex justify-between items-center">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
              >
                Back
              </button>
            )}

            {step < 3 || (step === 3 && form.type === "Presentation") ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className={`ml-auto px-6 py-2 rounded-xl text-white ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Submitting..." : "Register"}
              </button>
            )}
          </div>

          {status === "success" && (
            <div className="flex items-center justify-center gap-2 text-green-600 text-sm mt-2">
              <FaCheckCircle className="text-lg" />
              Registration successful!
            </div>
          )}
        </form>
      </div>

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

const InputField = ({ name, value, label, onChange }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="w-full rounded-xl border border-gray-300 px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-sm transition"
    />
  </div>
);

const Dropdown = ({ label, name, value, options, onChange }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-gray-300 px-4 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-sm transition"
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default Register;
