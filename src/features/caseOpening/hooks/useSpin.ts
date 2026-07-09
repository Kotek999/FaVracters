import { useMemo, useState } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
} from "react-native-reanimated";
import { generateStrip } from "../utils/generateStrip";
import { screenWidth } from "@/utils/dimensions";
import { FULL_WIDTH, ITEM_WIDTH } from "../consts";
import { useToastActions } from "@/hooks/useToastActions";
import { collectionStore } from "@/features/collection/store/collectionStore";
import { PLAYER_XP_FROM_CARD } from "@/systems/progression/playerXp";
import { userStore } from "@/features/user/store/userStore";
import { getRandomFromPool } from "../utils/getRandomFromPool";
import { Character, Stage, SpinProps } from "../types";

export const useSpin = ({ items, pools, getRarity, onWin }: SpinProps) => {
  const [stage, setStage] = useState<Stage>("spin");
  const [strip, setStrip] = useState<Character[]>([]);
  const [winner, setWinner] = useState<Character | null>(null);

  const { newHeroCard } = useToastActions();
  const tx = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: tx.value }],
  }));

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
    newHeroCard({ result, item, playerXp });
  };

  const handleOpenAgain = () => {
    tx.value = 0;
    setStage("spin");
    setWinner(null);
    spin();
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

  return {
    style,
    stage,
    strip,
    winner,
    spin,
    getWinner,
    handleOpenAgain,
  };
};
