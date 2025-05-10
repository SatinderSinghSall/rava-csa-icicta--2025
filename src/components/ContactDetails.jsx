export default function ContactDetails() {
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

  return (
    <section className="bg-white p-10 rounded-3xl shadow-xl max-w-5xl mx-auto mt-16 border border-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Organising Committee Members
        </h2>
        <p className="text-gray-600 text-lg mt-1">
          All Faculty Members of School of Computer Science & Applications
        </p>
      </div>

      <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
        📞 Contact Details
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {contacts.map((person, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {person.name}
            </h4>
            <p className="text-sm text-gray-700">
              <span className="font-medium">E-mail:</span>{" "}
              <a
                href={`mailto:${person.email}`}
                className="text-blue-600 underline"
              >
                {person.email}
              </a>
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Ph:</span> {person.phone}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
