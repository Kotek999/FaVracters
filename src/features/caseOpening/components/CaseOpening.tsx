import React, { useMemo, useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
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
import { collectionStore } from "@/features/collection/store/collectionStore";
import { AppScrollView } from "@/components/layout/AppScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import { PLAYER_XP_FROM_CARD } from "@/systems/progression/playerXp";
import { userStore } from "@/features/user/store/userStore";
import { showToastMessageInfo } from "@/components/ui/utils/showToastMessageInfo";
import { getRandomFromPool } from "../utils/getRandomFromPool";
import { CaseOpeningProps, Character, Stage } from "../types";

export const CaseOpening = ({
  items,
  pityChance,
  getRarity,
  onWin,
  onReset = () => {},
  autoSpin,
}: CaseOpeningProps) => {
  const [stage, setStage] = useState<Stage>("spin");
  const [strip, setStrip] = useState<Character[]>([]);
  const [winner, setWinner] = useState<Character | null>(null);

  const pools = useMemo(() => groupByRarity(items), [items]);

  const tx = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: tx.value }],
  }));

  const handleWin = (item: Character) => {
    setWinner(item);
    setStage("result");
    onWin?.(item);

    userStore.getState().addActivity({
      type: "HERO_UNLOCK",
      heroName: item.name,
      rarity: item.rarity,
      createdAt: Date.now(),
    });

    const result = collectionStore
      .getState()
      .addDuplicate(item.id, item.rarity);

    const playerXp = PLAYER_XP_FROM_CARD[item.rarity];
    userStore.getState().addXp(playerXp);

    if (result.isNew) {
      showToastMessageInfo(
        "Nowa karta!",
        `${item.name} dodana do kolekcji\nLevel ${result.currentLevel}`,
      );
    } else {
      showToastMessageInfo(
        "Duplikat!",
        `+${result.xpGained} XP\n+${playerXp} player XP`,
      );
    }
  };

  const handleOpenAgain = () => {
    tx.value = 0;
    setStage("spin");
    setWinner(null);
    spin();
  };

  const allItems = useMemo(() => {
    const result: Character[] = [];

    result.push(...pools.common);
    result.push(...pools.rare);
    result.push(...pools.epic);
    result.push(...pools.legendary);

    return result;
  }, [pools]);

  const getWinner = () => {
    const pool = pools[getRarity()];

    const primary = getRandomFromPool(pool);
    if (primary) return primary;

    return getRandomFromPool(allItems);
  };

  const spin = () => {
    const finalWinner = getWinner();
    if (!finalWinner) return;

    const { strip, winnerIndex } = generateStrip(
      items,
      finalWinner,
      pools.legendary,
    );

    setStrip(strip);
    const target = winnerIndex * FULL_WIDTH + ITEM_WIDTH / 2 - screenWidth / 2;

    tx.value = withTiming(
      -target,
      { duration: 4500, easing: Easing.out(Easing.cubic) },
      () => runOnJS(handleWin)(finalWinner),
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
        <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
          <AppScrollView>
            <ResultView
              winner={winner}
              pityChance={pityChance}
              onSpin={handleOpenAgain}
              onBack={onReset}
            />
          </AppScrollView>
        </SafeAreaView>
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
