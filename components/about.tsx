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
              Backend Developer focused on building production-grade APIs using Golang and Node.js.
              Hands-on experience designing clean architectures, enforcing data integrity at the API level,
              and shipping systems that support real operational workflows. Experienced in SQL/NoSQL databases,
              Docker, and integrating external and AI-based services via APIs. Trained through intensive backend
              programs including MSIB Backend Developer Bootcamp Batch 6 (Gamelab.id) and
              Sanbercode Golang Bootcamp, and holds a Junior Web Developer certification (BNSP).
              Excited to use my skills in the tech field and committed to continuous learning.
            </p>

            <p>
              <span className="text-[#d4af37] font-semibold">Outside of coding,</span> I like reading books, watching anime, and playing Honkai Star Rail.
            </p>

            <div className="pt-4">
              <h3 className="text-[#d4af37] font-semibold mb-4">Training & Certification:</h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4af37] mt-0.5">→</span>
                  <Link
                    href="https://drive.google.com/drive/folders/1rlQJ69ivdHFHMa6nr8LjpgRd-YnZ4hIE?usp=drive_link"
                    className="block leading-relaxed"
                  >
                    <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Backend Developer Bootcamp</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-400">Gamelab.id (MSIB Batch 6)</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-500">Feb 2024 - Jun 2024</span>
                    <span className="text-[#d4af37] ml-1.5 font-medium">(Training)</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4af37] mt-0.5">→</span>
                  <Link
                    href="https://drive.google.com/drive/folders/1S8kr2D8oQ5zDHrvTMjAd9UtbqkljkEZ-?usp=drive_link"
                    className="block leading-relaxed"
                  >
                    <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Junior Web Developer</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-400">Badan Nasional Sertifikasi Profesi (BNSP)</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-500">Mar 2025</span>
                    <span className="text-[#d4af37] ml-1.5 font-medium">(Certification)</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4af37] mt-0.5">→</span>
                  <Link
                    href="https://drive.google.com/drive/folders/1qUy0i13FiyhnYlOHYbZ7w31qfVx7aqgK?usp=sharing"
                    className="block leading-relaxed"
                  >
                    <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">TOEFL</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-400">Indonesia Computer University (Score: 473)</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-500">Nov 2024 - Nov 2026</span>
                    <span className="text-[#d4af37] ml-1.5 font-medium">(Certification)</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4af37] mt-0.5">→</span>
                  <Link
                    href="https://drive.google.com/drive/folders/1CNCiGBxTOblMsfmUj0GVxGTzFNpsqmQZ?usp=sharing"
                    className="block leading-relaxed"
                  >
                    <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Golang Backend Development</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-400">Sanbercode</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-500">Dec 2025 - Jan 2026</span>
                    <span className="text-[#d4af37] ml-1.5 font-medium">(Training)</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4af37] mt-0.5">→</span>
                  <Link
                    href="https://drive.google.com/drive/folders/19z1JBkNuNv51aCdMfYGKaB2ZmUxSTn9t?usp=sharing"
                    className="block leading-relaxed"
                  >
                    <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Backend Developer Internship</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-400">Evermos x Rakamin Academy</span>
                    <span className="text-[#d4af37] mx-1.5">–</span>
                    <span className="text-gray-500">Dec 2025 - Dec 2025</span>
                    <span className="text-[#d4af37] ml-1.5 font-medium">(Internship)</span>
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
                    "Developed a social commerce backend platform using Golang, Fiber, and Clean Architecture, to isolate business logic from infrastructure, reducing feature-change complexity and enabling independent scaling of authentication and transaction modules.",
                    "Streamlined the reseller onboarding process by automating store creation during user registration, utilizing JWT-based authentication and secure password hashing to ensure immediate platform access and data consistency.",
                    "Built complete product, category, and transaction management workflows, including backend-driven stock validation and pricing logic, which ensured transactional integrity and prevented data manipulation at the API level.",
                    "Improved system maintainability and code clarity by utilizing the Repository Pattern with MySQL (GORM), successfully separating data access layers from the core business logic to facilitate easier expansion of future features.",
                    "The internship emphasizes problem-driven design, independent decision-making, and critical assessment rather than routine tasks, aligning closely with applied research practices.",
                  ],
                },
                {
                  year: "Jul 2024 - Sep 2024",
                  title: "Full Stack Developer Intern",
                  company: "PT. Motiolabs Digital Indonesia",
                  desc: [
                    "Developed and maintained the Masj.id CMS using Laravel and MySQL within an MVC architecture, ensuring a scalable and structured codebase for religious management services.",
                    "Coordinated with the development team using GitLab for efficient version management and project collaboration.",
                    "Improving the time efficiency of mosque administrators in managing and disseminating information by 88% through the digitization of activity agendas and public services.",
                    "Strengthening the company's digital transformation solutions portfolio in the house of worship management sector by validating product readiness for market expansion, through the development of the Masj.id Content Management System application that automates information management and integrated digital services.",
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
                  year: "Sep 2021 - Nov 2025",
                  title: "Bachelor of Computer Science",
                  institution: "Universitas Komputer Indonesia",
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
