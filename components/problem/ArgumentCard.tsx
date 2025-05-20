"use client"

import { useProblemStore } from "@/store/problemStore";
import { problems } from "@/lib/problems";

export default function ArgumentCard() {
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);
  const selectedProblem = selectedProblemId ? problems[selectedProblemId] : null;

  return (
    <>
        {selectedProblem ? (
          <div>
            <p>{selectedProblem.minor_term}ならば{selectedProblem.middle_term}。</p>
            <p>よって、{selectedProblem.minor_term}ならば{selectedProblem.major_term}。</p>
            <p>なぜならば、{selectedProblem.middle_term}ならば{selectedProblem.major_term}からである。</p>
          </div>
        ) : (
          <p>問題が選択されていません</p>
        )}
    </>
  )
} 