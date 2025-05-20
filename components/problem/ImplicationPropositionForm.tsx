import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { problems } from "@/lib/problems"
import { useProblemStore } from "@/store/problemStore"

interface ImplicationPropositionFormProps {
  firstSelect: string
  secondSelect: string
  onSelectionChange: (first: string, second: string) => void
}

export default function ImplicationPropositionForm({
  firstSelect,
  secondSelect,
  onSelectionChange
}: ImplicationPropositionFormProps) {
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId)
  const selectedProblem = selectedProblemId ? problems[selectedProblemId] : null

  return (
    <div className="flex items-center gap-2">
      <Select 
        value={firstSelect} 
        onValueChange={(value) => onSelectionChange(value, secondSelect)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="選択してください" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[
              { value: "minor_term", label: selectedProblem?.minor_term },
              { value: "middle_term", label: selectedProblem?.middle_term }, 
              { value: "major_term", label: selectedProblem?.major_term }
            ]
              .sort(() => Math.random() - 0.5)
              .map(item => (
                <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
      <p>ならば</p>
      <Select 
        value={secondSelect} 
        onValueChange={(value) => onSelectionChange(firstSelect, value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="選択してください" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[
              { value: "minor_term", label: selectedProblem?.minor_term },
              { value: "middle_term", label: selectedProblem?.middle_term }, 
              { value: "major_term", label: selectedProblem?.major_term }
            ]
              .sort(() => Math.random() - 0.5)
              .map(item => (
                <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
} 