import { Text } from "@ui-kitten/components";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { screenWidth, screenHeight } from "@/utils/dimensions";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { dailyHeroItem } from "../utils/dailyHeroItem";
import { ImageWithGradient } from "@/components/layout/ImageWithGradient";
import { useDailyHero } from "../hooks/useDailyHero";
import { DailyHeroDescriptionWithButton } from "./DailyHeroDescriptionWithButton";

export const DailyHero = () => {
  const { dailyHeroConfig, onPressGoToScreen, isHeroOwned } = useDailyHero();

  const source: ImageSourcePropType = require("@/assets/images/image_example_3.png");

  return (
    <ImageWithGradient
      source={isHeroOwned ? { uri: dailyHeroItem.image } : source}
      style={styles.imageContainer}
      gradientColors={[colors.blank, colors.opacityDark]}
      gradientStyle={styles.gradientContainer}
    >
      <View style={styles.mainContainer}>
        {isHeroOwned && (
          <View style={styles.ownedBadgeContainer}>
            <Text style={styles.ownedBadgeText}>Posiadasz</Text>
          </View>
        )}

        <DailyHeroDescriptionWithButton
          dailyHeroConfig={dailyHeroConfig}
          onPressGoToScreen={onPressGoToScreen}
        />
      </View>
    </ImageWithGradient>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth - 35,
    height: screenHeight / 2,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  gradientContainer: {
    position: "absolute",
    width: screenWidth - 35,
    height: screenHeight / 2,
    padding: 20,
    borderRadius: 20,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  ownedBadgeContainer: {
    position: "absolute",
    top: 1,
    left: -5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundDarkGreen,
  },
  ownedBadgeText: {
    color: colors.textLightLime,
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 0.8,
    fontFamily: fonts.medium,
  },
});
