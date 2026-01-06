"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Marketplace API",
    category: "API Design",
    image: "/ecommerce-marketplace.png",
    problem: "Klien membutuhkan API yang dapat menangani 10,000+ concurrent users dengan latency minimal",
    solution: "Implementasi caching strategy, database indexing optimization, dan load balancing dengan Redis",
    role: "Lead Backend Developer",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    results: "99.9% uptime, 200ms avg response time",
  },
  {
    id: 2,
    title: "Real-time Notification System",
    category: "Event-Driven",
    image: "/notification-system.png",
    problem: "Sistem notifikasi lama tidak scalable dan memiliki delay hingga 5 detik",
    solution: "Membangun event-driven architecture menggunakan message queue dan WebSocket connections",
    role: "Architecture & Implementation",
    tech: ["RabbitMQ", "WebSocket", "Node.js", "MongoDB", "AWS"],
    results: "<100ms notification delivery, 50k concurrent connections",
  },
  {
    id: 3,
    title: "Payment Gateway Integration",
    category: "Financial Systems",
    image: "/payment-gateway.png",
    problem: "Integrasi dengan multiple payment providers tanpa downtime",
    solution: "Abstraction layer untuk multiple providers dengan transaction logging dan reconciliation system",
    role: "Senior Developer",
    tech: ["Node.js", "Stripe", "Razorpay", "PostgreSQL", "Vault"],
    results: "$50M+ transaction processed, 99.99% success rate",
  },
  {
    id: 4,
    title: "Microservices Migration",
    category: "System Design",
    image: "/microservices-architecture.png",
    problem: "Monolith application menjadi bottleneck, deployment time 2 jam",
    solution: "Migrasi ke microservices dengan service mesh (Istio) dan GitOps workflow",
    role: "Migration Lead",
    tech: ["Kubernetes", "Istio", "Node.js", "PostgreSQL", "gRPC"],
    results: "10x deployment speed, independent scaling per service",
  },
  {
    id: 5,
    title: "Analytics Data Pipeline",
    category: "Big Data",
    image: "/data-pipeline-analytics.jpg",
    problem: "Analisis data real-time untuk 100k+ events per second",
    solution: "Data pipeline dengan stream processing, data warehouse, dan analytics infrastructure",
    role: "Data Engineer",
    tech: ["Apache Kafka", "Apache Spark", "Presto", "Hadoop", "Python"],
    results: "Sub-second query response, 1PB data processed monthly",
  },
  {
    id: 6,
    title: "Multi-tenant SaaS Platform",
    category: "SaaS Architecture",
    image: "/saas-platform.jpg",
    problem: "Membangun platform SaaS yang aman dan scalable untuk 500+ enterprises",
    solution: "Tenant isolation, multi-region deployment, dan comprehensive security policies",
    role: "Technical Lead",
    tech: ["Node.js", "PostgreSQL", "AWS", "Docker", "OAuth2"],
    results: "Deployed in 5 regions, $2M ARR",
  },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        Proyek <span className="text-[#d4af37]">Unggulan</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="space-y-4 sm:space-y-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] border-2 border-[#d4af37]/30 rounded-lg overflow-hidden hover:border-[#d4af37] transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20"
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-full mb-2 sm:mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white break-words">{project.title}</h3>
                </div>
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className={`text-[#d4af37] transition-transform duration-300 flex-shrink-0 mt-2 ${
                    expandedId === project.id ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {expandedId === project.id && (
                <div className="space-y-5 sm:space-y-6 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#d4af37]/20">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-[#d4af37] font-semibold mb-2 text-sm sm:text-base">Masalah</h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[#d4af37] font-semibold mb-2 text-sm sm:text-base">Solusi</h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.solution}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-[#d4af37] font-semibold mb-2 text-sm sm:text-base">Peran Saya</h4>
                      <p className="text-gray-300 text-sm sm:text-base">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="text-[#d4af37] font-semibold mb-2 text-sm sm:text-base">Hasil</h4>
                      <p className="text-gray-300 text-sm sm:text-base">{project.results}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-3 text-sm sm:text-base">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-medium rounded border border-[#d4af37]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
