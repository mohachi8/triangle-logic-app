"use client"

import { useProblemStore } from "@/store/problemStore";
import { problems } from "@/lib/problems";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function ArgumentCard() {
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);
  const selectedProblem = selectedProblemId ? problems[selectedProblemId] : null;

  return (
    <>
      <Card className="w-[600px]">
        <CardContent className="p-4">
          {selectedProblem ? (
            <div>
              <p>
                {selectedProblem.minor_term}ならば{selectedProblem.middle_term}。
                よって、{selectedProblem.minor_term}ならば{selectedProblem.major_term}。
                なぜならば、{selectedProblem.middle_term}ならば{selectedProblem.major_term}からである。
              </p>
            </div>
          ) : (
            <p>問題が選択されていません</p>
          )}
        </CardContent>
      </Card>
    </>
  )
} 