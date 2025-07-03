import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 className="text-6xl text-orange-600" />, delay: 0 },
  { icon: <SiCss3 className="text-6xl text-blue-600" />, delay: 1 },
  { icon: <SiJavascript className="text-6xl text-yellow-400" />, delay: 2 },
  { icon: <SiReact className="text-6xl text-cyan-400" />, delay: 3 },
  { icon: <SiNodedotjs className="text-6xl text-green-600" />, delay: 4 },
  { icon: <SiExpress className="text-6xl text-gray-300" />, delay: 5 },
  { icon: <SiMongodb className="text-6xl text-green-500" />, delay: 6 },
  { icon: <SiMysql className="text-6xl text-blue-500" />, delay: 7 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={iconVariants(skill.delay)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg hover:scale-110 transition-transform"
          >
            {skill.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
