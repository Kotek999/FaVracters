import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { CategoryTitleProps } from "@/features/shop/types";

export const CategoryTitle = ({ title }: CategoryTitleProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
});
