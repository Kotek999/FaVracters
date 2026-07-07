import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { TitleWithButton } from "@/features/settings/components/TitleWithButton";
import { HeaderProps } from "@/features/shop/types";

export const Header = ({ energy }: HeaderProps) => {
  return (
    <View style={styles.mainContainer}>
      <TitleWithButton title="Sklep" />
      <View style={styles.energyContainer}>
        <Text style={styles.energyText}>{energy}</Text>
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={22}
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  energyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  energyText: {
    fontSize: 24,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
});
