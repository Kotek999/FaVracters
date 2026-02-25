import React, { useCallback } from "react";
import { CaseOpening } from "./CaseOpening";
import { PreRollView } from "./PreRollView";
import { usePitySystem } from "../hooks/usePitySystem";
import { usePreRollAnimation } from "../hooks/usePreRollAnimation";
import { MOVE } from "../consts";
import type { CaseItem, CaseOpeningWithPreRollProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppScrollView } from "@/components/layout/AppScrollView";

export default function CaseOpeningWithPreRoll({
  items,
  onWin,
}: CaseOpeningWithPreRollProps) {
  const source = require("@/assets/images/image_example_2.png");

  const pity = usePitySystem();
  const preRoll = usePreRollAnimation(MOVE);

  const handleWin = useCallback(
    (item: CaseItem) => {
      pity.registerWin(item);
      onWin?.(item);
    },
    [pity, onWin],
  );

  if (!preRoll.visible) {
    return (
      <CaseOpening
        items={items}
        pityChance={pity.pityChance}
        getRarity={pity.getRarity}
        onWin={handleWin}
        autoSpin
        onReset={preRoll.reset}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <AppScrollView>
        <PreRollView
          source={source}
          styleTL={preRoll.styleTL}
          styleTR={preRoll.styleTR}
          styleBL={preRoll.styleBL}
          styleBR={preRoll.styleBR}
          onOpen={preRoll.animate}
        />
      </AppScrollView>
    </SafeAreaView>
  );
}
