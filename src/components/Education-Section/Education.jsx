// Education.jsx
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-12">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-6xl font-bold mb-4 text-left"
            >
                <span className="text-gray-900 dark:text-gray-100">Educ</span>
                <span className="text-[#4ca771]">ation</span>
            </motion.h2>
            

            {/* Main Container 3 Sections */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* College Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6"
            >
                <h2 className="text-xl font-semibold mb-2">Pamantasan ng Lungsod ng San Pablo</h2>
                <ul className="list-disc list-inside mb-4 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Bachelor of Science in Information Technology</li>
                        <li>Major in Web and Game Development</li>
                        <li>2021 – 2025</li>
                    </ul>
            </motion.div>

            {/* Senior HS Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6"
            >
                <h2 className="text-xl font-semibold mb-2">STI – San Pablo City</h2>
                <ul className="list-disc list-inside mb-4 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Information Communication Technology (ICT)</li>
                        <li>Specialized in information technology</li>
                        <li>Senior High</li>
                        <li>2018 – 2020</li>
                    </ul>
            </motion.div>

            {/* Junior HS Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6"
            >
                <h3 className="text-xl font-semibold mb-2">San Pablo City National High School</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Early exposure to tech and computing.</li>
                <li>Junior High</li>
                <li>2014 – 2018</li>
                </ul>
            </motion.div>
            </div>

            

        </div>
    </section>
  );
};

export default Education;
