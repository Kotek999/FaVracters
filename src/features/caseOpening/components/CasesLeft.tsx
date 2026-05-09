import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { PrimaryCaseProps as CasesLeftProps } from "../types";

export const CasesLeft = ({ cases }: CasesLeftProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.leftText}>Pozostało</Text>
      <View style={styles.container}>
        <Text style={styles.casesCountText}>{cases}</Text>
        <MaterialCommunityIcons
          name="treasure-chest"
          size={26}
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    gap: 5,
  },
  leftText: {
    fontSize: 16,
    textAlign: "center",
    color: colors.white,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  casesCountText: {
    marginTop: -5,
    fontSize: 26,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
  },
});
