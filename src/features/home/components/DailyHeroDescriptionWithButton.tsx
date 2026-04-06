import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { rarityColor } from "@/features/caseOpening/consts";
import { Button } from "@/components/ui/Button/Button";
import { dailyHeroItem } from "../utils/dailyHeroItem";
import { DailyHeroDescriptionWithButtonProps } from "../types";

export const DailyHeroDescriptionWithButton = ({
  dailyHeroConfig,
  onPressGoToScreen,
}: DailyHeroDescriptionWithButtonProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heroRarityText}>{dailyHeroItem.rarity}</Text>
        <Text style={styles.heroLabelText}>{dailyHeroConfig.label}</Text>
      </View>
      <Button
        title={dailyHeroConfig.buttonLabel}
        variant="primary"
        style={styles.button}
        textStyle={styles.buttonText}
        icon={
          <MaterialCommunityIcons
            name={dailyHeroConfig.icon as any}
            size={24}
            color={colors.black}
          />
        }
        iconPosition="left"
        onPress={onPressGoToScreen}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  heroRarityText: {
    fontSize: 12,
    color: rarityColor[dailyHeroItem.rarity],
    textAlign: "center",
    fontFamily: fonts.medium,
    letterSpacing: 2.5,
    textTransform: "uppercase",
  },
  heroLabelText: {
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
    fontFamily: fonts.bold,
    textTransform: "uppercase",
  },
  button: {
    width: "100%",
  },
  buttonText: {
    letterSpacing: 0.7,
    color: colors.textDark,
  },
});
