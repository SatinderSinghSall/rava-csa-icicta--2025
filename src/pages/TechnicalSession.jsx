import { motion } from "framer-motion";

import MadhanImage from "../assets/MadhanKumarSrinivasan.png";
import MalathyImage from "../assets/MalathBatumalay.jpeg";
import ASekarImage from "../assets/ASekar.jpeg";

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
    image: ASekarImage,
  },
];

export default function TechnicalSession() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-white py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
          🌟 Technical Session Speakers
        </h1>
        <p className="text-gray-600 mb-16 text-lg">
          Meet our distinguished thought leaders and innovators.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center border border-gray-100"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-24 h-24 rounded-full object-cover mb-5 border-4 border-indigo-100"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {speaker.name}
              </h2>
              <p className="text-sm text-indigo-600 font-medium mb-4">
                {speaker.title}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {speaker.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
