import React, { useMemo, useState, useEffect, useRef } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
} from "react-native-reanimated";
import { groupByRarity } from "../utils/groupByRarity";
import { generateStrip } from "../utils/generateStrip";
import { Card } from "./Card";
import { ResultView } from "./ResultView";
import { screenWidth } from "@/utils/dimensions";
import { FULL_WIDTH, ITEM_WIDTH } from "../consts";
import type { CaseOpeningProps, CaseItem, Stage } from "../types";
import { useCollectionStore } from "@/store/hooks/useCollectionStore";

export const CaseOpening = ({
  items,
  pityChance,
  getRarity,
  onWin,
  onReset = () => {},
  autoSpin,
}: CaseOpeningProps) => {
  const [stage, setStage] = useState<Stage>("spin");
  const [strip, setStrip] = useState<CaseItem[]>([]);
  const [winner, setWinner] = useState<CaseItem | null>(null);

  const pools = useMemo(() => groupByRarity(items), [items]);

  const tx = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: tx.value }],
  }));

  const addItem = useCollectionStore((state) => state.addItem);

  const handleWin = (item: CaseItem) => {
    setWinner(item);
    setStage("result");
    onWin?.(item);

    const result = addItem(item.id);

    if (result.isDuplicate) {
      Alert.alert("Duplikat!", `Masz już ${result.count - 1} kopii`);
    } else {
      Alert.alert("Nowa karta!", "Dodano do kolekcji");
    }
  };

  const handleOpenAgain = () => {
    tx.value = 0;
    setStage("spin");
    setWinner(null);
    spin();
  };

  const spin = () => {
    const rarity = getRarity();
    const pool = pools[rarity];

    const winnerItem = pool[Math.floor(Math.random() * pool.length)];

    const { strip, winnerIndex } = generateStrip(
      items,
      winnerItem,
      pools.legendary,
    );

    setStrip(strip);

    const target = winnerIndex * FULL_WIDTH + ITEM_WIDTH / 2 - screenWidth / 2;

    tx.value = withTiming(
      -target,
      { duration: 4500, easing: Easing.out(Easing.cubic) },
      () => runOnJS(handleWin)(winnerItem),
    );
  };

  const didAutoSpin = useRef(false);

  useEffect(() => {
    if (autoSpin && !didAutoSpin.current) {
      didAutoSpin.current = true;
      spin();
    }
  }, [autoSpin, spin]);

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
        <ResultView
          winner={winner}
          pityChance={pityChance}
          onSpin={handleOpenAgain}
          onBack={onReset}
        />
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
