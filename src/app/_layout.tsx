import { Stack } from "expo-router";
import { useAppFonts } from "@/hooks/useAppFonts";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) return null;

  return (
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
            animation: "fade",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
