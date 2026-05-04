import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { LanguageContentProps } from "../types";

export const LanguageContent = ({ item, isSelected }: LanguageContentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.flag}>{item.flag}</Text>
        <Text style={[styles.label, isSelected && styles.selectedLabel]}>
          {item.label}
        </Text>
      </View>
      {isSelected && (
        <MaterialCommunityIcons
          name="check-circle"
          size={20}
          color={colors.primary}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  flag: {
    fontSize: 18,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.textLightGray,
  },
  selectedLabel: {
    color: colors.white,
    fontFamily: fonts.bold,
  },
});
