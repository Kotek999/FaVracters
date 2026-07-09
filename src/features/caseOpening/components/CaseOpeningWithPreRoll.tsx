import React, { useCallback } from "react";
import { Images } from "@/assets/images/characters";
import { CaseOpening } from "./CaseOpening";
import { PreRollView } from "./PreRollView";
import { usePitySystem } from "../hooks/usePitySystem";
import { usePreRollAnimation } from "../hooks/usePreRollAnimation";
import { MOVE } from "../consts";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import type { Character, CaseOpeningWithPreRollProps } from "../types";

export default function CaseOpeningWithPreRoll({
  items,
  onWin,
}: CaseOpeningWithPreRollProps) {
  const pity = usePitySystem();
  const preRoll = usePreRollAnimation(MOVE);

  const handleWin = useCallback(
    (item: Character) => {
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
    <SafeAreaWithScrollView edges={["top", "bottom"]}>
      <PreRollView
        source={Images.case}
        styleTL={preRoll.styleTL}
        styleTR={preRoll.styleTR}
        styleBL={preRoll.styleBL}
        styleBR={preRoll.styleBR}
        onOpen={preRoll.animate}
      />
    </SafeAreaWithScrollView>
  );
}
