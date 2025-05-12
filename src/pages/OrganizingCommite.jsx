import { Construction } from "lucide-react";

const OrganizingCommittee = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 py-16">
      <div className="text-center max-w-lg">
        {/* Modern Icon */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner animate-fade-in">
            <Construction size={48} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3 leading-tight">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          The Organizing Committee details are under construction. We’re working
          hard to bring you the most up-to-date information.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
