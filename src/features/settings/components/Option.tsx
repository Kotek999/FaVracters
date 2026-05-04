import { StyleSheet, View, Text } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { screenWidth } from "@/utils/dimensions";
import { OptionProps } from "../types";

export const Option = ({ title, renderElement }: OptionProps) => {
  return (
    <View style={styles.optionContainer}>
      <Text style={styles.optionTitleText}>{title}</Text>
      {renderElement}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 14,
    width: screenWidth - 28,
  },
  contentContainer: {
    marginTop: 40,
  },
  optionContainer: {
    marginTop: 10,
  },
  optionTitleText: {
    color: colors.textGray,
    marginLeft: 6,
    fontSize: 14,
    fontFamily: fonts.medium,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
