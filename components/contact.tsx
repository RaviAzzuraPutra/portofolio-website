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
        {/* Contact Form */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2.5 sm:py-3 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
                className="w-full px-4 py-2.5 sm:py-3 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors duration-300 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please write your message here..."
                rows={5}
                required
                className="w-full px-4 py-2.5 sm:py-3 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2.5 sm:py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#e8c547] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-center text-xs sm:text-sm">
                ✓ Message sent! I will respond shortly.
              </div>
            )}
          </form>
        </div>

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

          {/* Quick Reply Message */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm">
              <span className="text-[#d4af37] font-semibold">Availability:</span> I am open to discussions about new projects, collaborations, and exciting opportunities.
            </p>
            <p className="text-gray-400 text-xs">Response time: I am usually respond within 24 hours to all inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
