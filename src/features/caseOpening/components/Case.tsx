import { StyleSheet, Text, View } from "react-native";
import { useUserStore } from "@/features/user/store/useUserStore";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { screenWidth } from "@/utils/dimensions";
import { getTotalCases } from "../utils/getTotalCases";
import { AvailableCases } from "./AvailableCases";

export const Case = () => {
  const { cases } = useUserStore();
  const totalCases = getTotalCases(cases);

  return (
    <SafeAreaWithScrollView edges={["bottom"]}>
      <View style={styles.mainContainer}>
        <Text style={styles.titleText}>Twoje Skrzynki</Text>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="treasure-chest"
            size={18}
            color={colors.secondary}
          />
          <Text style={styles.subtitleText}>Dostępne: {totalCases}</Text>
        </View>
      </View>
      <AvailableCases />
    </SafeAreaWithScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: screenWidth,
    marginVertical: 10,
    paddingHorizontal: 22,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 2,
  },
  titleText: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.semibold,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  subtitleText: {
    textAlign: "center",
    color: colors.secondary,
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: fonts.medium,
  },
});
