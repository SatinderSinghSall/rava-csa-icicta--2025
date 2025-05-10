export default function Committee() {
  const convenor = {
    title: "Convenor",
    name: "Dr. Lokesh C. K.",
  };

  const coConvenors = [
    "Dr. Rajeev Ranjan",
    "Dr. Ambili P S",
    "Dr. G. Sasikala",
    "Prof. B. Manjunath",
  ];

  const coreMembers = [
    "Dr. Vinayaka Murthy",
    "Dr. K. Vijayalakshmi",
    "Dr. N. Kavitha",
    "Dr. Duraimutharasan",
    "Prof. Sneha N.",
  ];

  return (
    <section className="bg-white p-10 rounded-3xl shadow-xl max-w-5xl mx-auto mt-16 border border-gray-200">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              🎓 {convenor.title}
            </h2>
            <p className="text-gray-800 text-lg">{convenor.name}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              🤝 Co-convenors
            </h2>
            <ul className="space-y-2">
              {coConvenors.map((person, idx) => (
                <li key={idx} className="text-gray-800 text-lg">
                  {person}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            🧩 Core Committee Members
          </h2>
          <ul className="space-y-2">
            {coreMembers.map((member, idx) => (
              <li key={idx} className="text-gray-800 text-lg">
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
