import { View, StyleSheet } from "react-native";
import { HeroImage } from "./HeroImage";
import { HeroDescription } from "./HeroDescription";
import { HeroChances } from "./HeroChances";
import { HeroChancesRowProps } from "../types";

export const HeroChancesRow = ({ rarity, item }: HeroChancesRowProps) => {
  return (
    <View style={styles.mainContainer}>
      <HeroImage rarity={rarity} item={item} />
      <HeroDescription rarity={rarity} item={item} />
      <HeroChances rarity={rarity} item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
