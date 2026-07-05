import { View, Image, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { rarityColor } from "@/features/caseOpening/consts";
import { CardImageProps } from "@/features/heroCardDetails/types";

export const CardImage = ({ cardRarity, cardImage }: CardImageProps) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          ...styles.cardContainer,
          borderColor: rarityColor[cardRarity],
          shadowColor: rarityColor[cardRarity],
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={cardImage} style={styles.image} resizeMode="cover" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  cardContainer: {
    width: screenWidth / 1.4,
    height: screenHeight / 2,
    aspectRatio: 0.8,
    borderRadius: 30,
    borderWidth: 2,
    shadowOpacity: 0.9,
    shadowRadius: 16,
    elevation: 20,
    transform: [{ scale: 0.98 }],
  },
  imageContainer: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: colors.opacityDark,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 28,
    width: "100%",
    height: "100%",
  },
});
