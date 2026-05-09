import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { ImagePieces } from "./ImagePieces";
import { ChancesWithButtonItem as DropChancesWithButtonItem } from "./drop/ChancesWithButtonItem";
import { PreRollViewProps } from "../types";

export const PreRollView = memo(function PreRollView({
  source,
  styleTL,
  styleTR,
  styleBL,
  styleBR,
  onOpen,
}: PreRollViewProps) {
  return (
    <View style={styles.mainContainer}>
      <ImagePieces
        styleTL={styleTL}
        styleTR={styleTR}
        styleBL={styleBL}
        styleBR={styleBR}
        source={source}
      />
      <DropChancesWithButtonItem onOpen={onOpen} />
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
