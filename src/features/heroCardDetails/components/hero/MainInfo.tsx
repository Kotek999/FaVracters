import { View, StyleSheet } from "react-native";
import { InfoTile } from "./InfoTile";
import { getHeroInfoConfig } from "@/features/heroCardDetails/utils/getHeroInfoConfig";
import { HeroInfoConfigProps as MainInfoProps } from "@/features/heroCardDetails/types";
import { IconName } from "@/types/global";

export const MainInfo = ({
  cardClass,
  cardRarity,
  cardOrigin,
  cardFaction,
}: MainInfoProps) => {
  const tiles = getHeroInfoConfig({
    cardClass,
    cardRarity,
    cardOrigin,
    cardFaction,
  });

  return (
    <View style={styles.infoContainer}>
      {tiles.map((item) => (
        <InfoTile
          key={item.icon + item.value}
          icon={item.icon as IconName}
          value={item.value}
          color={item.color}
          cardRarity={cardRarity}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginVertical: 5,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
