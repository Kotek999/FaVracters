import * as eva from "@eva-design/eva";
import Toast from "react-native-toast-message";
import { Stack } from "expo-router";
import { useAppFonts } from "@/hooks/useAppFonts";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationProvider } from "@ui-kitten/components";
import { config } from "@/components/ui/Toast/config";

export default function RootLayout() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) return null;

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#142c2c",
            },
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="caseSpin"
            options={{
              headerShown: false,
              presentation: "card",
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="shop"
            options={{
              headerShown: false,
              presentation: "card",
              animation: "simple_push",
            }}
          />
          <Stack.Screen
            name="loginCalendar"
            options={{
              headerShown: false,
              presentation: "card",
              animation: "simple_push",
            }}
          />
        </Stack>
        <Toast config={config} />
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}
