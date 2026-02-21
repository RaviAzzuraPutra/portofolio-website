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

    for _, value := range nums {
        single[value]++
    }

    result := []int{}

    for key, _ := range single {
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
    var Missing int

    for i := 0; i < len(nums); i++ {
        if Missing == nums[i] {
            Missing++
        } else {
            return i
        }
    }

    return Missing
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
  }, {
    id: 6,
    title: "Divide Two Integers",
    difficulty: "Medium",
    category: "Math / Bit Manipulation",
    description:
      "Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero.",
    approach: [
      "Handle overflow edge cases (e.g., INT_MIN divided by -1)",
      "Determine the sign of the result based on input polarities",
      "Convert operands to floating-point or absolute values for processing",
      "Apply 32-bit signed integer constraints to the final quotient",
    ],
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "This problem serves as a boundary test for data type limitations. While the goal is to simulate division, the real challenge lies in navigating the asymmetric range of 32-bit signed integers, where the absolute value of the minimum integer exceeds the maximum.",
    lesson:
      "Pragmatic solutions sometimes leverage high-level language features (like float64) to bypass manual bit-shifting, though true algorithmic rigor often demands bitwise subtraction.",
    conclusion:
      "The implemented solution utilizes a pragmatic approach by leveraging float64 casting to handle the division and truncation. While the problem's spirit often invites bitwise manipulation, this strategy ensures precision within the 32-bit environment while maintaining code conciseness. It highlights an important engineering trade-off: choosing between low-level manual bit-arithmetic and the robustness of built-in type conversions to satisfy strict boundary conditions.",
    language: "Go",
    code: `
func divide(dividend int, divisor int) int {
    const MaxInt32 = 2147483647
    const MinInt32 = -2147483648

    var result float64

    result = float64(dividend) / float64(divisor)

    if result > float64(MaxInt32) {
        return MaxInt32
    }
    
    if result < float64(MinInt32) {
        return MinInt32
    }

    return int(result)
}
    `.trim(),
  }, {
    id: 7,
    title: "Find Target Indices After Sorting Array",
    difficulty: "Easy",
    category: "Sorting / Array",
    description:
      "You are given a 0-indexed integer array nums and a target element target. A target index is an index i such that nums[i] == target. Return a list of the target indices of nums after sorting nums in non-decreasing order.",
    approach: [
      "Sort the input array in non-decreasing order using a built-in sorting algorithm",
      "Initialize an empty result slice to store the target indices",
      "Iterate through the sorted array and compare each element with the target",
      "Append the current index to the result list whenever a match is found",
    ],
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    uniqueInsight:
      "Sorting transforms the array from a state of high entropy to a structured sequence, where identical elements are forced into a contiguous block. This structural alignment allows the search for indices to become a simple linear traversal, where the order of discovery naturally satisfies the requirement for sorted output.",
    lesson:
      "Leveraging built-in sorting functions often provides the best balance between implementation speed and runtime efficiency for standard-sized datasets.",
    conclusion:
      "The implemented solution serves as a classic example of the 'Sort-then-Process' pattern. By first reducing the problem's complexity through an O(n log n) sort, the subsequent extraction of indices becomes trivial. While a linear-time O(n) solution is theoretically possible by counting elements smaller than and equal to the target, the sorting approach offers superior readability and utilizes highly optimized standard library functions, making it a robust choice for practical software development.",
    language: "Go",
    code: `
func targetIndices(nums []int, target int) []int {
    sort.Ints(nums)

    var result []int

    for key, value := range nums {
        if value == target {
            result = append(result, key)
        }
    }

    return result
}
    `.trim(),
  }, {
    id: 8,
    title: "Sum of Unique Elements",
    difficulty: "Easy",
    category: "Hash Map",
    description:
      "You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array. Return the sum of all the unique elements of nums.",
    approach: [
      "Initialize a hash map to track the frequency of each integer",
      "Perform a first pass over the array to populate the frequency table",
      "Iterate through the map entries to identify elements with a count of exactly one",
      "Accumulate and return the sum of these unique keys",
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    uniqueInsight:
      "This problem illustrates the decoupling of **state capture** (frequency counting) from **logic execution** (summation). By treating the dataset as a frequency distribution rather than a mere sequence, we transform a potential search problem into a direct lookup task.",
    lesson:
      "When uniqueness is the criteria, a frequency map is often the most robust tool, deliberately trading memory usage (Space) to eliminate complex nested iterations (Time).",
    conclusion:
      "The solution exemplifies the classic **Space-Time Trade-off** paradigm in algorithmic design. By allocating auxiliary memory for a Hash Map, the algorithm successfully avoids the quadratic complexity O(N²) of brute-force comparisons, achieving a deterministic linear time complexity of O(N). It demonstrates that strategically increasing the memory footprint is often the most effective way to minimize computational latency in frequency-based queries.",
    language: "Go",
    code: `
func sumOfUnique(nums []int) int {
    UniqueNumber := make(map[int]int)

    for _, value := range nums {
        UniqueNumber[value]++
    }

    var result int

    for key, value := range UniqueNumber {
        if value == 1 {
            result += key
        }
    }

    return result
}
    `.trim(),
  },
  {
    id: 9,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Sorting / Array",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    approach: [
      "Allocate a new array large enough to store all elements from both input arrays",
      "Copy the contents of both arrays into this new array using the copy function",
      "Sort the combined array to ensure all elements are in the correct order",
      "If the total length is odd, return the element at the middle index",
      "If the total length is even, return the average of the two middle elements"
    ],
    timeComplexity: "O((m+n) log(m+n))",
    spaceComplexity: "O(m+n)",
    uniqueInsight:
      "This approach prioritizes conceptual simplicity and code readability. By merging and re-sorting, we treat the problem as a global ordering task rather than a pointer-based partitioning task, making the logic much easier to validate at the expense of theoretical peak performance.",
    lesson:
      "While the problem asks for O(log(m+n)), a merge-and-sort strategy provides a reliable baseline. It highlights the trade-off between brute-force merging and optimal divide-and-conquer strategies.",
    conclusion:
      "This solution is correct but emphasizes conceptual simplicity. It is like merging two sorted decks of cards into one big sorted deck and then drawing the card in the middle. While it doesn't meet the O(log(m+n)) constraint of a perfect binary search approach, it serves as a robust implementation that is easy to debug and maintain.",
    language: "Go",
    code: `
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    result := make([]int, len(nums1)+len(nums2))
    copy(result, nums1)
    copy(result[len(nums1):], nums2)
    sort.Ints(result)

    mid1 := len(result)/2 - 1
    mid2 := len(result)/2

    if len(result)%2 == 0 {
        return float64(result[mid1]+result[mid2]) / 2
    }

    if len(result)%2 != 0 {
        return float64(result[len(result)/2])
    }

    return 0.0
}
    `.trim(),
  },
  {
    id: 10,
    title: "Add Two Integers",
    difficulty: "Easy",
    category: "Math",
    description:
      "Given two integers num1 and num2, return the sum of the two integers.",
    approach: [
      "Identify the two input integers provided as parameters",
      "Perform a direct arithmetic addition using the '+' operator",
      "Store the sum in a variable or return it directly as the result"
    ],
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "Integer addition embodies a deep interplay between hardware and abstraction. While it appears as a simple high-level command, it is realized by fundamental adder circuits and serves as the fastest CPU instruction, underpinning everything from memory addressing to complex linear algebra.",
    lesson:
      "This problem serves as a reminder that even the most basic primitives in computing carry significant theoretical weight, defining the commutative (Abelian) group operation that modern arithmetic is built upon.",
    conclusion:
      "The implementation is trivial, yet it highlights the efficiency of bit-level operations. On fixed-size machine words, this is treated as a constant-time operation, illustrating the peak of implementation efficiency in software engineering.",
    language: "Go",
    code: `
func sum(num1 int, num2 int) int {
    result := num1 + num2

    return result
}
    `.trim(),
  },
];


