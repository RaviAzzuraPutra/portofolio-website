"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        Lets <span className="text-[#d4af37]">Connect</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Options */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Other Ways to Contact</h3>

          {[
            {
              icon: Mail,
              label: "Email",
              value: "ravi.azzura74@gmail.com",
              href: "mailto:ravi.azzura74@gmail.com",
            },
            {
              icon: MessageSquare,
              label: "WhatsApp",
              value: "+62 813-1220-1169",
              href: "https://wa.me/6281312201169",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/ravi-azzura-putra-92059227b",
              href: "https://www.linkedin.com/in/ravi-azzura-putra-92059227b/",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/RaviAzzuraPutra",
              href: "https://github.com/RaviAzzuraPutra",
            },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 flex items-center gap-3 sm:gap-4 group"
            >
              <div className="p-2 sm:p-3 bg-[#d4af37]/20 rounded-lg group-hover:bg-[#d4af37]/30 transition-colors duration-300 flex-shrink-0">
                <contact.icon className="text-[#d4af37]" size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm sm:text-base">{contact.label}</p>
                <p className="text-gray-400 text-xs sm:text-sm break-words">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
