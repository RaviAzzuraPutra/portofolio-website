"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const leetcodeProblems = [
  {
    id: 1,
    title: "Single Number",
    difficulty: "Easy",
    category: "Hash Map",
    description:
      "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    approach: [
      "Use a hash map to count the frequency of each number",
      "Traverse the array and increment occurrences",
      "Return the number whose frequency is exactly one",
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    uniqueInsight:
      "This problem subtly exposes the philosophical difference between information preservation and information elimination. Hashing preserves full frequency information, while XOR-based solutions deliberately erase redundant data to reveal invariants.",
    lesson:
      "Hash maps provide a straightforward and readable solution, though they trade constant-space optimality for clarity.",
    conclusion:
      "From a software engineering perspective, the hash map approach represents an explicit and information-complete strategy. While it does not satisfy the strictest theoretical space constraints, it maximizes interpretability and debuggability, which are often decisive factors in real-world systems.",
    language: "Go",
    code: `
func singleNumber(nums []int) int {
    single := make(map[int]int)

    for _, value := range nums {
        single[value]++
    }

    for key := range single {
        if single[key] == 1 {
            return key
        }
    }
    return 0
}
    `.trim(),
  },
  {
    id: 2,
    title: "Single Number II",
    difficulty: "Medium",
    category: "Hash Map",
    description:
      "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.",
    approach: [
      "Maintain a hash map to store frequency counts",
      "Traverse the array and increment each value count",
      "Identify and return the element with frequency one",
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    uniqueInsight:
      "Unlike its XOR-based counterpart, this solution treats frequency as first-class data. This framing aligns more closely with database-style aggregation than with bitwise algebra.",
    lesson:
      "Although bitwise solutions exist, frequency counting remains an intuitive baseline for correctness-first implementations.",
    conclusion:
      "This solution demonstrates that algorithmic optimality is multi-dimensional. While it sacrifices constant auxiliary space, it offers semantic clarity and deterministic behavior, which are valuable properties in maintainable and verifiable systems.",
    language: "Go",
    code: `
func singleNumber(nums []int) int {
    single := make(map[int]int)

    for _, value := range nums {
        single[value]++
    }

    for key := range single {
        if single[key] == 1 {
            return key
        }
    }
    return 0
}
    `.trim(),
  },
  {
    id: 3,
    title: "Single Number III",
    difficulty: "Medium",
    category: "Hash Map",
    description:
      "Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.",
    approach: [
      "Use a hash map to record frequency of each element",
      "Iterate through the map to find values with frequency one",
      "Collect and return the two unique elements",
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    uniqueInsight:
      "This problem highlights the tension between algebraic minimalism (XOR partitioning) and epistemic completeness. The hash map solution retains the entire statistical distribution of the dataset, not just the final answer.",
    lesson:
      "This solution prioritizes determinism and clarity over strict adherence to constant-space constraints.",
    conclusion:
      "The implemented solution effectively identifies the two unique elements within a dataset where all other elements occur in pairs. By leveraging a hash map to record frequency counts, the algorithm ensures deterministic retrieval of elements with singular occurrence. While asymptotically optimal in time, it introduces non-constant space overhead. Nonetheless, it serves as a pedagogically sound and maintainable baseline, upon which XOR-based refinements can later be constructed to satisfy stricter theoretical constraints.",
    language: "Go",
    code: `
func singleNumber(nums []int) []int {
    single := make(map[int]int)
    result := []int{}

    for _, value := range nums {
        single[value]++
    }

    for key := range single {
        if single[key] == 1 {
            result = append(result, key)
        }
    }
    return result
}
    `.trim(),
  },
  {
    id: 4,
    title: "Missing Number",
    difficulty: "Easy",
    category: "Sorting",
    description:
      "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    approach: [
      "Sort the array in ascending order",
      "Iterate while tracking the expected value",
      "Return the first mismatch or n if all values are present",
    ],
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "Sorting acts as an entropy-reduction mechanism. By enforcing order, the problem transitions from probabilistic search to deterministic verification.",
    lesson:
      "Sorting reduces problem entropy, making sequence validation intuitive, even if it sacrifices linear-time optimality.",
    conclusion:
      "While linear-time solutions using arithmetic summation or XOR exist, the sorting-based approach emphasizes cognitive simplicity and structural reasoning. This trade-off exemplifies a broader engineering principle: solutions that are marginally slower asymptotically may still be preferable when they enhance readability, correctness assurance, and long-term maintainability.",
    language: "Go",
    code: `
func missingNumber(nums []int) int {
    sort.Ints(nums)
    missing := 0

    for i := 0; i < len(nums); i++ {
        if nums[i] == missing {
            missing++
        }
    }
    return missing
}
    `.trim(),
  },
  {
    id: 5,
    title: "Fibonacci Number",
    difficulty: "Easy",
    category: "Recursion",
    description:
      "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.",
    approach: [
      "Handle base cases n = 0 and n = 1",
      "Recursively compute fib(n-1) + fib(n-2)",
    ],
    timeComplexity: "O(2^n)",
    spaceComplexity: "O(n)",
    uniqueInsight:
      "Naive recursion exposes the computational cost of elegance. The mathematical definition is concise, but its direct execution reveals exponential redundancy.",
    lesson:
      "Naive recursion highlights overlapping subproblems and motivates optimization via memoization or iteration.",
    conclusion:
      "This implementation serves less as a practical algorithm and more as a didactic artifact. It illustrates the gap between mathematical specification and computational execution, thereby motivating dynamic programming as a necessary bridge between theory and efficient practice.",
    language: "Go",
    code: `
func fib(n int) int {
    if n == 0 {
        return 0
    }
    if n == 1 {
        return 1
    }
    return fib(n-1) + fib(n-2)
}
    `.trim(),
  },
];


