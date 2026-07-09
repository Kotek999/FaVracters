import { View, Text, StyleSheet } from "react-native";
import { rarityColor } from "@/features/caseOpening/consts";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { getRarityLabel } from "@/features/caseOpening/utils/getRarityLabel";
import { HeroInfoProps } from "../types";

export const HeroInfo = ({
  cardName,
  cardRarity,
  isLevel = true,
  cardLevel,
}: HeroInfoProps) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text
          style={{
            ...styles.cardRarityText,
            ...styles.shadowText,
            color: rarityColor[cardRarity],
          }}
        >
          {getRarityLabel(cardRarity)}
        </Text>
        <Text style={{ ...styles.cardNameText, ...styles.shadowText }}>
          {cardName}
        </Text>
        {isLevel && (
          <View style={styles.cardLevelContainer}>
            <Text
              style={{
                ...styles.cardLevelText,
                ...styles.shadowText,
              }}
            >
              Poziom {cardLevel}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowText: {
    fontFamily: fonts.bold,
    textShadowColor: colors.opacityDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  cardRarityText: {
    textAlign: "center",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  cardNameText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.5,
    marginTop: -3,
  },
  cardLevelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  cardLevelText: {
    marginVertical: 3,
    fontSize: 12,
    textAlign: "center",
    color: colors.backgroundLightGreen,
    fontFamily: fonts.bold,
    textTransform: "uppercase",
  },
});
