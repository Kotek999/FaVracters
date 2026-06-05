import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { Button } from "@/components/ui/Button/Button";
import { router } from "expo-router";

export const ListEmptyHeroCards = () => {
  const onPressRedirectToCaseScreen = () => router.push("/case");

  return (
    <View style={styles.mainContainer}>
      <MaterialCommunityIcons
        name="file-image-remove"
        size={36}
        color={colors.secondary}
      />
      <Text style={styles.emptyTitleText}>Brak bohaterów</Text>
      <Text style={styles.emptyDescriptionText}>
        Zdobywaj karty i odkrywaj bohaterów, aby zapełnić swoją kolekcję
      </Text>
      <Button
        title="Zdobądź karty"
        variant="secondary"
        textStyle={{ color: colors.textDark }}
        onPress={onPressRedirectToCaseScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: screenWidth / 1.2,
    height: screenHeight / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 14,
  },
  emptyTitleText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.medium,
  },
  emptyDescriptionText: {
    textAlign: "center",
    color: colors.textLightGray,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
});
