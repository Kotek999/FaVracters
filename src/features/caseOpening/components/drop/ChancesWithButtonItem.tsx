import React from "react";
import { StyleSheet } from "react-native";
import { CasesLeft } from "../CasesLeft";
import { Chances as DropChances } from "./Chances";
import { useOpenCaseAction } from "@/features/caseOpening/hooks/useOpenCaseAction";
import { OpenCaseButton } from "@/features/caseOpening/components/OpenCaseButton";
import { getCaseAmount } from "../../utils/getCaseAmount";
import { ChancesWithButtonItemProps } from "@/features/caseOpening/types";

export const ChancesWithButtonItem = ({
  caseRef,
  onOpen,
}: ChancesWithButtonItemProps) => {
  const { cases, onPressOpenCase } = useOpenCaseAction(onOpen);
  const amount = getCaseAmount(cases, caseRef);

  return (
    <>
      <CasesLeft amount={amount} />
      <DropChances category={caseRef.category} caseId={caseRef.caseId} />
      <OpenCaseButton
        title="Otwórz"
        iconName="rocket-launch"
        style={styles.button}
        onPress={() => onPressOpenCase(caseRef)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 50,
  },
});
