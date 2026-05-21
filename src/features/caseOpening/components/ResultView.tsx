import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { DroppedCard } from "./drop/DroppedCard";
import { ResultActionButtons } from "./drop/ResultActionButtons";
import { ResultViewProps } from "@/features/caseOpening/types";

export const ResultView = ({ winner, onSpin, onBack }: ResultViewProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Wylosowano kartę</Text>
      <DroppedCard winner={winner} />
      <ResultActionButtons winner={winner} onSpin={onSpin} onBack={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.semibold,
    letterSpacing: 4,
    textTransform: "uppercase",
  },
});
