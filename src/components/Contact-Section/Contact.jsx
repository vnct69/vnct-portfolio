import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const socials = [
    { icon: <FaFacebook />, color: "hover:bg-[#1877F2]", link: "https://www.facebook.com/vicente.escondo" },
    { icon: <FaInstagram />, color: "hover:bg-[#E1306C]", link: "https://www.instagram.com/vnct._/" },
    { icon: <FaTiktok />, color: "hover:bg-[#25F4EE]", link: "https://tiktok.com/@vnct_28" },
    { icon: <FaGithub />, color: "hover:bg-[#333]", link: "https://github.com/vnct69" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formValues.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formValues.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formValues.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = "Email is invalid";
    if (!formValues.subject.trim()) newErrors.subject = "Subject is required";
    if (!formValues.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    toast.loading("Sending...", { id: "emailStatus" });

    emailjs
      .sendForm(
        "service_4bfi6wz",
        "Portfolio_plei0df",
        formRef.current,
        "DfNcuucy0zumkkpRZ"
      )
      .then(() => {
        toast.success("Message sent successfully!", { id: "emailStatus" });
        formRef.current.reset();
        setFormValues({
          first_name: "",
          last_name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", { id: "emailStatus" });
        console.error("EmailJS Error:", error);
      })
      .finally(() => setIsSending(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      sendEmail(e);
    }
  };

  const renderError = (field) =>
    errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>;

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-500">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto">
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
            <div className="rounded-xl bg-[c8c8c9] dark:bg-[#060606] shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4ca771]/20 dark:bg-[#4ca771]/10">
                    <Mail className="w-5 h-5 text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-medium">vnctescondo@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4ca771]/20 dark:bg-[#4ca771]/10">
                    <MapPin className="w-5 h-5 text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-medium">San Pablo City, Laguna</p>
                  </div>
                </div>

                {/* LinkIn Badge */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0077b5]/20 dark:bg-[#0077b5]/10">
                    <FaLinkedin className="w-5 h-5 text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/vnct/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      linkedin.com/in/vnct
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  name="first_name"
                  value={formValues.first_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771]"
                  placeholder="Vnct"
                />
                {renderError("first_name")}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  name="last_name"
                  value={formValues.last_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771]"
                  placeholder="Dev"
                />
                {renderError("last_name")}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771]"
                placeholder="vnct.dev@example.com"
              />
              {renderError("email")}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                name="subject"
                value={formValues.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771]"
                placeholder="Feedback, suggestions, or just saying hi?"
              />
              {renderError("subject")}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border bg-[c8c8c9] dark:bg-[#060606] focus:ring-2 focus:ring-[#4ca771]"
                rows={5}
                placeholder="I'm open to your thoughts, ideas, or ways I can improve."
              ></textarea>
              {renderError("message")}
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
