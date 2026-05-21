import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { CasesLeft } from "../CasesLeft";
import { Chances as DropChances } from "./Chances";
import { useOpenCaseAction } from "@/features/caseOpening/hooks/useOpenCaseAction";
import { DropChancesWithButtonItemProps } from "@/features/caseOpening/types";
import { OpenCaseButton } from "@/features/caseOpening/components/OpenCaseButton";

export const ChancesWithButtonItem = ({
  onOpen,
}: DropChancesWithButtonItemProps) => {
  const { cases, onPressOpenCase } = useOpenCaseAction(onOpen);

  return (
    <>
      <CasesLeft cases={cases} />
      <DropChances />
      <OpenCaseButton
        title="Otwórz"
        iconName="rocket-launch"
        style={styles.button}
        onPress={onPressOpenCase}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.7,
    color: colors.textDark,
  },
});
