import * as eva from "@eva-design/eva";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationProvider } from "@ui-kitten/components";

export default function TabsLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#102222", borderColor: "#1da5a5" },
          }}
        >
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
    </ApplicationProvider>
  );
}
