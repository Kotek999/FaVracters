import React, { memo } from "react";
import Animated from "react-native-reanimated";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import { BOX_SIZE } from "../consts";
import type { PreRollViewProps } from "../types";

export const PreRollView = memo(function PreRollView({
  source,
  styleTL,
  styleTR,
  styleBL,
  styleBR,
  onOpen,
}: PreRollViewProps) {
  const pieces = [
    { key: "tl", style: styleTL, tx: 0, ty: 0 },
    { key: "tr", style: styleTR, tx: -BOX_SIZE / 2, ty: 0 },
    { key: "bl", style: styleBL, tx: 0, ty: -BOX_SIZE / 2 },
    { key: "br", style: styleBR, tx: -BOX_SIZE / 2, ty: -BOX_SIZE / 2 },
  ] as const;

  return (
    <View style={styles.center}>
      <View style={styles.box}>
        {pieces.map((p) => (
          <Animated.View key={p.key} style={[styles.piece, p.style]}>
            <Image
              source={source}
              style={[
                styles.image,
                { transform: [{ translateX: p.tx }, { translateY: p.ty }] },
              ]}
            />
          </Animated.View>
        ))}
      </View>

      <Pressable style={styles.button} onPress={onOpen}>
        <Text style={styles.text}>Open</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },

  piece: {
    width: BOX_SIZE / 2,
    height: BOX_SIZE / 2,
    overflow: "hidden",
  },

  image: {
    width: BOX_SIZE,
    height: BOX_SIZE,
  },

  button: {
    marginTop: 20,
    paddingHorizontal: 24,
    height: 48,
    backgroundColor: "#333",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontWeight: "600",
  },
});
