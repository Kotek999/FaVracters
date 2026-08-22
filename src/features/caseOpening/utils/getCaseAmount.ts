import { CasesState, CaseRef } from "@/features/caseOpening/config/types";

export const getCaseAmount = (cases: CasesState, ref: CaseRef): number => {
  if (ref.category === "movie") {
    return cases.movie[ref.caseId];
  }
  return cases.game[ref.caseId];
};
