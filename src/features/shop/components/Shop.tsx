import { View, StyleSheet } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { useUserStore } from "@/features/user/store/useUserStore";
import { showToastMessageInfo } from "@/components/ui/utils/showToastMessageInfo";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { Header } from "./Header";
import { CategoryTitle } from "./CategoryTitle";
import { PrimaryCaseToBuy } from "./PrimaryCaseToBuy";
import { EnergyToBuyCards } from "./EnergyToBuyCards";

export const Shop = () => {
  const { energy, spendEnergy } = useUserStore();

  const buyCase = () => {
    const success = spendEnergy(25);

    if (!success) {
      showToastMessageInfo(
        "Zakup nieudany - Brak energii",
        "Zdobądź lub kup potrzebną walutę",
      );
      return;
    } else {
      showToastMessageInfo("Zakup udany", "Dodano nową zawartość");
    }
  };

  return (
    <SafeAreaWithScrollView edges={["top", "bottom"]}>
      <View style={styles.mainContainer}>
        <Header energy={energy} />
        <CategoryTitle title="Skrzynki" />
        <PrimaryCaseToBuy onPress={buyCase} />
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
