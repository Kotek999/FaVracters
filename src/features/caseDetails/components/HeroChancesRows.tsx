import { View, StyleSheet } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { colors } from "@/theme/colors";
import { BlurView } from "expo-blur";
import { HeroChancesRow } from "./HeroChancesRow";
import { LOW_RARITIES } from "../utils/lowRarities";
import { getRarity } from "../utils/getRarity";
import { sortedHeroes } from "../utils/sortedHeroes";

export const HeroChancesRows = () => {
  const heroes = sortedHeroes;

  return (
    <View style={styles.mainContainer}>
      {heroes.map((item) => {
        const rarity = getRarity(item.rarity);
        const backgroundColor = LOW_RARITIES.includes(item.rarity)
          ? colors.backgroundPrimary
          : colors.backgroundDarkBlue;

        return (
          <View
            key={item.id}
            style={{
              ...styles.rowsContainer,
              opacity: rarity.opacity,
            }}
          >
            <BlurView
              intensity={8}
              tint="light"
              style={{
                ...styles.blurContainer,
                backgroundColor: backgroundColor,
              }}
            >
              <HeroChancesRow rarity={rarity} item={item} />
            </BlurView>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  rowsContainer: {
    width: screenWidth - 50,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  blurContainer: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 10,
    borderColor: colors.borderSecondary,
  },
});
