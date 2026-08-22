import { View, StyleSheet } from "react-native";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { HeaderChances } from "./HeaderChances";
import { HeroChancesRows } from "./HeroChancesRows";
import { useLocalSearchParams } from "expo-router";
import { CaseCategory } from "@/features/caseOpening/config/types";

export const CaseDetails = () => {
  const { category, caseId } = useLocalSearchParams<{
    category?: CaseCategory;
    caseId?: string;
  }>();

  return (
    <SafeAreaWithScrollView edges={["top", "bottom"]}>
      <View style={styles.mainContainer}>
        {category && caseId && (
          <>
            <HeaderChances />
            <HeroChancesRows category={category} caseId={caseId} />
          </>
        )}
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
