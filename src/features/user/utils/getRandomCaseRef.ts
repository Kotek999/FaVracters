import { CASES_LIST } from "@/features/caseOpening/config/cases";
import { CaseRef } from "@/features/caseOpening/config/types";

export const getRandomCaseRef = (): CaseRef => {
  const item = CASES_LIST[Math.floor(Math.random() * CASES_LIST.length)];

  if (item.category === "movie") {
    return {
      category: item.category,
      caseId: item.caseId,
    };
  }

  return {
    category: item.category,
    caseId: item.caseId,
  };
};
