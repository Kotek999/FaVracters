import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/Button/Button";
import { OpenCaseButton } from "../OpenCaseButton";
import { useOpenCaseAction } from "@/features/caseOpening/hooks/useOpenCaseAction";
import { ResultActionButtonsProps } from "@/features/caseOpening/types";

export const ResultActionButtons = ({
  winner,
  onSpin,
  onBack,
}: ResultActionButtonsProps) => {
  const { cases, onPressOpenCase } = useOpenCaseAction(onSpin);

  const onPressRedirectToCardDetailsScreen = () =>
    router.push(`/card/${winner.id}`);

  return (
    <View style={styles.mainContainer}>
      {cases > 0 ? (
        <OpenCaseButton
          isDefault
          title="Losuj dalej"
          iconName="rocket-launch"
          onPress={onPressOpenCase}
        />
      ) : (
        <OpenCaseButton
          isDefault
          title="Dodaj do kolekcji"
          iconName="plus-circle"
          onPress={onBack}
        />
      )}
      <Button
        title="Szczegóły"
        variant="outline"
        style={{ ...styles.button, ...styles.buttonOutline }}
        textStyle={{ ...styles.buttonText, ...styles.buttonOutlineText }}
        onPress={onPressRedirectToCardDetailsScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    gap: 12,
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
  },
  buttonOutline: {
    shadowColor: colors.blank,
    elevation: 0,
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.7,
  },
  buttonOutlineText: {
    color: colors.white,
  },
});
