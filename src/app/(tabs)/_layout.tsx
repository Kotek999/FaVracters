import * as eva from "@eva-design/eva";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationProvider, Text, Avatar } from "@ui-kitten/components";
import { fonts } from "@/theme/fonts";

export default function TabsLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <Tabs
          screenOptions={{
            animation: "fade",
            tabBarStyle: { backgroundColor: "#132525", borderColor: "#1da5a5" },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#132525",
                borderBottomWidth: 0.5,
                borderBottomColor: "#1e4e4e",
              },
              headerTitleStyle: {
                width: "100%",
                fontSize: 18,
                fontFamily: fonts.bold,
                textTransform: "uppercase",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerTransparent: true,
              headerLeftContainerStyle: {
                marginStart: 25,
              },
              headerRightContainerStyle: { marginEnd: 25 },
              headerLeft: () => (
                <Avatar
                  borderRadius={20}
                  style={{ borderWidth: 1, borderColor: "#1e4e4e" }}
                  size="medium"
                  source={require("../../assets/images/image_example_1.png")}
                />
              ),
              headerRight: () => (
                <MaterialCommunityIcons name="bell" size={22} color="#0df2f2" />
              ),
              tabBarLabel: ({ children, focused }) => (
                <Text
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: 10,
                    fontFamily: fonts.semibold,
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
            name="case"
            options={{
              title: "Case Screen",
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
