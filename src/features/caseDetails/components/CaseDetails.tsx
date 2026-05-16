import { View, StyleSheet } from "react-native";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { HeaderChances } from "./HeaderChances";
import { HeroChancesRows } from "./HeroChancesRows";

export const CaseDetails = () => {
  return (
    <SafeAreaWithScrollView edges={["top", "bottom"]}>
      <View style={styles.mainContainer}>
        <HeaderChances />
        <HeroChancesRows />
      </View>
    </SafeAreaWithScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 14,
    flex: 1,
    justifyContent: "flex-start",
  },
});
