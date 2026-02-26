import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import type { ResultViewProps } from "../types";
import { rarityColor } from "../consts";
import { screenWidth } from "@/utils/dimensions";

export const ResultView = ({
  winner,
  pityChance,
  onSpin,
  onBack,
}: ResultViewProps) => {
  const isLegendary = winner.rarity === "legendary";
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        top: 50,
      }}
    >
      <Pressable onPress={onBack}>
        <Text>BACK</Text>
      </Pressable>
      <Pressable onPress={onSpin}>
        <Text>OPEN AGAIN</Text>
      </Pressable>

      <Text>Pity +{Math.round(pityChance * 100)}%</Text>
      <Text style={{ marginVertical: 40, color: "red" }}>jdwiodwkddw</Text>
      <Image
        source={{ uri: winner.image as string }}
        style={[
          styles.image,
          {
            borderColor: rarityColor[winner.rarity],
            ...(isLegendary && styles.glow),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth / 1.2,
    height: 500,
    borderRadius: 12,
    marginRight: 10,
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
