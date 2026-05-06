import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Card } from "@/features/user/components/stats/Card";
import { formatNumberShort } from "@/features/user/utils/formatNumberShort";
import { screenWidth } from "@/utils/dimensions";
import { UserCasesWithEnergyProps } from "../types";

export const UserCasesWithEnergy = ({
  cases,
  energy,
}: UserCasesWithEnergyProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Twoje Zdobycze</Text>
      <View style={styles.cardsContainer}>
        <Card icon="treasure-chest" value={`x${cases}`} label="Skrzynia" />
        <Card
          icon="lightning-bolt"
          value={formatNumberShort(energy)}
          label="Energia"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: screenWidth,
    marginTop: 20,
    paddingHorizontal: 22,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleText: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.semibold,
  },
  cardsContainer: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
