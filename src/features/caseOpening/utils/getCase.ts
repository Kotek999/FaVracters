import { CASES } from "@/features/caseOpening/config/cases";
import { CaseCategory } from "@/features/caseOpening/config/types";

export const getCase = (category: CaseCategory, caseId: string) => {
  return CASES[category].cases[
    caseId as keyof (typeof CASES)[typeof category]["cases"]
  ];
};
