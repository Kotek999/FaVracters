import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";

export const CardNotFound = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Karta nie została znaleziona</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.medium,
  },
});
