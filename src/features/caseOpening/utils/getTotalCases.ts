import { CasesState } from "@/features/caseOpening/config/types";

export const getTotalCases = (cases: CasesState): number => {
  return Object.values(cases).reduce(
    (total, categoryCases) =>
      total +
      Object.values(categoryCases).reduce((sum, amount) => sum + amount, 0),
    0,
  );
};
