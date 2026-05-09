import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useUserStore } from "@/features/user/store/useUserStore";
import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/Button/Button";
import { showToastMessageInfo } from "@/components/ui/utils/showToastMessageInfo";
import { CasesLeft } from "../CasesLeft";
import { Chances as DropChances } from "./Chances";
import { DropChancesWithButtonItemProps } from "../../types";

export const ChancesWithButtonItem = ({
  onOpen,
}: DropChancesWithButtonItemProps) => {
  const { cases, useCase } = useUserStore();

  const onPressOpenCase = () => {
    const canOpen = useCase();

    if (!canOpen) {
      showToastMessageInfo(
        "Akcja zablokowana!",
        "Nie masz wystarczającej ilości skrzynek",
      );
      return;
    }
    onOpen();
  };

  return (
    <>
      <CasesLeft cases={cases} />
      <DropChances />
      <Button
        title="Otwórz"
        variant="secondary"
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={onPressOpenCase}
        icon={
          <MaterialCommunityIcons
            name="rocket-launch"
            size={22}
            color={colors.black}
          />
        }
        iconPosition="left"
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
