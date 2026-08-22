import CaseOpeningWithPreRoll from "./CaseOpeningWithPreRoll";
import { useLocalSearchParams } from "expo-router";
import { getCase } from "../utils/getCase";
import {
  CaseCategory,
  CaseRef,
  CaseId,
} from "@/features/caseOpening/config/types";

export const CaseSpin = () => {
  const { category, caseId } = useLocalSearchParams<{
    category?: CaseCategory;
    caseId?: string;
  }>();

  if (!category || !caseId) {
    return null;
  }

  const config = getCase(category, caseId);

  if (!config) {
    return null;
  }

  const caseRef: CaseRef = {
    category,
    caseId: caseId as CaseId<typeof category>,
  };

  return <CaseOpeningWithPreRoll caseRef={caseRef} items={config.pool} />;
};
