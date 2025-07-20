// Contact.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const [isDarkMode, setIsDarkMode] = useState(
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    const socials = [
    {
        icon: <FaFacebook />,
        color: "hover:bg-[#1877F2]",
        link: "https://www.facebook.com/vicente.escondo",
    },
    {
        icon: <FaInstagram />,
        color: "hover:bg-[#E1306C]",
        link: "https://www.instagram.com/vnct._/",
    },
    {
        icon: <FaTiktok />,
        color: "hover:bg-[#25F4EE]",
        link: "https://tiktok.com/@vnct_28",
    },
    {
        icon: <FaGithub />,
        color: "hover:bg-[#333]",
        link: "https://github.com/vnct69",
    },
    {
        icon: <FaLinkedin />,
        color: "hover:bg-[#0077b5]",
        link: "https://linkedin.com/in/vnct/",
    },
    ];
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
        .sendForm(
            "service_4bfi6wz",     // Replace with your EmailJS service ID
            "Portfolio_plei0df",    // Replace with your EmailJS template ID
            formRef.current,
            "DfNcuucy0zumkkpRZ"      // Replace with your EmailJS public key
        )
        .then(
            () => {
            setMessage("Message sent successfully!");
            formRef.current.reset();
            },
            (error) => {
            setMessage("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
            }
        )
        .finally(() => setIsSending(false));
    };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto">
         {/* Heading */}
        <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-6 text-center"
        >
            <span className="text-gray-900 dark:text-gray-100">Contact </span>
            <span className="text-[#4ca771]">Me</span>
        </motion.h2>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4ca771]/20 dark:bg-[#4ca771]/10">
                    <Mail className="w-5 h-5 text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-medium">vnctescondo@gmail.com</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4ca771]/20 dark:bg-[#4ca771]/10">
                    <MapPin className="w-5 h-5 text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-medium">San Pablo City, Laguna</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-4 flex-wrap ">
                {socials.map((social, i) => (
                    <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                    >
                    {social.icon}
                    </a>
                ))}
            </div>
          </div>

          {/* Contact Form */}
        <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6"
        >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input name="first_name"
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771] transition-all duration-300`}
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input name="last_name"
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771] transition-all duration-300`}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input name="email"
                type="email"
                className={`w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771] transition-all duration-300`}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input name="subject"
                type="text"
                className={`w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771] transition-all duration-300`}
                placeholder="Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea name="message"
                className={`w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771] transition-all duration-300`}
                rows={5}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-[#4ca771] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-[#3c8d5d]"
                }`}
                >
                {isSending ? "Sending..." : "Send Message"}
            </button>
        </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
