"use client"

import Link from "next/link"
import { problems } from "@/lib/problems"
import { Button } from "@/components/ui/button"
import { useProblemStore } from "@/store/problemStore"

export default function ProblemPage() {
  const setSelectedProblemId = useProblemStore((state) => state.setSelectedProblemId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">問題一覧</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Object.entries(problems).map(([id]) => (
          <Link
            key={id}
            href={`/problem/step1`}
            className="block"
            onClick={() => setSelectedProblemId(Number(id))}
          >
            <Button variant="outline" className="w-full h-24 text-xl">{id}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
} 