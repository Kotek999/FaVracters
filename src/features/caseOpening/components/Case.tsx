import { StyleSheet, View } from "react-native";
import { useUserStore } from "@/features/user/store/useUserStore";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { UserCasesWithEnergy } from "./UserCasesWithEnergy";
import { PrimaryCase } from "./PrimaryCase";
import { MoreCasesToBuy } from "./MoreCasesToBuy";

export const Case = () => {
  const { cases, energy } = useUserStore();

  return (
    <SafeAreaWithScrollView edges={["bottom"]}>
      <UserCasesWithEnergy cases={cases} energy={energy} />
      <View style={styles.container}>
        <PrimaryCase cases={cases} />
        <MoreCasesToBuy />
      </View>
    </SafeAreaWithScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
