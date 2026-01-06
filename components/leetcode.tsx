"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const leetcodeProblems = [
  {
    id: 1,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    description: "Cari substring terpanjang yang tidak mengandung character yang sama",
    approach: [
      "Gunakan Sliding Window technique dengan two pointers",
      "Maintain hashmap untuk track character indices",
      "Expand window right pointer, shrink left saat duplicate ditemukan",
      "Track max length sepanjang proses",
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(n, m))",
    lesson:
      "Sliding Window sangat efficient untuk substring/subarray problems. Key insight adalah expand-contract pattern.",
    code: `
function lengthOfLongestSubstring(s: string): number {
  const charIndex = new Map<string, number>();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (charIndex.has(s[right])) {
      left = Math.max(left, charIndex.get(s[right])! + 1);
    }
    charIndex.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
    `.trim(),
  },
  {
    id: 2,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Merge & Heap",
    description: "Merge k linked lists yang sudah sorted menjadi satu sorted list",
    approach: [
      "Min heap approach: maintain priority queue dari head nodes",
      "Pop node dengan value terkecil, add next node ke heap",
      "Ulangi sampai heap kosong",
      "Alternatif: Divide & Conquer dengan merge 2 lists",
    ],
    timeComplexity: "O(n*k*log(k))",
    spaceComplexity: "O(k)",
    lesson:
      "Min Heap sangat powerful untuk merge operations. Understand tradeoff antara heap vs divide-conquer approach.",
    code: `
class MinHeap {
  private heap: ListNode[] = [];

  push(node: ListNode) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): ListNode | null {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  private bubbleUp(i: number) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i].val < this.heap[parent].val) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else break;
    }
  }

  private bubbleDown(i: number) {
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < this.heap.length && this.heap[left].val < this.heap[smallest].val) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }
      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
        i = smallest;
      } else break;
    }
  }
}
    `.trim(),
  },
  {
    id: 3,
    title: "Design LRU Cache",
    difficulty: "Medium",
    category: "Design",
    description: "Implement LRU Cache dengan get dan put operations O(1)",
    approach: [
      "Combine HashMap + Doubly Linked List",
      "HashMap: key -> node mapping untuk O(1) access",
      "DLL: maintain order of usage (recently used di tail)",
      "get(): move node to tail, return value",
      "put(): add/update node at tail, remove LRU (head) jika overflow",
    ],
    timeComplexity: "O(1) untuk both get dan put",
    spaceComplexity: "O(capacity)",
    lesson:
      "Understanding data structure combination adalah crucial untuk system design. Hash + DLL pattern very common di interview.",
    code: `
class Node {
  constructor(
    public key: number,
    public value: number,
    public prev?: Node,
    public next?: Node
  ) {}
}

class LRUCache {
  private cache: Map<number, Node> = new Map();
  private head: Node = new Node(-1, -1);
  private tail: Node = new Node(-1, -1);

  constructor(private capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key)!;
    this.removeNode(node);
    this.addToTail(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.removeNode(node);
      this.addToTail(node);
    } else {
      if (this.cache.size === this.capacity) {
        const lru = this.head.next!;
        this.removeNode(lru);
        this.cache.delete(lru.key);
      }
      const node = new Node(key, value);
      this.cache.set(key, node);
      this.addToTail(node);
    }
  }

  private removeNode(node: Node): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private addToTail(node: Node): void {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev!.next = node;
    this.tail.prev = node;
  }
}
    `.trim(),
  },
]

export default function LeetCode() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="leetcode" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        LeetCode <span className="text-[#d4af37]">Solutions</span>
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
                    className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded whitespace-nowrap ${
                      problem.difficulty === "Hard"
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
                className={`text-[#d4af37] flex-shrink-0 transition-transform duration-300 mt-1 ${
                  expandedId === problem.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedId === problem.id && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-[#d4af37]/20 space-y-4 sm:space-y-6">
                <div>
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
                  <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-base">Key Learning</h4>
                  <p className="text-gray-300 italic text-xs sm:text-sm">{problem.lesson}</p>
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
        <h3 className="text-[#d4af37] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">📊 LeetCode Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 text-center">
          {[
            { label: "Problems Solved", value: "250+" },
            { label: "Easy", value: "120" },
            { label: "Medium", value: "95" },
            { label: "Hard", value: "35" },
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
