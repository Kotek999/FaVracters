import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const HeaderChances = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerTitleText}>Bohater</Text>
      <Text style={styles.headerTitleText}>Szansa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitleText: {
    textAlign: "center",
    color: colors.textGray,
    fontFamily: fonts.medium,
    fontSize: 14,
    textTransform: "uppercase",
  },
});
