import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { capitalize } from "@/utils/capitalize";
import { HeroChancesRowProps } from "../types";

export const HeroDescription = ({ rarity, item }: HeroChancesRowProps) => {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.descriptionContentContainer}>
        <View
          style={{
            ...styles.dot,
            backgroundColor: rarity.color,
          }}
        />
        <View>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.descriptionText}>
            {capitalize(item.rarity)} • {item.id}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    marginRight: 8,
  },
  descriptionContentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  dot: {
    marginTop: 8,
    width: 8,
    height: 8,
    borderRadius: 999,
  },
  titleText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.semibold,
  },
  descriptionText: {
    color: colors.textLightGray,
    fontSize: 13,
    fontFamily: fonts.medium,
  },
});
