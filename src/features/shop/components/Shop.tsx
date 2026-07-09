import { View, StyleSheet } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { useUserStore } from "@/features/user/store/useUserStore";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { useToastActions } from "@/hooks/useToastActions";
import { Header } from "./Header";
import { CategoryTitle } from "./CategoryTitle";
import { PrimaryCaseToBuy } from "./PrimaryCaseToBuy";
import { EnergyToBuyCards } from "./EnergyToBuyCards";

export const Shop = () => {
  const { energy, spendEnergy } = useUserStore();
  const { buyCase } = useToastActions();

  return (
    <SafeAreaWithScrollView edges={["top", "bottom"]}>
      <View style={styles.mainContainer}>
        <Header energy={energy} />
        <CategoryTitle title="Skrzynki" />
        <PrimaryCaseToBuy onPress={() => buyCase(spendEnergy)} />
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
