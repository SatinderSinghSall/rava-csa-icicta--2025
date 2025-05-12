import { Mail, FileText, BookOpenCheck } from "lucide-react";

export default function Publication() {
  return (
    <section className="relative bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl max-w-4xl mx-auto mt-20 p-10">
      <div className="space-y-10">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-blue-100 pb-5">
          <div className="w-6 h-6 flex items-center justify-center text-blue-700 shrink-0">
            <BookOpenCheck className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-bold text-blue-900 tracking-tight">
            Publication Details
          </h2>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          {/* Item 1 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-blue-500 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <p>
              Conference papers must be in <strong>IEEE format</strong> (Word
              doc), and should not exceed <strong>six pages</strong>. Include
              the corresponding author’s <strong>name and email ID</strong>.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-blue-500 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <p>
              Mention your paper’s <strong>discipline</strong> in the email
              subject. All submissions will undergo a{" "}
              <strong>peer review</strong> process, and authors will be informed
              of the outcome.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-blue-500 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <p>
              Submit via email:&nbsp;
              <a
                href="mailto:icicta@reva.edu.in"
                className="text-blue-600 font-semibold hover:underline transition"
              >
                icicta@reva.edu.in
              </a>
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-blue-500 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <p>
              Accepted papers will be published with an{" "}
              <strong>ISBN number</strong>. Selected extended versions may be
              considered for journals indexed in
              <strong> Google Scholar</strong>, <strong>Scopus</strong>, or
              <strong> UGC-CARE</strong> (with possible additional charges).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
