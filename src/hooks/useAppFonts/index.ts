import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export function useAppFonts() {
  const [loaded, error] = useFonts({
    SpaceGrotesk_300: require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
    SpaceGrotesk_400: require("../../assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGrotesk_500: require("../../assets/fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGrotesk_600: require("../../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGrotesk_700: require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return loaded || !!error;
}
