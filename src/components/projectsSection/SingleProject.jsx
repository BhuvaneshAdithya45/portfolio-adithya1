import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ project }) => {
  const { title, description, techStack, image, link } = project;

  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="w-full flex flex-col sm:flex-col md:flex-row items-center gap-6 bg-brown p-6 rounded-xl"
    >
      <div className="max-w-[400px] rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 border border-white relative">
        <div className="absolute inset-0 bg-cyan opacity-50 hover:opacity-0 transition duration-500"></div>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold text-orange">{title}</h2>
        <p className="text-white mt-2">{description}</p>
        <p className="text-cyan mt-1 mb-3">{techStack}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-orange transition duration-300"
        >
          View Project <BsFillArrowUpRightCircleFill />
        </a>
      </div>
    </motion.div>
  );
};

export default SingleProject;
