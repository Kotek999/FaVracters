import * as eva from "@eva-design/eva";
import Foundation from "@expo/vector-icons/Foundation";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationProvider, Text } from "@ui-kitten/components";

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
              tabBarLabel: ({ children, focused }) => (
                <Text
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: 10,
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: focused ? "#0df2f2" : "#9dbbbb",
                  }}
                >
                  {children}
                </Text>
              ),

              title: "Główna",
              tabBarIcon: ({ focused }) => (
                <Foundation
                  name="home"
                  size={22}
                  color={focused ? "#0df2f2" : "#9dbbbb"}
                />
              ),
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
