import { Text, View, StyleSheet } from "react-native";
import { Spinner } from "@ui-kitten/components";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";

export const CardSpinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <Spinner size="large" status="info" />
      <Text style={styles.spinnerText}>Ładowanie...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  spinnerText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.semibold,
    letterSpacing: 1,
  },
});
