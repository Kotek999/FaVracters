import { ScrollView, ScrollViewProps, View, StyleSheet } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export function AppScrollView({ children, ...props }: ScrollViewProps) {
  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.scrollViewContainer,
        paddingBottom: insets.top,
      }}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      <View style={styles.childrenContainer}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  childrenContainer: {
    flex: 1,
  },
});
