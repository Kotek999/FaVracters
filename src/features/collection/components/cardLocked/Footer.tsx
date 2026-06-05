import { View, StyleSheet } from "react-native";
import { screenHeight } from "@/utils/dimensions";
import { colors } from "@/theme/colors";
import { HeroInfo } from "../HeroInfo";
import { FooterProps } from "@/features/collection/types";

export const Footer = ({ cardName, cardRarity }: FooterProps) => {
  return (
    <View style={styles.footerPositionContainer}>
      <HeroInfo cardName={cardName} cardRarity={cardRarity} isLevel={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerPositionContainer: {
    backgroundColor: colors.borderPrimary,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: screenHeight / 11,
    justifyContent: "center",
  },
});
