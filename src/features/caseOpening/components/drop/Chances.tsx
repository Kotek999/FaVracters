import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { RarityRows as DropRarityRows } from "./RarityRows";

export const Chances = () => {
  const onPressRedirectToCaseDetailsScreen = () =>
    router.push("/case-details-test");

  return (
    <View style={styles.mainContainer}>
      <BlurView intensity={7} tint="light" style={styles.blurContainer}>
        <View style={styles.container}>
          <Text style={styles.dropItemTitleText}>Możliwa zawartość</Text>
          <TouchableOpacity onPress={onPressRedirectToCaseDetailsScreen}>
            <MaterialCommunityIcons
              color={colors.secondary}
              size={20}
              name="information"
            />
          </TouchableOpacity>
        </View>
        <DropRarityRows />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth - 40,
    justifyContent: "center",
    borderRadius: 16,
  },
  blurContainer: {
    height: screenHeight / 3.4,
    overflow: "hidden",
    padding: 25,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderRadius: 40,
    backgroundColor: colors.backgroundBlur,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  container: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropItemTitleText: {
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
    color: colors.textGray,
    fontFamily: fonts.medium,
    textTransform: "uppercase",
  },
});
