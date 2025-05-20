import { create } from 'zustand'

export type PropositionSelection = {
  first: string
  second: string
}

interface ImplicationFormSetState {
  selections: PropositionSelection[]
  isCorrect: boolean | null
  setSelection: (index: number, first: string, second: string) => void
  resetSelections: () => void
  setCorrect: (isCorrect: boolean) => void
}

export const useImplicationFormSetStore = create<ImplicationFormSetState>((set) => ({
  selections: [
    { first: "", second: "" },
    { first: "", second: "" },
    { first: "", second: "" }
  ],
  isCorrect: null,
  setSelection: (index: number, first: string, second: string) => 
    set((state) => {
      const newSelections = [...state.selections]
      newSelections[index] = { first, second }
      return { selections: newSelections }
    }),
  resetSelections: () => 
    set({
      selections: [
        { first: "", second: "" },
        { first: "", second: "" },
        { first: "", second: "" }
      ],
      isCorrect: null
    }),
  setCorrect: (isCorrect: boolean) => set({ isCorrect })
})) 