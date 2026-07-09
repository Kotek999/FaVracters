import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { screenWidth } from "@/utils/dimensions";
import { TOAST_VARIANTS } from "./ToastConfig";
import { ToastProps } from "../types";

export const Toast = memo(({ text1, text2, variant }: ToastProps) => {
  const variantConfig = TOAST_VARIANTS[variant];

  return (
    <View
      style={[
        styles.mainContainer,
        { borderTopColor: variantConfig.borderColor },
      ]}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={variantConfig.icon}
          size={26}
          color={variantConfig.iconColor}
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
    backgroundColor: colors.backgroundDarkGreen,
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderTopWidth: 6,
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
