import { View, StyleSheet } from "react-native";
import { NavigationActions } from "@/navigation";
import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/Button/Button";
import { OpenCaseButton } from "../OpenCaseButton";
import { getCaseAmount } from "../../utils/getCaseAmount";
import { useOpenCaseAction } from "@/features/caseOpening/hooks/useOpenCaseAction";
import { ResultActionButtonsProps } from "@/features/caseOpening/types";

export const ResultActionButtons = ({
  caseRef,
  winner,
  onSpin,
  onBack,
}: ResultActionButtonsProps) => {
  const { cases, onPressOpenCase, onPressAddToCollection } = useOpenCaseAction(
    onSpin,
    onBack,
  );

  const amount = getCaseAmount(cases, caseRef);

  const hasCases = amount > 0;

  const onPressOpenAction = () => {
    if (hasCases) {
      onPressOpenCase(caseRef);
      return;
    }

    onPressAddToCollection();
  };

  return (
    <View style={styles.mainContainer}>
      <OpenCaseButton
        isDefault
        title={hasCases ? "Losuj dalej" : "Dodaj do kolekcji"}
        iconName={hasCases ? "rocket-launch" : "plus-circle"}
        onPress={onPressOpenAction}
      />
      <Button
        title="Szczegóły"
        variant="outline"
        style={{ ...styles.button, ...styles.buttonOutline }}
        textStyle={{ ...styles.buttonText, ...styles.buttonOutlineText }}
        onPress={() => NavigationActions.openHeroCard(winner.id)}
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
