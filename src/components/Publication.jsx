export default function Publication() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl max-w-4xl mx-auto mt-16 border border-gray-200">
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold text-blue-900 border-b pb-4 border-blue-100">
          📚 Publication Details
        </h2>

        <p className="text-gray-800 leading-relaxed text-lg">
          Conference papers must be submitted in{" "}
          <span className="font-semibold">IEEE format</span> (Word document) and
          should not exceed <span className="font-semibold">six pages</span>.
          Each paper should include the name and email ID of the corresponding
          author.
        </p>

        <p className="text-gray-800 leading-relaxed text-lg">
          Mention the paper’s <span className="font-semibold">discipline</span>{" "}
          in the subject line of your email. All submissions will undergo a{" "}
          <span className="font-semibold">peer review</span>, and the
          corresponding author will be informed of the outcome.
        </p>

        <div className="text-gray-800 leading-relaxed text-lg">
          Submit your paper via email to:{" "}
          <a
            href="mailto:icicta@reva.edu.in"
            className="text-blue-600 font-medium hover:underline"
          >
            icicta@reva.edu.in
          </a>
        </div>

        <p className="text-gray-800 leading-relaxed text-lg">
          Accepted papers will be published in the conference proceedings with
          an <span className="font-semibold">ISBN number</span>. Selected
          extended versions will be considered for journals indexed in{" "}
          <span className="font-semibold">Google Scholar</span>,{" "}
          <span className="font-semibold">Scopus</span>, or{" "}
          <span className="font-semibold">UGC-CARE</span> (subject to additional
          publication charges).
        </p>
      </div>
    </section>
  );
}
