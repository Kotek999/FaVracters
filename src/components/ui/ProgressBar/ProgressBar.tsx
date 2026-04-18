import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBarProps } from "../types";

export const ProgressBar = ({
  progress,
  height = 4,
  colors,
}: ProgressBarProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ ...styles.container, height: height }}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            ...styles.gradient,
            width: `${progress * 100}%`,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  container: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    borderRadius: 999,
    overflow: "hidden",
  },
  gradient: {
    height: "100%",
    borderRadius: 999,
  },
});
