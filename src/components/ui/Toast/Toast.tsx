import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getBackgroundColor } from "./getBackgroundColor";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { screenWidth } from "@/utils/dimensions";
import { ToastProps } from "../types";

export const Toast = memo(({ text1, text2, variant }: ToastProps) => {
  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: getBackgroundColor(variant) },
      ]}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="treasure-chest-outline"
          size={26}
          color={colors.legendary}
        />

        <View>
          <Text style={styles.title}>{text1}</Text>
          {!!text2 && <Text style={styles.message}>{text2}</Text>}
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth - 30,
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderTopWidth: 6,
    borderTopColor: colors.primary,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  message: {
    color: colors.white,
    fontFamily: fonts.semibold,
    opacity: 0.9,
  },
});
