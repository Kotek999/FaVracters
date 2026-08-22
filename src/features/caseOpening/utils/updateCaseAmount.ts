import { CasesState, CaseRef } from "@/features/caseOpening/config/types";

export function updateCaseAmount(
  cases: CasesState,
  caseRef: CaseRef,
  amount: number,
): CasesState {
  if (caseRef.category === "movie") {
    return {
      ...cases,
      movie: {
        ...cases.movie,
        [caseRef.caseId]: cases.movie[caseRef.caseId] + amount,
      },
    };
  }
  return {
    ...cases,
    game: {
      ...cases.game,
      [caseRef.caseId]: cases.game[caseRef.caseId] + amount,
    },
  };
}
