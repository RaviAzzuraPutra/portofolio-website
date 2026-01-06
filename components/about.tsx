export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            About <span className="text-[#d4af37]">Me:</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mb-8"></div>

          <div className="space-y-5 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
            <p>
              Backend Developer with technical expertise in the Golang, Node.js, and Laravel ecosystems.
              Possesses a strong foundation in API development, SQL/NoSQL database management, Docker implementation,
              and the integration of AI services and libraries based on APIs. Actively practices programming logic and algorithms
              to enhance problem-solving skills and understanding of data structures.
              Holds a Junior Web Developer certification (BNSP) and is a graduate of the MSIB Backend Developer Bootcamp Batch 6.
              Eager to apply my skills in the technology industry and committed to continuous learning.
            </p>

            <p>
              <span className="text-[#d4af37] font-semibold">Outside of coding,</span> I like reading books, watching anime, and playing Honkai Star Rail.
            </p>

            <div className="pt-4">
              <h3 className="text-[#d4af37] font-semibold mb-4">Current Focus:</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Go Programming Language
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Node.js and Express.js
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Clean Arsitecture Optimaizer
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Solving problems on LeetCode
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Learning Microservices
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content - Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-2xl font-bold text-white mb-8">Work Experience</h3>

          {[
            {
              year: "Dec 2025 - Dec 2025",
              title: "Project-Based Virtual Intern: Backend Developer Evermos x Rakamin",
              company: "Evermos",
              desc: [
                "Developed a social commerce backend platform using Golang and Fiber by applying Clean Architecture, resulting in a modular, testable, and extensible codebase.",
                "Designed and implemented JWT-based authentication and an automatic store creation workflow during user registration, streamlining reseller onboarding and ensuring data consistency.",
                "Built end-to-end product, category, and transaction management, including backend-side stock validation and price calculation to ensure transactional integrity and prevent data manipulation.",
                "Implemented relational data management with MySQL and ORM, while clearly separating business logic and data access layers to improve overall system maintainability and readability.",
                "The internship emphasizes problem-driven design, independent decision-making, and critical assessment rather than routine tasks, aligning closely with applied research practices."
              ],
            },
            {
              year: "Jul 2024 - Sep 2024",
              title: "Full Stack Developer",
              company: "Pt. Motiolabs Digital Indonesia",
              desc: [
                "Developing and maintaining the Masj.id CMS system based on Laravel with a MySQL database using MVC architecture.",
                "Coordinated with the development team using GitLab for efficient version management and project collaboration.",
                "Implementing backend features and user interfaces to manage mosque content such as schedules, news, services, and galleries.",
                "Through this internship, I developed a comprehensive understanding of full-stack web application development as an integrated engineering process rather than isolated technical tasks. The experience strengthened my ability to translate system requirements into structured application logic, balance backend functionality with user interface considerations, and apply version control as a collaborative governance mechanism within a development team. This internship reinforced the importance of maintainability, code structure, and teamwork as foundational principles in sustainable software development."
              ],
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6">
              <div className="relative">
                <div className="w-4 h-4 bg-[#d4af37] rounded-full mt-1.5 sm:mt-2"></div>
                {idx !== 3 && <div className="absolute w-1 h-20 bg-[#d4af37]/30 left-1.5 top-4"></div>}
              </div>
              <div className="pb-4">
                <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">{item.year}</p>
                <h4 className="text-white font-bold text-base sm:text-lg">{item.title}</h4>
                {item.company && <p className="text-gray-400 text-xs sm:text-sm">{item.company}</p>}
                <ul className="list-disc list-inside text-gray-400 text-xs sm:text-sm mt-2 space-y-1 text-justify">
                  {item.desc.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
