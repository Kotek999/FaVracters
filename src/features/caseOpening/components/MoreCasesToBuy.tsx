import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { screenWidth } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Button } from "@/components/ui/Button/Button";

export const MoreCasesToBuy = () => {
  const onPressRedirectToShopScreen = () => router.push("/shop");

  return (
    <View style={styles.mainContainer}>
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <View style={styles.cardContentContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="shopping"
              size={22}
              color={colors.primary}
            />
          </View>
          <Text style={styles.value}>Potrzebujesz więcej?</Text>
          <Text style={styles.label}>
            Odwiedź sklep, aby zdobyć potężne skrzynie i energię.
          </Text>
          <Button
            title="Przejdź do sklepu"
            variant="secondary"
            textStyle={{ color: colors.textDark }}
            onPress={onPressRedirectToShopScreen}
          />
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: screenWidth,
    marginVertical: 10,
    paddingHorizontal: 22,
  },
  blurContainer: {
    overflow: "hidden",
    borderStyle: "dashed",
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.backgroundBlur,
    borderWidth: 1.2,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    paddingHorizontal: 20,
  },
  cardContentContainer: {
    flex: 1,
    gap: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.backgroundDarkGreen,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
  label: {
    width: "90%",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: fonts.medium,
    color: colors.textLightGray,
  },
});
