import React, { useCallback } from "react";
import { CaseOpening } from "./CaseOpening";
import { PreRollView } from "./PreRollView";
import { usePitySystem } from "../hooks/usePitySystem";
import { usePreRollAnimation } from "../hooks/usePreRollAnimation";
import { getCase } from "../utils/getCase";
import { MOVE } from "../consts";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { Character } from "@/types/character.types";
import type { CaseOpeningWithPreRollProps } from "../types";

export default function CaseOpeningWithPreRoll({
  caseRef,
  items,
  onWin,
}: CaseOpeningWithPreRollProps) {
  const config = getCase(caseRef.category, caseRef.caseId);
  const pity = usePitySystem();
  const preRoll = usePreRollAnimation(MOVE);

  const source = config.image;

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
        caseRef={caseRef}
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
        caseRef={caseRef}
        source={source}
        styleTL={preRoll.styleTL}
        styleTR={preRoll.styleTR}
        styleBL={preRoll.styleBL}
        styleBR={preRoll.styleBR}
        onOpen={preRoll.animate}
      />
    </SafeAreaWithScrollView>
  );
}
