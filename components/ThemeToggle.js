import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function ResumeButton() {
  return (
    <motion.a
      href="/resume_muktha.pdf"
      download
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                 bg-white text-black font-medium border border-white/10
                 hover:bg-neutral-200 hover:shadow-md transition-all duration-300"
    >
      <FileText className="w-5 h-5" />
      Download Resume
    </motion.a>
  );
}
