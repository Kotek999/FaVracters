import React, { memo } from "react";
import { StyleSheet, Image } from "react-native";
import { ITEM_WIDTH, ITEM_HEIGHT, ITEM_SPACING, rarityColor } from "../consts";
import { CaseItem } from "../types";

export const Card = memo(({ item }: { item: CaseItem }) => {
  const isLegendary = item.rarity === "legendary";

  return (
    <Image
      source={{ uri: item.image }}
      style={[
        styles.image,
        {
          borderColor: rarityColor[item.rarity],
          ...(isLegendary && styles.glow),
        },
      ]}
    />
  );
});

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 12,
    marginRight: ITEM_SPACING,
    borderWidth: 3,
  },
  glow: {
    shadowColor: "#f59e0b",
    shadowOpacity: 0.9,
    shadowRadius: 16,
    elevation: 12,
    transform: [{ scale: 1.05 }],
  },
});
