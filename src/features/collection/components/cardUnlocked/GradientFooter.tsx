import { StyleSheet, View } from "react-native";
import { colors } from "@/theme/colors";
import { screenHeight } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { HeroInfo } from "../HeroInfo";
import { GradientFooterProps } from "@/features/collection/types";

export const GradientFooter = ({
  cardRarity,
  cardName,
  cardLevel,
}: GradientFooterProps) => {
  return (
    <View style={styles.footerPositionContainer}>
      <LinearGradient
        colors={[colors.backgroundDarkGreen, colors.backgroundDarkBlue]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        style={styles.footerPositionContainer}
      >
        <HeroInfo
          cardName={cardName}
          cardRarity={cardRarity}
          cardLevel={cardLevel}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  footerPositionContainer: {
    borderTopWidth: 2,
    borderTopColor: colors.backgroundLightGreen,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: screenHeight / 11,
    justifyContent: "center",
  },
});
