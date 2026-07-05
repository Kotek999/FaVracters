import { View, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { Footer } from "./Footer";
import { CardLockedProps } from "@/features/collection/types";

export const CardLocked = ({ imageSource, cardRarity }: CardLockedProps) => {
  return (
    <>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Footer cardName="Nieznany" cardRarity={cardRarity} />
      <View style={styles.lockedOverlayContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="lock" size={28} color={colors.disabled} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  lockedOverlayContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlayDark,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: colors.backgroundDarkGreen,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
});
