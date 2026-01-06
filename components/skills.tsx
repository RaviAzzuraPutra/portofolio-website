export default function Skills() {
  const hardSkills = [
    { category: "Languages", skills: ["JavaScript/TypeScript", "Python", "Go", "Java", "SQL"] },
    { category: "Backend Frameworks", skills: ["Node.js/Express", "NestJS", "FastAPI", "Spring Boot", "Django"] },
    { category: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Terraform"] },
    { category: "Messaging & Streaming", skills: ["RabbitMQ", "Kafka", "WebSocket", "gRPC", "GraphQL"] },
    { category: "Tools & Platforms", skills: ["Git", "Linux", "Postman", "Datadog", "New Relic"] },
  ]

  const softSkills = [
    "Technical Leadership",
    "System Design",
    "Code Review & Mentoring",
    "Problem Solving",
    "Communication",
    "Project Management",
    "Team Collaboration",
    "Documentation Writing",
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        Keahlian & <span className="text-[#d4af37]">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Hard Skills */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Hard Skills</h3>
          <div className="space-y-5 sm:space-y-6">
            {hardSkills.map((item) => (
              <div key={item.category}>
                <h4 className="text-[#d4af37] font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{item.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#d4af37]/10 text-[#d4af37] rounded-lg border border-[#d4af37]/30 text-xs sm:text-sm font-medium hover:bg-[#d4af37]/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="p-3 sm:p-4 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg text-center hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300"
              >
                <p className="text-white font-semibold text-xs sm:text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
