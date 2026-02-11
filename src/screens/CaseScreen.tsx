import { View } from "react-native";
import { CaseOpeningWithPreRoll } from "../features/caseOpening";
import { characters } from "../data/characters";

export default function CaseScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CaseOpeningWithPreRoll items={characters} />
    </View>
  );
}
