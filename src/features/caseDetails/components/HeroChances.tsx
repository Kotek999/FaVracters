import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { HeroChancesRowProps } from "../types";

export const HeroChances = ({ rarity, item }: HeroChancesRowProps) => {
  const color = item.rarity === "legendary" ? colors.primary : colors.white;

  return (
    <View style={styles.chanceContainer}>
      <Text
        style={{
          ...styles.chanceText,
          color: color,
        }}
      >
        {rarity.chance}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chanceContainer: {
    flexShrink: 1,
    maxWidth: "50%",
  },
  chanceText: {
    color: colors.textGray,
    fontSize: 18,
    fontFamily: fonts.semibold,
    flexWrap: "wrap",
  },
});
