"use client"

import ImplicationPropositionForm from "./ImplicationPropositionForm"
import { useImplicationFormSetStore } from "@/store/ImplicationFormSetStore"

export default function ImplicationPropositionFormSet() {
  const { selections, setSelection } = useImplicationFormSetStore()

  const handleSelectionChange = (index: number, first: string, second: string) => {
    setSelection(index, first, second)
  }

  return (
    <div className="space-y-4">
      {selections.map((selection, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-sm text-gray-500">命題 {index + 1}:</span>
          <ImplicationPropositionForm
            firstSelect={selection.first}
            secondSelect={selection.second}
            onSelectionChange={(first, second) => handleSelectionChange(index, first, second)}
          />
        </div>
      ))}
    </div>
  )
} 