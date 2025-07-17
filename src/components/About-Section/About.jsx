import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row gap-16 p-12">
        {/* Left Container - Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/about-img.jpg"
            alt="about-img"
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col gap-8">

          {/* About Me Section */}
          <div className="bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6">
            <h2 className="text-6xl font-bold mb-4">
                <span className="text-gray-900 dark:text-gray-100">About</span>
                <span className="text-[#4ca771]"> Me</span>
            </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
              I'm a passionate web developer with a strong focus on building modern, responsive, and interactive web applications. I enjoy blending technology and creativity, bringing ideas to life through clean, efficient code paired with thoughtful, user-centered design. Whether it's crafting intuitive interfaces or developing scalable features, I aim to create experiences that are both functional and visually engaging.
            </p>

            <h3 className="text-xl font-semibold mb-2">
                <span className="text-gray-900 dark:text-gray-100">Experience</span>
                <span className="text-[#4ca771]"> and Achievements</span>
            </h3>

            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Lead Developer Full Stack (DepEd San Pablo - Internship)</li>
              <li>UI/UX Design and Programmer (Capstone/Thesis System)</li>
              <li>Dean Lister (1st year College)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
                <span className="text-gray-900 dark:text-gray-100">Contact </span>
                <span className="text-[#4ca771]">Information</span>
            </h3>
            <p className="mb-1 text-gray-600 dark:text-gray-400">📍 San Pablo City, Laguna, Philippines</p>
            <p className="text-gray-600 dark:text-gray-400">✉️ vnctescondo@gmail.com</p>
          </div>

          {/* Tools and Frameworks Section */}
          <div className="bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4">
               <span className="text-gray-900 dark:text-gray-100">Tools </span>
               <span className="text-[#4ca771]"> and Frameworks</span>
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "HTML", logo: "/html.png" },
                  { name: "CSS", logo: "/css.png" },
                  { name: "JavaScript", logo: "/js.png" },
                  { name: "Bootstrap", logo: "/bootstrap.png" },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2">
                    <img src={tool.logo} alt={tool.name} className="h-8 w-8" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Other</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "React", logo: "/react.png" },
                  { name: "Tailwind", logo: "/tailwind.png" },
                  { name: "Framer Motion", logo: "/framer.png" },
                  { name: "C#", logo: "/csharp.png" },
                  { name: "ASP.NET Core", logo: "/dotnet.png" },
                  { name: "MySQL", logo: "/mysql.png" },
                  { name: "XAMPP", logo: "/xampp.png" },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2">
                    <img src={tool.logo} alt={tool.name} className="h-8 w-8" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
