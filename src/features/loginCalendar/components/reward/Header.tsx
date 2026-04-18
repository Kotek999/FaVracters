import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Codzienne Nagrody</Text>
      <Text style={styles.subtitleText}>
        Zaloguj się codziennie, aby odebrać bonusy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",
    color: colors.white,
    fontFamily: fonts.semibold,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.semibold,
  },
});
