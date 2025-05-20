"use client"

import { Button } from "@/components/ui/button";
import ArgumentCard from "@/components/problem/ArgumentCard";
import ImplicationPropositionFormSet from "@/components/problem/ImplicationPropositionFormSet";
import Link from "next/link";
import { useImplicationFormSetStore } from "@/store/ImplicationFormSetStore";
import { useImplicationPropositionFormSetValidation } from "@/hooks/step2/useImplicationPropositionFormSetValidation";
import ValidationResultDialog from "@/components/problem/ValidationResultDialog";
import { useState } from "react";
import { ValidationResult } from "@/hooks/step2/useImplicationPropositionFormSetValidation";

export default function ProblemStep2Page() {
  const { selections, setCorrect } = useImplicationFormSetStore();
  const { validatePropositions } = useImplicationPropositionFormSetValidation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);

  const handleValidation = () => {
    const result = validatePropositions(selections);
    setCorrect(result.isCorrect);
    setValidationResult(result);
    setIsDialogOpen(true);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">演習 ステップ2</h1>
      <div className="space-y-4">
        <p>論証に使われている命題を作成してください。</p>
        <ArgumentCard />
        <ImplicationPropositionFormSet />
        <div className="flex gap-4">
          <Link href="/problem/step1">
            <Button>
              前へ
            </Button>
          </Link>
          <Button onClick={handleValidation}>
            答え合わせ
          </Button>
        </div>
      </div>
      {validationResult && (
        <ValidationResultDialog
          result={validationResult}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          nextStepPath="/problem/step3"
        />
      )}
    </>
  )
} 