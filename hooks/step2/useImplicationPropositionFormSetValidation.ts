import { useProblemStore } from "@/store/problemStore"
import { problems } from "@/lib/problems"
import { PropositionSelection } from "@/store/ImplicationFormSetStore"

interface ValidationDetail {
  index: number
  isCorrect: boolean
  expected: PropositionSelection
  actual: PropositionSelection
}

export interface ValidationResult {
  isCorrect: boolean
  details: ValidationDetail[]
}

export function useImplicationPropositionFormSetValidation() {
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId)
  const selectedProblem = selectedProblemId ? problems[selectedProblemId] : null

  const validatePropositions = (selections: PropositionSelection[]): ValidationResult => {
    if (!selectedProblem) {
      return {
        isCorrect: false,
        details: []
      }
    }

    // 正解の命題を定義
    const correctPropositions: PropositionSelection[] = [
      { first: "minor_term", second: "middle_term" },
      { first: "middle_term", second: "major_term" },
      { first: "minor_term", second: "major_term" }
    ]

    // 各選択に対して、対応する正解の命題を探す
    const details: ValidationDetail[] = selections.map((selection, index) => {
      // 選択された命題に対応する正解の命題を探す
      const expected = correctPropositions.find(
        correct => 
          selection.first === correct.first && 
          selection.second === correct.second
      ) || correctPropositions[index]

      // この命題が正解セットに含まれているかチェック
      const isCorrect = correctPropositions.some(
        correct => 
          selection.first === correct.first && 
          selection.second === correct.second
      )

      return {
        index,
        isCorrect,
        expected,
        actual: selection
      }
    })

    // すべての正解の命題が1つずつ含まれているかチェック
    const isCorrect = correctPropositions.every(correct =>
      selections.filter(
        selection =>
          selection.first === correct.first && 
          selection.second === correct.second
      ).length === 1
    )

    return {
      isCorrect,
      details
    }
  }

  return {
    validatePropositions
  }
} 