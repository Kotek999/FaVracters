import { getCase } from "./getCase";
import { CaseType } from "@/features/caseOpening/config/types";

export const getCasePool = (category: CaseType, caseId: string) => {
  return getCase(category, caseId)?.pool ?? [];
};
