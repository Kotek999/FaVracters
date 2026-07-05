import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Stars } from "./Stars";
import { CardNameWithStarsProps } from "@/features/heroCardDetails/types";

export const CardNameWithStarsAndLevel = ({
  cardName,
  cardLevel,
  cardStars,
}: CardNameWithStarsProps) => {
  return (
    <View style={styles.mainInfoContainer}>
      <Text style={styles.mainInfoText}>{cardName}</Text>
      <Text style={styles.cardLevelText}>Poziom {cardLevel}</Text>
      <Stars stars={cardStars} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainInfoContainer: {
    marginVertical: 10,
    gap: 5,
  },
  mainInfoText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  cardLevelText: {
    fontSize: 18,
    textAlign: "center",
    color: colors.backgroundLightGreen,
    fontFamily: fonts.bold,
    textTransform: "uppercase",
    textShadowColor: colors.opacityDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});
