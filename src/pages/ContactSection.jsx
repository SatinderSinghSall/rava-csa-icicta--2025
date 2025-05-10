import React from "react";
import { Mail, Phone, User } from "lucide-react";

const contacts = [
  {
    name: "Dr. Rajeev Ranjan",
    email: "Rajeev.rajan@reva.edu.in",
    phone: "+91 9108898284",
  },
  {
    name: "Dr. Kavitha N.",
    email: "Kavitha.natarajan@reva.edu.in",
    phone: "+91 7358970841",
  },
  {
    name: "Dr. Duraimutharasan N.",
    email: "Duraimutharasan.n@reva.edu.in",
    phone: "+91 7358320176",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-white min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Organising Committee Members
        </h2>
        <p className="text-gray-500 mb-10">
          All Faculty Members of School of Computer Science & Applications
        </p>
        <h3 className="text-2xl font-semibold text-blue-700 mb-6">
          Contact Details
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((person, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 text-xl font-medium text-gray-800 mb-4">
                <User className="w-5 h-5 text-blue-600" />
                {person.name}
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                <a href={`mailto:${person.email}`} className="hover:underline">
                  {person.email}
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <a href={`tel:${person.phone}`} className="hover:underline">
                  {person.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
