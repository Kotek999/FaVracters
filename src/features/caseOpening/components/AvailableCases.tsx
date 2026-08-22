import { StyleSheet, View } from "react-native";
import { useUserStore } from "@/features/user/store/useUserStore";
import { MoreCasesToBuy } from "./MoreCasesToBuy";
import { getCaseAmount } from "../utils/getCaseAmount";
import { getAvailableCases } from "../utils/getAvailableCases";
import { NoAvailableCases } from "./NoAvailableCases";
import { PrimaryCase } from "./PrimaryCase";

export const AvailableCases = () => {
  const { cases } = useUserStore();

  const availableCases = getAvailableCases(cases);

  return (
    <View style={styles.mainContainer}>
      {availableCases.length === 0 ? (
        <NoAvailableCases />
      ) : (
        <>
          {availableCases.map((item) => {
            const amount = getCaseAmount(cases, item);
            return (
              <PrimaryCase
                key={item.config.key}
                caseRef={item}
                cases={amount}
                source={item.config.image}
                title={item.config.name}
                subtitle={item.config.description}
              />
            );
          })}
          <MoreCasesToBuy />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
