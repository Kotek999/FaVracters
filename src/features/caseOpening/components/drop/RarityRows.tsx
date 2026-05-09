import React from "react";
import { View, StyleSheet } from "react-native";
import { RARITIES_DATA } from "../../data/raritiesData";
import { RarityRow as DropRarityRow } from "./RarityRow";
import { chunkArray } from "../../utils/chunkArray";

export const RarityRows = () => {
  const rows = chunkArray(RARITIES_DATA, 2);

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item) => (
            <DropRarityRow key={item.key} item={item} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    paddingVertical: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
});
