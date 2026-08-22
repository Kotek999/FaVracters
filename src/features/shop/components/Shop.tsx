import { View, StyleSheet } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { useUserStore } from "@/features/user/store/useUserStore";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { Header } from "./Header";
import { CategoryTitle } from "./CategoryTitle";
import { CaseToBuyCarousel } from "./CaseToBuyCarousel";
import { EnergyToBuyCards } from "./EnergyToBuyCards";

export const Shop = () => {
  const { energy } = useUserStore();

  return (
    <SafeAreaWithScrollView edges={["top", "bottom"]}>
      <View style={styles.mainContainer}>
        <Header energy={energy} />
        <CategoryTitle title="Skrzynki" />
        <CaseToBuyCarousel />
        <CategoryTitle title="Waluta" />
        <EnergyToBuyCards />
      </View>
    </SafeAreaWithScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 14,
    width: screenWidth - 28,
  },
});
