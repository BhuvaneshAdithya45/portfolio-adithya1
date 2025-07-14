import {
  FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs, FaGithub, FaCuttlefish
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiPostman, SiExpress, SiTypescript, SiRedux, SiNextdotjs
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "Java", icon: FaJava },
  { skill: "C", icon: FaCuttlefish },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "ExpressJS", icon: SiExpress },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Tailwind CSS", icon: RiTailwindCssFill },
  { skill: "GitHub", icon: FaGithub },
  { skill: "Postman", icon: SiPostman },
];

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto flex-wrap">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          key={index}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
