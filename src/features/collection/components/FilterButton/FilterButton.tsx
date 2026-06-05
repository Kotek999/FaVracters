import { Text, Pressable, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { FilterButtonProps } from "@/features/collection/types";

export const FilterButton = ({ label, active, onPress }: FilterButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.filterButton, active && styles.filterButtonActive]}
    >
      <Text style={[styles.filterText, active && styles.filterTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.borderPrimary,
    backgroundColor: colors.backgroundNavDarkGreen,
    alignItems: "center",
  },
  filterButtonActive: {
    borderColor: colors.borderSecondary,
    backgroundColor: colors.backgroundBlur,
    shadowColor: colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  filterText: {
    color: colors.textLightGray,
    fontSize: 12,
    fontFamily: fonts.bold,
    textAlign: "center",
    textTransform: "uppercase",
  },
  filterTextActive: {
    fontFamily: fonts.bold,
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.primary,
  },
});
