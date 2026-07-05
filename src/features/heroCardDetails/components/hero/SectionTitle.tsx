import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { SectionTitleProps } from "@/features/heroCardDetails/types";

export const SectionTitle = ({ title, iconName }: SectionTitleProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionContainer}>
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.secondary}
        />
        <Text style={styles.sectionText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  sectionContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
});
