import { getRandomCaseRef } from "./getRandomCaseRef";
import { updateCaseAmount } from "@/features/caseOpening/utils/updateCaseAmount";
import { CasesState } from "@/features/caseOpening/config/types";

export const addRandomCases = (
  cases: CasesState,
  amount: number,
): CasesState => {
  let updatedCases = cases;

  for (let i = 0; i < amount; i++) {
    const caseRef = getRandomCaseRef();
    updatedCases = updateCaseAmount(updatedCases, caseRef, 1);
  }
  return updatedCases;
};
