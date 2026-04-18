import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/colors";

export const CheckmarkIcon = ({ isClaimed }: { isClaimed: boolean }) => {
  return (
    <>
      {isClaimed && (
        <View style={styles.checkWrapper}>
          <LinearGradient
            colors={[colors.textLightLime, colors.backgroundLightGreen]}
            style={styles.checkContainer}
          >
            <Ionicons name="checkmark" size={20} color={colors.white} />
          </LinearGradient>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  checkWrapper: {
    position: "absolute",
    top: -8,
    right: -8,
  },
  checkContainer: {
    width: 28,
    height: 28,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});
