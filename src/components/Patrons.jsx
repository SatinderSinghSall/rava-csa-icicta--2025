export default function Patrons() {
  const chiefPatrons = [
    {
      name: "Dr. P. Shyama Raju",
      title: "Chancellor, REVA University",
    },
    {
      name: "Mr. Umesh S. Raju",
      title: "Pro Chancellor, REVA University",
    },
  ];

  const patrons = [
    {
      name: "Dr. Sanjay R. Chitnis",
      title: "Vice Chancellor, REVA University",
    },
    {
      name: "Dr. Rajashekhar C. Biradar",
      title: "Pro Vice Chancellor, REVA University",
    },
    {
      name: "Dr. K. S. Narayanaswamy",
      title: "Registrar, REVA University",
    },
  ];

  return (
    <section className="bg-white p-10 rounded-3xl shadow-xl max-w-4xl mx-auto mt-16 border border-gray-200">
      <div className="space-y-8">
        {/* Chief Patrons */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 border-b pb-2 border-blue-100">
            👑 Chief Patrons
          </h2>
          <ul className="mt-4 space-y-3">
            {chiefPatrons.map((patron, index) => (
              <li key={index}>
                <p className="text-orange-700 font-semibold text-lg">
                  {patron.name}
                </p>
                <p className="text-gray-600 italic">{patron.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Patrons */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 border-b pb-2 border-blue-100">
            🤝 Patrons
          </h2>
          <ul className="mt-4 space-y-3">
            {patrons.map((patron, index) => (
              <li key={index}>
                <p className="text-orange-700 font-semibold text-lg">
                  {patron.name}
                </p>
                <p className="text-gray-600 italic">{patron.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
