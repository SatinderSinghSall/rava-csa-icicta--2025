const topics = [
  "Artificial Intelligence and Applications",
  "Blockchain Technology",
  "Big Data Analytics",
  "Machine Learning",
  "Internet of Things",
  "Cloud Computing and Grid Computing",
  "Computer Graphics and Virtual Reality",
  "Data Warehousing & Data Mining",
  "Cryptography & Network Security",
  "Deep Learning",
  "Human-Computer Interaction",
  "Image & Speech Processing",
  "Information Retrieval and Internet Applications",
  "Distributed and Parallel Processing",
  "Internet of Vehicles",
  "Mobile Computing & Applications",
  "Multimedia Applications",
  "Real-Time Systems",
  "Robotics",
];

const CallForPapers = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Call for Papers</h1>

      <p className="text-gray-700 mb-6">
        Original and unpublished review / research papers are invited for
        presentation in the multi-disciplinary areas of Computer Science and
        Applications.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">
        Topics include (but are not limited to):
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside mb-8">
        {topics.map((topic, idx) => (
          <li key={idx} className="text-gray-800">
            {topic}
          </li>
        ))}
      </ul>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">
          Submission Guidelines
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-2">
          <li>
            Papers must be original, unpublished, and follow IEEE format (max 6
            pages).
          </li>
          <li>
            Send your papers to:{" "}
            <a
              href="mailto:icicta@reva.edu.in"
              className="text-blue-600 underline"
            >
              icicta@reva.edu.in
            </a>
          </li>
          <li>Include corresponding author details with email.</li>
          <li>
            Extended papers may be published in Scopus/UGC/Google Scholar
            indexed journals (extra charges apply).
          </li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Important Dates:
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-10">
        <div className="bg-white p-4 shadow rounded border-l-4 border-blue-700">
          <p className="text-gray-600">📅 Full Paper Submission</p>
          <p className="text-lg font-bold text-blue-700">25 April 2025</p>
        </div>
        <div className="bg-white p-4 shadow rounded border-l-4 border-green-600">
          <p className="text-gray-600">✅ Acceptance Notification</p>
          <p className="text-lg font-bold text-green-700">10 May 2025</p>
        </div>
        <div className="bg-white p-4 shadow rounded border-l-4 border-purple-600">
          <p className="text-gray-600">📍 Conference Dates</p>
          <p className="text-lg font-bold text-purple-700">5–6 June 2025</p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://www.ieee.org/conferences/publishing/templates.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800"
        >
          📄 Download IEEE Paper Template
        </a>
      </div>
    </main>
  );
};

export default CallForPapers;
