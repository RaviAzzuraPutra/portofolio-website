import Link from "next/link"

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
              <h3 className="text-[#d4af37] font-semibold mb-4">Training & Certification:</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  <Link href="https://drive.google.com/drive/folders/1rlQJ69ivdHFHMa6nr8LjpgRd-YnZ4hIE?usp=drive_link">
                    Backend Developer Bootcamp – Gamelab.id (MSIB Batch 6) – Feb 2024 - Jun 2024 (Training)
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  <Link href="https://drive.google.com/drive/folders/1S8kr2D8oQ5zDHrvTMjAd9UtbqkljkEZ-?usp=drive_link">
                    Junior Web Developer – Badan Nasional Sertifikasi Profesi (BNSP) – Mar 2025 (Certification
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  <Link href="https://drive.google.com/drive/folders/1qUy0i13FiyhnYlOHYbZ7w31qfVx7aqgK?usp=sharing">
                    TOEFL - Indonesia Computer University - Score: 473 - Nov 2024 - Nov 2026 (Certification)
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  <Link href="https://drive.google.com/drive/folders/1CNCiGBxTOblMsfmUj0GVxGTzFNpsqmQZ?usp=sharing">
                    Golang Backend Development - Sanbercode - Dec 2025 - Jan 2026 (Training)
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  <Link href="https://drive.google.com/drive/folders/19z1JBkNuNv51aCdMfYGKaB2ZmUxSTn9t?usp=sharing">
                    Backend Developer Internship - Evermos x Rakamin Academy - Dec 2025 - Dec 2025 (Internship)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content - Timeline */}
        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-[#d4af37]">01.</span> Work Experience
            </h3>

            <div className="space-y-8 border-l-2 border-[#d4af37]/20 ml-3 pl-8 sm:pl-10 relative">
              {[
                {
                  year: "Dec 2025 - Dec 2025",
                  title: "Project-Based Virtual Intern: Backend Developer Evermos x Rakamin ",
                  company: "Evermos x Rakamin Academy",
                  desc: [
                    "Developed a social commerce backend platform using Golang and Fiber by applying Clean Architecture, resulting in a modular, testable, and extensible codebase.",
                    "Designed and implemented JWT-based authentication and an automatic store creation workflow during user registration, streamlining reseller onboarding and ensuring data consistency.",
                    "Built end-to-end product, category, and transaction management, including backend-side stock validation and price calculation to ensure transactional integrity and prevent data manipulation.",
                    "Implemented relational data management with MySQL and ORM, while clearly separating business logic and data access layers to improve overall system maintainability and readability.",
                    "The internship emphasizes problem-driven design, independent decision-making, and critical assessment rather than routine tasks, aligning closely with applied research practices.",
                  ],
                },
                {
                  year: "Jul 2024 - Sep 2024",
                  title: "Full Stack Developer Intern",
                  company: "PT. Motiolabs Digital Indonesia",
                  desc: [
                    "Developing and maintaining the Masj.id CMS system based on Laravel with a MySQL database using MVC architecture.",
                    "Coordinated with the development team using GitLab for efficient version management and project collaboration.",
                    "Implementing backend features and user interfaces to manage mosque content such as schedules, news, services, and galleries.",
                    "Through this internship, I developed a comprehensive understanding of full-stack web application development as an integrated engineering process rather than isolated technical tasks. The experience strengthened my ability to translate system requirements into structured application logic, balance backend functionality with user interface considerations, and apply version control as a collaborative governance mechanism within a development team. This internship reinforced the importance of maintainability, code structure, and teamwork as foundational principles in sustainable software development.",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute w-4 h-4 bg-[#d4af37] rounded-full -left-[41px] sm:-left-[49px] top-1.5 border-4 border-[#1a1a1a]"></div>
                  <div>
                    <span className="text-[#d4af37] font-mono text-xs sm:text-sm bg-[#d4af37]/10 px-2 py-1 rounded mb-2 inline-block">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-lg sm:text-xl mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{item.company}</p>
                    <ul className="list-disc list-outside ml-4 text-gray-400 text-xs sm:text-sm space-y-1 text-justify marker:text-[#d4af37]">
                      {item.desc.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-[#d4af37]">02.</span> Education
            </h3>

            <div className="space-y-8 border-l-2 border-[#d4af37]/20 ml-3 pl-8 sm:pl-10 relative">
              {[
                {
                  year: "Dec 2025 - Jan 2026",
                  title: "Golang: Master Backend Development with Go! (Batch 73)",
                  institution: "Sanbercode",
                },
                {
                  year: "Sep 2021 - Nov 2025",
                  title: "Bachelor of Computer Science",
                  institution: "Universitas Komputer Indonesia",
                },
                {
                  year: "Feb 2024 - Jun 2024",
                  title: "MSIB Batch 6 - Backend Engineering",
                  institution: "Gamelab.id (Studi Independen)",
                },
                {
                  year: "Jul 2018 - Jun 2021",
                  title: "Mathematics and Natural Sciences",
                  institution: "Pasundan 1 Senior High School",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute w-4 h-4 bg-[#d4af37] rounded-full -left-[41px] sm:-left-[49px] top-1.5 border-4 border-[#1a1a1a]"></div>
                  <div>
                    <span className="text-[#d4af37] font-mono text-xs sm:text-sm bg-[#d4af37]/10 px-2 py-1 rounded mb-2 inline-block">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-lg sm:text-xl mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
