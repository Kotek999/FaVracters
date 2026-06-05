import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "@/components/ui/ProgressBar/ProgressBar";
import { colors } from "@/theme/colors";
import { useCollectionStore } from "@/features/collection/store/useCollectionStore";
import { TOTAL_CARDS } from "@/systems/progression/card";
import { fonts } from "@/theme/fonts";

export const CardsProgress = () => {
  const { ownedCardsCount } = useCollectionStore();

  const progress = ownedCardsCount / TOTAL_CARDS;
  const cardsCount = `${ownedCardsCount} / ${TOTAL_CARDS}`;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Postęp kart</Text>
        <Text style={styles.progressText}>{cardsCount}</Text>
      </View>
      <ProgressBar
        height={8}
        progress={progress}
        colors={[colors.backgroundDarkGreen, colors.secondary]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: {
    fontSize: 14,
    textAlign: "center",
    color: colors.textGray,
    fontFamily: fonts.medium,
    textTransform: "uppercase",
  },
});
