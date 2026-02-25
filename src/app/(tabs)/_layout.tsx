import * as eva from "@eva-design/eva";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, Tabs } from "expo-router";
import { ApplicationProvider, Text, Avatar } from "@ui-kitten/components";
import { fonts } from "@/theme/fonts";
import { TouchableOpacity } from "react-native";

export default function TabsLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Tabs
        screenOptions={{
          animation: "fade",
          sceneStyle: { backgroundColor: "#142c2c" },
          tabBarStyle: {
            backgroundColor: "#142c2c",
            borderTopWidth: 1,
            borderTopColor: "#1e4e4e",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            animation: "shift",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#142c2c",
              borderBottomWidth: 1,
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
            headerLeftContainerStyle: {
              marginStart: 22,
            },
            headerRightContainerStyle: { marginEnd: 22 },
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
                onPress={() => router.push("/fourth")}
              >
                <Avatar
                  borderRadius={20}
                  style={{ borderWidth: 1, borderColor: "#246969" }}
                  size="medium"
                  source={require("../../assets/images/image_example_1.png")}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  width: 35,
                  height: 35,
                  backgroundColor: "#1f3f3fb9",
                  borderWidth: 1,
                  borderColor: "#246969",
                  borderRadius: 10,
                }}
                onPress={() => alert("bell icon clicked...")}
              >
                <MaterialCommunityIcons name="bell" size={18} color="red" />
              </TouchableOpacity>
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
              <MaterialCommunityIcons
                name="home-variant"
                size={22}
                color={focused ? "#0df2f2" : "#9dbbbb"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="second"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#142c2c",
              borderBottomWidth: 1,
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
            headerLeftContainerStyle: {
              marginStart: 22,
            },
            headerRightContainerStyle: { marginEnd: 22 },
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  width: 35,
                  height: 35,
                  backgroundColor: "#1f3f3fb9",
                  borderWidth: 1,
                  borderColor: "#246969",
                  borderRadius: 10,
                }}
                onPress={() => router.back()}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={18}
                  color="red"
                />
              </TouchableOpacity>
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
            title: "Kolekcja",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="view-grid"
                size={22}
                color={focused ? "#0df2f2" : "#9dbbbb"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="case"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#142c2c",
              borderBottomWidth: 1,
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
            headerLeftContainerStyle: {
              marginStart: 22,
            },
            headerRightContainerStyle: { marginEnd: 22 },
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  width: 35,
                  height: 35,
                  backgroundColor: "#1f3f3fb9",
                  borderWidth: 1,
                  borderColor: "#246969",
                  borderRadius: 10,
                }}
                onPress={() => router.back()}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={18}
                  color="red"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  flexDirection: "row",
                  width: 70,
                  height: 35,
                  backgroundColor: "#1f3f3fb9",
                  borderWidth: 1,
                  borderColor: "#246969",
                  borderRadius: 16,
                  gap: 5,
                }}
                onPress={() => alert("energy action clicked...")}
              >
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={18}
                  color="red"
                />
                <Text style={{ color: "red" }}>- - - -</Text>
              </TouchableOpacity>
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
            title: "Skrzynki",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="treasure-chest"
                size={22}
                color={focused ? "#0df2f2" : "#9dbbbb"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="fourth"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#142c2c",
              borderBottomWidth: 1,
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
            headerLeftContainerStyle: {
              marginStart: 22,
            },
            headerRightContainerStyle: { marginEnd: 22 },
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  width: 35,
                  height: 35,
                  backgroundColor: "#1f3f3fb9",
                  borderWidth: 1,
                  borderColor: "#246969",
                  borderRadius: 10,
                }}
                onPress={() => router.back()}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={18}
                  color="red"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  width: 35,
                  height: 35,
                  backgroundColor: "#1f3f3fb9",
                  borderWidth: 1,
                  borderColor: "#246969",
                  borderRadius: 10,
                }}
                onPress={() => alert("cog icon clicked...")}
              >
                <MaterialCommunityIcons name="cog" size={18} color="red" />
              </TouchableOpacity>
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
            title: "Profil",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="account-circle"
                size={22}
                color={focused ? "#0df2f2" : "#9dbbbb"}
              />
            ),
          }}
        />
      </Tabs>
    </ApplicationProvider>
  );
}
