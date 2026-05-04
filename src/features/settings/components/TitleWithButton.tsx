import { StyleSheet, View, Text } from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { HeaderIconButton } from "@/tabsScreen/components/HeaderIconButton";
import { TitleProps as TitleWithButtonProps } from "../types";

export const TitleWithButton = ({ title }: TitleWithButtonProps) => {
  return (
    <View style={styles.container}>
      <HeaderIconButton
        onPress={() => router.back()}
        icon={
          <MaterialCommunityIcons
            name="arrow-left"
            size={18}
            color={colors.primary}
          />
        }
      />
      <Text style={styles.settingsTitleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 14,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
  },
  settingsTitleText: {
    letterSpacing: 1.5,
    fontFamily: fonts.semibold,
    color: colors.white,
    fontSize: 20,
    textTransform: "uppercase",
  },
});
