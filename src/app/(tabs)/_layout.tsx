import { Tabs } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <SafeAreaProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />

        <Tabs.Screen
          name="second"
          options={{
            title: "Second",
          }}
        />

        <Tabs.Screen
          name="third"
          options={{
            title: "Third",
          }}
        />

        <Tabs.Screen
          name="fourth"
          options={{
            title: "Fourth",
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
