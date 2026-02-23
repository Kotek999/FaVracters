import { ScrollView, ScrollViewProps, View } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export function AppScrollView({ children, ...props }: ScrollViewProps) {
  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: insets.top,
      }}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </ScrollView>
  );
}
