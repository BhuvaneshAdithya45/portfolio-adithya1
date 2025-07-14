import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-2xl font-semibold">Bhuvanesh Adithya M C</h2>
      <p className="mt-4 text-base">
        I'm a Computer Science Engineering student passionate about building modern web applications. With hands-on experience in React, Node.js, MongoDB, and Java, I love turning ideas into functional, beautiful solutions.
      </p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Certifications</h3>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Database Management Systems</li>
          <li>Machine Learning – Infosys Springboard</li>
          <li>Object-Oriented Programming with Java</li>
        </ul>

        <div className="mt-6">
          <a
            href="/bhuvanesh_resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;
