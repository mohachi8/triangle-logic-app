import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProblemStore = {
  selectedProblemId: number | null;
  setSelectedProblemId: (id: number) => void;
};

export const useProblemStore = create<ProblemStore>()(
  persist(
    (set) => ({
      selectedProblemId: null,
      setSelectedProblemId: (id) => set({ selectedProblemId: id }),
    }),
    {
      name: "problem-store",
      partialize: (state) => ({ selectedProblemId: state.selectedProblemId }),
    }
  )
);
