import { StyleSheet, View } from "react-native";
import { Card } from "./Card";
import { CollectionProps } from "../../types";

export const Collection = ({ stats, highestCardRarity }: CollectionProps) => {
  const highestRarity: string =
    highestCardRarity === null ? "Brak" : highestCardRarity;

  return (
    <>
      <View style={styles.container}>
        {stats.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </View>
      <Card
        icon="trophy-variant"
        fullWidth
        value={highestRarity}
        label="Najwyższa rzadkość"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
