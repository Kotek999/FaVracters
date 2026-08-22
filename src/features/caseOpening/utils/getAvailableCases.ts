import { CASES_LIST } from "../config/cases";
import { CasesState } from "../config/types";
import { getCaseAmount } from "./getCaseAmount";

export const getAvailableCases = (cases: CasesState) =>
  CASES_LIST.filter((item) => getCaseAmount(cases, item) > 0);
