"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "Travel Planner REST API",
    category: "Backend REST API",
    projectType: "MSIB - Gamelab.id - Capstone Project",
    date: "May 2024 - Jun 2024",
    associated: "Gamelab.id",
    problem:
      "The application required a backend service to support travel planning features such as destination search and cost estimation, with unclear and evolving specifications between frontend and backend teams.",
    solution:
      "Designed and implemented a modular RESTful API using Node.js and Express.js, supported by a scalable MySQL database schema with CRUD operations and filtering capabilities.",
    role: "Backend Developer",
    tech: ["Node.js", "Express.js", "MySQL", "REST API"],
    results:
      "Several core API endpoints were successfully implemented and unit tested; the project highlighted the importance of clear cross-team communication and requirement definition.",
    repository: "https://github.com/RaviAzzuraPutra/Project13-2-TravelPlannerApp",
  },
  {
    id: 2,
    title: "Masj.id Content Management System (CMS)",
    category: "Full Stack",
    projectType: "Internship Project",
    date: "Jul 2024 - Sep 2024",
    associated: "PT. Motiolabs Digital Indonesia",
    problem:
      "Mosque administrators required a centralized digital platform to manage information, services, and community-related data efficiently.",
    solution:
      "Contributed to the development of a CMS using Laravel and MySQL, applying software engineering principles across analysis, design, implementation, and testing phases.",
    role: "Full Stack Developer Intern",
    tech: ["Laravel", "PHP", "MySQL", "MVC Architecture"],
    results:
      "Delivered a functional CMS supporting mosque information management while gaining hands-on experience in socially impactful software development.",
    repository: "-",
  },
  {
    id: 3,
    title:
      "DEVELOPMENT OF A SCHEDULING AND ATTENDANCE SYSTEM UTILIZING GEOLOCATION AND FACE RECOGNITION TECHNOLOGY AT CATERING NY. SOEWARDONO",
    category: "Full Stack",
    projectType: "Thesis Project",
    date: "Mar 2025 - Aug 2025",
    associated: "Catering Ny. Soewardono",
    problem:
      "Manual and delayed attendance reporting caused payroll inaccuracies and lack of real-time workforce monitoring in event-based catering operations.",
    solution:
      "Built a web-based system with double verification (geolocation + face recognition), polygon-based work area monitoring, and automated WhatsApp notifications.",
    role: "System Designer & Full Stack Developer",
    tech: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Leaflet.js",
      "Turf.js",
      "Face-api.js",
      "Nominatim API",
      "WhatsApp-web.js",
    ],
    results:
      "Enabled location-restricted attendance with higher data accuracy; identified PWA background-tracking limitations as a key technical constraint.",
    repository: "https://github.com/RaviAzzuraPutra/pembangunan-sistem-penjadwalan-dan-absensi",
  },
  {
    id: 4,
    title: "Basic CRUD Application with Golang & Next.js",
    category: "Full Stack",
    projectType: "Training Project",
    date: "Sep 2025",
    associated: "-",
    problem:
      "A simple but complete example was needed to understand end-to-end CRUD workflows and resource lifecycle management.",
    solution:
      "Developed a non-production CRUD application using Golang (Gin + GORM) and Next.js, including image upload and deletion via Cloudinary.",
    role: "Full Stack Developer",
    tech: [
      "Golang",
      "Gin",
      "GORM",
      "PostgreSQL",
      "Next.js",
      "Cloudinary",
    ],
    results:
      "Demonstrated clean separation of concerns and provided a strong conceptual foundation for more advanced backend architectures.",
    repository: "https://github.com/RaviAzzuraPutra/BASIC-CRUD-GOLANG-NEXTJS",
  },
  {
    id: 5,
    title: "AI-Powered ToDo List Application",
    category: "Full Stack",
    projectType: "Independent Learning Project",
    date: "Oct 2025",
    associated: "-",
    problem:
      "Traditional task management applications lack intelligent assistance for prioritization and task understanding.",
    solution:
      "Built a full-stack ToDo application using Next.js and Golang, integrated with a lightweight AI module to generate task insights and recommendations.",
    role: "Full Stack Developer",
    tech: [
      "Golang",
      "Gin",
      "PostgreSQL",
      "Next.js",
      "Next-PWA",
      "AI Gemini",
      "Docker",
    ],
    results:
      "Successfully demonstrated AI-assisted task management within a simple monorepo architecture.",
    repository: "https://github.com/RaviAzzuraPutra/TODO-NEXTJS-GOLANG-DOCKER",
  },
  {
    id: 6,
    title: "Backend Social Commerce Platform",
    category: "Backend REST API",
    projectType: "Project-Based Internship",
    date: "Dec 2025",
    associated: "Evermos",
    problem:
      "A scalable and maintainable backend was required to simulate real-world social commerce transactions with strong data integrity.",
    solution:
      "Implemented a monolithic backend using Golang and Fiber, strictly following Clean Architecture with layered separation and ACID-compliant transactions.",
    role: "Backend Developer",
    tech: ["Golang", "Fiber", "MySQL", "GORM", "JWT", "Clean Architecture"],
    results:
      "Delivered a robust backend system supporting authentication, product management, and end-to-end transactions.",
    repository: "https://github.com/RaviAzzuraPutra/project_rakamin",
  },
  {
    id: 7,
    title: "Event-Driven Microservices for Order & Stock Management",
    category: "Backend REST API",
    projectType: "Independent Learning Project",
    associated: "-",
    date: "Dec 2025",
    problem:
      "Synchronous communication between services caused high latency and tight coupling in transaction processing.",
    solution:
      "Designed an event-driven microservices architecture using Apache Kafka to decouple Order and Stock services.",
    role: "Backend Engineer",
    tech: [
      "Golang",
      "Gin",
      "GORM",
      "PostgreSQL",
      "Apache Kafka",
      "Docker",
    ],
    results:
      "Achieved low-latency order processing (~60ms) with higher availability and resilience compared to monolithic systems.",
    repository: "https://github.com/RaviAzzuraPutra/LATIHAN-MICROSERVICE-NEW",
  },
  {
    id: 8,
    title: "AuraStock: AI-Driven Multi-Objective Inventory Optimizer ",
    category: "Backend REST API",
    projectType: "Bootcamp Final Project",
    associated: "Sanbercode",
    date: "Jan 2026",
    problem:
      "Manual inventory management is prone to human error, leading to inaccurate stock records, overstocking, or stockouts, and lacks predictive capabilities for restocking.",
    solution:
      "Developed a Clean Architecture backend using Golang and PostgreSQL, integrated with Google Gemini AI to analyze transaction patterns and provide automated restocking recommendations.",
    role: "Backend Engineer",
    "tech": [
      "Golang",
      "Gin",
      "GORM",
      "PostgreSQL",
      "Google Gemini AI",
      "Cloudinary",
      "JWT",
      "Docker",
    ],
    results:
      "Successfully automated stock tracking and AI-driven decision support, enabling real-time insights (SmartLog) and reducing the risk of stockouts through safety stock monitoring.",
    repository: "https://github.com/RaviAzzuraPutra/lastproject-sanbercode-batch73",
  },
];


export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        My <span className="text-[#d4af37]">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] border-2 border-[#d4af37]/30 rounded-lg overflow-hidden hover:border-[#d4af37] transition-all duration-300"
          >
            <div className="p-4 sm:p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <div className="inline-block px-2 py-0.5 bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-full mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white break-words truncate">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">{project.associated}</p>
                </div>
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className={`text-[#d4af37] transition-transform duration-300 flex-shrink-0 mt-1 ${expandedId === project.id ? "rotate-90" : ""
                    }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {expandedId === project.id && (
                <div className="space-y-4 mt-3 pt-3 border-t border-[#d4af37]/20">
                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Project Type</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.projectType}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Date</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.date}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Problems</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Solutions</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-[#d4af37]/10 text-[#d4af37] text-xs font-medium rounded border border-[#d4af37]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Repository</h4>
                    {project.repository && project.repository !== "-" ? (
                      <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline break-all text-xs sm:text-sm transition-colors">
                        {project.repository}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-xs sm:text-sm">Private Repository / Not Available</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
