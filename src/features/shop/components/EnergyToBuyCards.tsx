import { View, StyleSheet, Alert } from "react-native";
import { EnergyToBuyCard } from "./EnergyToBuyCard";

export const EnergyToBuyCards = () => {
  return (
    <View style={styles.cardsContainer}>
      <EnergyToBuyCard
        iconName="cube"
        value={300}
        description="Basic pack"
        price="$0.99"
        onPress={() => Alert.alert("Basic pack clicked...")}
      />
      <EnergyToBuyCard
        iconName="sack"
        value={720}
        description="+20% Bonus"
        price="$4.99"
        onPress={() => Alert.alert("Large pack with bonus clicked...")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
