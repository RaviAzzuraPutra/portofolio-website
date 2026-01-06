export default function Quotes() {
  const quotes = [
    {
      text: "The best code is no code. The second best code is code that solves the problem simply.",
      author: "Ryan Dahl",
      role: "Creator of Node.js",
    },
    {
      text: "Premature optimization is the root of all evil. But do it anyway if it makes the system better.",
      author: "Donald Knuth",
      role: "Computer Scientist",
    },
    {
      text: "Good architecture is something that does not get in the way of the implementation.",
      author: "Uncle Bob",
      role: "Software Engineer",
    },
    {
      text: "Perfect is the enemy of good. Ship fast, iterate faster.",
      author: "Paul Buchheit",
      role: "Gmail Creator",
    },
    {
      text: "The most important part of the code is the part that nobody reads.",
      author: "Bill Kennedy",
      role: "Go Developer",
    },
    {
      text: "If it is a good idea, go ahead and do it. It is much easier to apologize than it is to get permission.",
      author: "Grace Hopper",
      role: "Pioneer Programmer",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
        Developer <span className="text-[#d4af37]">Wisdom</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-8 sm:mb-12"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <p className="text-[#d4af37] text-2xl sm:text-3xl mb-3 sm:mb-4">❝</p>
              <p className="text-white text-sm sm:text-base leading-relaxed mb-4 italic">{quote.text}</p>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-4">
              <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">{quote.author}</p>
              <p className="text-gray-400 text-xs">{quote.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
