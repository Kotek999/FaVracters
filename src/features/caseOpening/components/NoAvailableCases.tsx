import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { Button } from "@/components/ui/Button/Button";
import { Navigation, routes } from "@/navigation";

export const NoAvailableCases = () => {
  const onPressRedirectToShopScreen = () => Navigation.push(routes.shop);

  return (
    <View style={styles.mainContainer}>
      <MaterialCommunityIcons
        name="package-variant-remove"
        size={36}
        color={colors.secondary}
      />
      <Text style={styles.titleText}>Brak skrzynek</Text>
      <Text style={styles.subtitleText}>
        Zdobywaj darmowe skrzynki poprzez codzienne aktywności lub zajrzyj do
        sklepu
      </Text>
      <Button
        title="Przejdź do sklepu"
        variant="secondary"
        textStyle={styles.buttonText}
        onPress={onPressRedirectToShopScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: screenWidth / 1.2,
    height: screenHeight / 3.5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 16,
  },
  titleText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.medium,
  },
  subtitleText: {
    textAlign: "center",
    color: colors.textLightGray,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  buttonText: {
    color: colors.textDark,
  },
});
