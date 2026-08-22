import React from "react";
import Animated from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { Card } from "./Card";
import { ResultView } from "./ResultView";
import { screenWidth } from "@/utils/dimensions";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { useCaseSpin } from "../hooks/useCaseSpin";
import { CaseOpeningProps } from "../types";

export const CaseOpening = ({
  caseRef,
  items,
  pityChance,
  getRarity,
  onWin,
  onReset = () => {},
  autoSpin,
}: CaseOpeningProps) => {
  const { stage, strip, winner, style, handleOpenAgain } = useCaseSpin({
    items,
    getRarity,
    onWin,
    autoSpin,
  });

  return (
    <View style={styles.container}>
      {stage === "spin" && (
        <View style={styles.viewPort}>
          <Animated.View style={[{ flexDirection: "row" }, style]}>
            {strip.map((i, idx) => (
              <Card key={idx} item={i} />
            ))}
          </Animated.View>
          <View style={styles.marker} />
        </View>
      )}
      {stage === "result" && winner && (
        <SafeAreaWithScrollView edges={["top", "bottom"]}>
          <ResultView
            caseRef={caseRef}
            winner={winner}
            pityChance={pityChance}
            onSpin={handleOpenAgain}
            onBack={onReset}
          />
        </SafeAreaWithScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  viewPort: {
    height: 140,
    width: "100%",
    overflow: "hidden",
  },
  marker: {
    position: "absolute",
    left: screenWidth / 2 - 2,
    width: 4,
    height: "100%",
    backgroundColor: "gold",
    zIndex: 10,
  },
});
