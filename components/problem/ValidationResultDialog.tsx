"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ValidationResult } from "@/hooks/step2/useImplicationPropositionFormSetValidation"
import Link from "next/link"

interface ValidationResultDialogProps {
  result: ValidationResult
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  nextStepPath?: string
}

export default function ValidationResultDialog({
  result,
  isOpen,
  onOpenChange,
  nextStepPath,
}: ValidationResultDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="p-4">
            {result.isCorrect ? "正解！" : "不正解..."}
          </DialogTitle>
          <DialogDescription>
            {result.isCorrect 
              ? "次のステップに進みましょう"
              : "どこか間違っているようです"}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="mt-4 flex justify-center gap-4">
            {!result.isCorrect && (
              <Button onClick={() => onOpenChange(false)}>
                閉じる
              </Button>
            )}
            {result.isCorrect && nextStepPath && (
              <Link href={nextStepPath}>
                <Button>
                  次へ進む
                </Button>
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 