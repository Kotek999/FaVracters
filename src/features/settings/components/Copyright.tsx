import { StyleSheet, View, Text } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { TitleProps as CopyrightProps } from "../types";

export const Copyright = ({ title }: CopyrightProps) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.copyrightTitleText}>
        @ {currentYear} FaVracters • {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  copyrightTitleText: {
    textAlign: "center",
    color: colors.textLightGray,
    marginLeft: 6,
    fontSize: 12,
    fontFamily: fonts.medium,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
});
