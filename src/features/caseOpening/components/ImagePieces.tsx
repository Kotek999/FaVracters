import React from "react";
import Animated from "react-native-reanimated";
import { View, Image, StyleSheet } from "react-native";
import { BOX_SIZE } from "../consts";
import { ImagePiecesProps } from "../types";

export const ImagePieces = ({
  styleTL,
  styleTR,
  styleBL,
  styleBR,
  source,
}: ImagePiecesProps) => {
  const pieces = [
    { key: "tl", style: styleTL, tx: 0, ty: 0 },
    { key: "tr", style: styleTR, tx: -BOX_SIZE / 2, ty: 0 },
    { key: "bl", style: styleBL, tx: 0, ty: -BOX_SIZE / 2 },
    { key: "br", style: styleBR, tx: -BOX_SIZE / 2, ty: -BOX_SIZE / 2 },
  ] as const;

  return (
    <View style={styles.mainContainer}>
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
  );
};

const styles = StyleSheet.create({
  mainContainer: {
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
});
