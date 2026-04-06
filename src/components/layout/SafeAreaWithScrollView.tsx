import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppScrollView } from "@/components/layout/AppScrollView";
import { NativeSafeAreaViewProps } from "react-native-safe-area-context";

export const SafeAreaWithScrollView = ({
  children,
  edges,
}: NativeSafeAreaViewProps) => {
  return (
    <SafeAreaView style={styles.childrenContainer} edges={edges}>
      <AppScrollView>{children}</AppScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  childrenContainer: {
    flex: 1,
  },
});
