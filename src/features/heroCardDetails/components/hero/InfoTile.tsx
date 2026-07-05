import { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { rarityColor } from "@/features/caseOpening/consts";
import { InfoTileProps } from "@/features/heroCardDetails/types";

export const InfoTile = memo(
  ({ icon, value, color, cardRarity }: InfoTileProps) => {
    return (
      <View style={styles.mainContainer}>
        <BlurView
          intensity={8}
          tint="light"
          style={{
            ...styles.blurContainer,
            borderColor: rarityColor[cardRarity],
          }}
        >
          <View style={styles.infoTileContainer}>
            <MaterialCommunityIcons name={icon} size={18} color={color} />
            <Text style={styles.infoTileText}>{value}</Text>
          </View>
        </BlurView>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  mainContainer: {
    flexBasis: "48%",
    flexGrow: 1,
  },
  blurContainer: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.backgroundBlur,
    borderWidth: 0,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    paddingHorizontal: 10,
  },
  infoTileContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  infoTileText: {
    fontSize: 11,
    letterSpacing: 0.5,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
    color: colors.textGray,
    textShadowColor: colors.opacityDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});
