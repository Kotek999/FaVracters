import { characters } from "@/data/characters";
import CaseOpeningWithPreRoll from "./CaseOpeningWithPreRoll";

export const CaseSpin = () => {
  return <CaseOpeningWithPreRoll items={characters} />;
};
