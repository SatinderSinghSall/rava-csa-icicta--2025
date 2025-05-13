import { motion } from "framer-motion";

import MadhanImage from "../assets/MadhanKumarSrinivasan.png";
import MalathyImage from "../assets/MalathBatumalay.jpeg";

const speakers = [
  {
    name: "Dr. Madhan Kumar Srinivasan",
    title: "Inventor of 121 Patents | CEO of Wise Work & 5x Founder",
    details:
      "Teenpreneur at 19 • Creator of Cloud AI @ Accenture • 2x TEDx Speaker • IIM Calcutta • Accenture Prolific Inventor • Infosys Cloud Tech Guru",
    image: MadhanImage,
  },
  {
    name: "Prof. Ir. Dr. Malathy Batumalay",
    title:
      "Professor, Faculty of Data Science and Information Technology (FDSIT)",
    details:
      "Centre for Data Science and Sustainable Technologies • NTI International University • Putra Nilai, Negeri Sembilan",
    image: MalathyImage,
  },
  {
    name: "Dr. A. Sekar",
    title: "Associate Professor & HOD – Psychiatry",
    details: "Annapoorna Medical College & Hospitals • Salem",
    image: "https://via.placeholder.com/150?text=Dr+A+Sekar",
  },
];

export default function TechnicalSession() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-white py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          🌟 Technical Session Speakers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl p-6 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-200"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {speaker.name}
                </h2>
                <p className="text-sm text-indigo-600 font-semibold mb-4">
                  {speaker.title}
                </p>
              </div>

              <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                {speaker.details}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
