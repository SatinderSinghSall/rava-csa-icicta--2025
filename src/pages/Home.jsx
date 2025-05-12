import Countdown from "../components/Countdown";
import revaLogo from "../assets/REVA_University_Bangalore.png";
import CallForPapers from "./CallForPapers";
import RegistrationFeeTable from "../components/RegistrationFeeTable";
import Publication from "../components/Publication";
import Patrons from "../components/Patrons";
import Committee from "../components/Committee";
import ContactDetails from "../components/ContactDetails";
import { FilePlus, Loader2 } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePaperSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = "mailto:icicta@reva.edu.in";
    }, 1500);
  };

  return (
    <>
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 sm:px-8 lg:px-16 text-center">
          {/* Background Decorative Blur */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <img
              src={revaLogo}
              alt="REVA University Logo"
              className="mx-auto mb-8 h-20 sm:h-24 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug tracking-tight mb-6">
              <span className="block text-blue-800 font-extrabold">
                REVA University
              </span>
              <span className="block text-blue-700">
                School of Computer Science & Applications
              </span>
              <span className="block mt-2 text-indigo-700 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                <span className="text-indigo-900 font-bold">ICICTA-2025</span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 font-medium">
              6<sup>th</sup> International Conference on Innovative Computing
              Technologies & Applications
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              June 5–6, 2025 • REVA University, Bengaluru
            </p>

            {/* <div className="mt-8">
              <a
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <FilePlus className="w-5 h-5" />
                <span>Register right Now!</span>
              </a>
            </div> */}

            <div className="mt-12 max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 transition-all hover:shadow-2xl">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Conference Countdown:
              </h4>
              <Countdown />
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="max-w-5xl mx-auto py-20 px-6 sm:px-10 lg:px-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 border-b-2 border-blue-200 pb-3">
              About the Conference
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed tracking-wide">
              The{" "}
              <strong>
                International Conference on Innovative Computing Technologies
                and Applications (ICICTA-25)
              </strong>{" "}
              will take place at <strong>REVA University</strong> on{" "}
              <strong>5th and 6th June 2025</strong>.
            </p>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed tracking-wide">
              This conference explores cutting-edge developments in{" "}
              <em>
                Innovative Computing Technologies, Internet of Things, Data
                Analytics,
              </em>{" "}
              and <em>Information Security</em>. ICICTA-25 is designed to foster
              collaboration between industry and academia by identifying
              research needs and sharing best practices on a global stage.
            </p>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed tracking-wide">
              It serves as a dynamic platform for{" "}
              <strong>
                Academicians, Data Scientists, Statisticians, Research Scholars,
              </strong>{" "}
              and <strong>Students</strong> to present research, exchange ideas,
              and build lasting connections.
            </p>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="bg-indigo-700 text-white text-center py-16 px-6 rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to submit your paper?</h2>
        <p className="mb-6 max-w-lg mx-auto">Join CSA ICICTA 2025.</p>
        <button
          onClick={handlePaperSubmit}
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin w-5 h-5 mr-2" />
              Sending...
            </>
          ) : (
            "Submit your Paper"
          )}
        </button>
      </section>

      <CallForPapers />
      <RegistrationFeeTable />
      <Publication />
      <Patrons />
      <Committee />
      <ContactDetails />
    </>
  );
};

export default Home;
