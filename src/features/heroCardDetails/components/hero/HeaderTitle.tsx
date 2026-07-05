import { View, Text, StyleSheet } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";

export const HeaderTitle = () => {
  return (
    <View style={styles.heroContainer}>
      <Text style={styles.heroTitleText}>Sczegóły bohatera</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  heroTitleText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.medium,
    textTransform: "uppercase",
  },
});
