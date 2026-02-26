import { characters } from "@/data/characters";
import { CaseOpeningWithPreRoll } from "@/features/caseOpening";

export default function Spin() {
  return <CaseOpeningWithPreRoll items={characters} />;
}
