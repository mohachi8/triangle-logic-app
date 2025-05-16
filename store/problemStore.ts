import { create } from "zustand";

type ProblemStore = {
  selectedProblemId: number | null;
  setSelectedProblemId: (id: number) => void;
};

export const useProblemStore = create<ProblemStore>((set) => ({
  selectedProblemId: null,
  setSelectedProblemId: (id) => set({ selectedProblemId: id }),
})); 