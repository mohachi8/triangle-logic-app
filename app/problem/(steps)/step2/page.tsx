"use client"

import { useProblemStore } from "@/store/problemStore";
import { Button } from "@/components/ui/button";

export default function ProblemStep2Page() {
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">演習 ステップ2</h1>
      <div className="space-y-4">
        <p>ここに問題文が入ります。</p>
        <p>問題の説明や条件など...</p>
        <p>現在選択されている問題ID: {selectedProblemId ?? 'なし'}</p>
        <Button>
          次へ
        </Button>
      </div>
    </>
  )
} 