export default function LeetCode() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="leetcode" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        LeetCode <span className="text-[#d4af37]">Solutions</span> ~ Problems Solved <span className="text-[#d4af37]">By Myself</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="space-y-4 sm:space-y-6">
        {leetcodeProblems.map((problem) => (
          <div
            key={problem.id}
            className="bg-[#1a1a1a] border-2 border-[#d4af37]/30 rounded-lg overflow-hidden hover:border-[#d4af37] transition-all duration-300"
          >
            <button
              onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
              className="w-full p-4 sm:p-6 flex items-start justify-between hover:bg-[#d4af37]/5 transition-colors duration-300 gap-3"
            >
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                  <h3 className="text-base sm:text-xl font-bold text-white">{problem.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded whitespace-nowrap ${problem.difficulty === "Hard"
                      ? "bg-red-500/20 text-red-400"
                      : problem.difficulty === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                      }`}
                  >
                    {problem.difficulty}
                  </span>
                  <span className="text-xs px-2 sm:px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded">
                    {problem.category}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm break-words">{problem.description}</p>
              </div>
              <ChevronDown
                size={20}
                className={`text-[#d4af37] flex-shrink-0 transition-transform duration-300 mt-1 ${expandedId === problem.id ? "rotate-180" : ""
                  }`}
              />
            </button>

            {expandedId === problem.id && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-[#d4af37]/20 space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-base mt-3">Programming Languages Used</h4>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3">{problem.language}</p>
                  <h4 className="text-[#d4af37] font-semibold mb-3 text-sm sm:text-base">Approach & Algoritma</h4>
                  <ul className="space-y-2">
                    {problem.approach.map((step, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300 text-xs sm:text-sm">
                        <span className="text-[#d4af37] font-bold flex-shrink-0">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-base">Time Complexity</h4>
                    <p className="text-gray-300 font-mono bg-[#0f0f0f] p-2 sm:p-3 rounded text-xs sm:text-sm">
                      {problem.timeComplexity}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-base">Space Complexity</h4>
                    <p className="text-gray-300 font-mono bg-[#0f0f0f] p-2 sm:p-3 rounded text-xs sm:text-sm">
                      {problem.spaceComplexity}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-base">Unique Insight</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">{problem.uniqueInsight}</p>
                </div>

                <div>
                  <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-base">Key Learning</h4>
                  <p className="text-gray-300 italic text-xs sm:text-sm">{problem.lesson}</p>
                </div>

                <div>
                  <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-base">Conclusion</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">{problem.conclusion}</p>
                </div>

                <div>
                  <h4 className="text-[#d4af37] font-semibold mb-3 text-xs sm:text-base">Solution Code</h4>
                  <pre className="bg-[#0f0f0f] p-3 sm:p-4 rounded overflow-x-auto text-xs sm:text-sm text-gray-300 border border-[#d4af37]/20">
                    <code>{problem.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
        <h3 className="text-[#d4af37] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">📊 ~LeetCode Stats~ 📊</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 text-center">
          {[
            { label: "Problems Solved By Myself", value: "5" },
            { label: "Easy", value: "3" },
            { label: "Medium", value: "2" },
            { label: "Hard", value: "0" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl sm:text-2xl font-bold text-[#d4af37]">{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
