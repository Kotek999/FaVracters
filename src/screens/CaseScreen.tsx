import { CaseOpeningWithPreRoll } from "@/features/caseOpening";
import { characters } from "@/data/characters";

export default function CaseScreen() {
  return <CaseOpeningWithPreRoll items={characters} />;
}
