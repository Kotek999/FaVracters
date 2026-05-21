import { View, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { HeroImageCardContent } from "./HeroImageCardContent";
import { rarityColor } from "@/features/caseOpening/consts";
import { DroppedCardProps } from "@/features/caseOpening/types";

export const DroppedCard = ({ winner }: DroppedCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          ...styles.imageContainer,
          borderColor: rarityColor[winner.rarity],
          shadowColor: rarityColor[winner.rarity],
        }}
      >
        <HeroImageCardContent winner={winner} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth - 50,
    height: screenHeight / 1.5,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    shadowOpacity: 0.9,
    shadowRadius: 16,
    elevation: 20,
    transform: [{ scale: 0.95 }],
  },
});
