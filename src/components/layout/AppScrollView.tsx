import { ScrollView, ScrollViewProps } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export function AppScrollView({ children, ...props }: ScrollViewProps) {
  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        marginBottom: 0,
      }}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
      }}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </ScrollView>
  );
}