export default function LeetCode() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const totalSolved = leetcodeProblems.length;
  const easyCount = leetcodeProblems.filter((p) => p.difficulty === "Easy").length;
  const mediumCount = leetcodeProblems.filter((p) => p.difficulty === "Medium").length;
  const hardCount = leetcodeProblems.filter((p) => p.difficulty === "Hard").length;

  const groupedByCategory: Record<string, typeof leetcodeProblems> = leetcodeProblems.reduce((acc, cur) => {
    if (!acc[cur.category]) acc[cur.category] = []
    acc[cur.category].push(cur)
    return acc
  }, {} as Record<string, typeof leetcodeProblems>)

  return (
    <section id="leetcode" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        LeetCode <span className="text-[#d4af37]">Solutions</span> ~ Problems Solved <span className="text-[#d4af37]">By Myself</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="space-y-6">
        {Object.keys(groupedByCategory).map((category) => (
          <div key={category} className="bg-transparent">
            <button
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
              className="w-full flex items-center justify-between py-3 px-2 sm:px-3 bg-[#0f0f0f]/10 rounded-md hover:bg-[#0f0f0f]/08 transition-colors"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">{category}</h3>
                <span className="text-xs text-gray-400">{groupedByCategory[category].length} problems</span>
              </div>
              <ChevronDown size={18} className={`text-[#d4af37] transition-transform ${openCategory === category ? "rotate-180" : ""}`} />
            </button>

            {openCategory === category && (
              <div className="mt-4 grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {groupedByCategory[category].map((problem) => (
                  <div key={problem.id} className="bg-[#1a1a1a] border-2 border-[#d4af37]/20 rounded-lg overflow-hidden hover:border-[#d4af37] transition-all duration-300">
                    <button
                      onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
                      className="w-full p-3 flex flex-col items-start gap-2 text-left"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <h4 className="text-sm sm:text-base font-bold text-white flex-1 truncate">{problem.title}</h4>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap ${problem.difficulty === "Hard"
                            ? "bg-red-500/20 text-red-400"
                            : problem.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                            }`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm line-clamp-3">{problem.description}</p>
                      <span className="text-xs px-2 py-0.5 bg-[#d4af37]/10 text-[#d4af37] rounded mt-2">{problem.category}</span>
                    </button>

                    {expandedId === problem.id && (
                      <div className="px-3 pb-3 border-t border-[#d4af37]/20 space-y-3">
                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Languages</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">{problem.language}</p>
                        </div>
                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Approach</h4>
                          <ul className="list-inside list-decimal text-gray-300 text-xs sm:text-sm space-y-1">
                            {problem.approach.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <h5 className="text-[#d4af37] text-xs sm:text-sm font-semibold">Time</h5>
                            <p className="text-gray-300 text-xs sm:text-sm font-mono">{problem.timeComplexity}</p>
                          </div>
                          <div>
                            <h5 className="text-[#d4af37] text-xs sm:text-sm font-semibold">Space</h5>
                            <p className="text-gray-300 text-xs sm:text-sm font-mono">{problem.spaceComplexity}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Unique Insight</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">{problem.uniqueInsight}</p>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Key Learning</h4>
                          <p className="text-gray-300 italic text-xs sm:text-sm">{problem.lesson}</p>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Conclusion</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">{problem.conclusion}</p>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-sm">Solution Code</h4>
                          <pre className="bg-[#0f0f0f] p-2 sm:p-3 rounded overflow-x-auto text-xs sm:text-sm text-gray-300 border border-[#d4af37]/20">
                            <code>{problem.code}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
        <h3 className="text-[#d4af37] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">📊 ~LeetCode Stats~ 📊</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 text-center">
          {[
            { label: "Problems Solved By Myself", value: totalSolved },
            { label: "Easy", value: easyCount },
            { label: "Medium", value: mediumCount },
            { label: "Hard", value: hardCount },
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
