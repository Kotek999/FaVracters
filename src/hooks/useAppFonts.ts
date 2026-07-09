import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FontSource, useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export function useAppFonts() {
  const [loaded, error] = useFonts({
    SpaceGrotesk_300:
      require("@/assets/fonts/SpaceGrotesk-Light.ttf") as FontSource,
    SpaceGrotesk_400:
      require("@/assets/fonts/SpaceGrotesk-Regular.ttf") as FontSource,
    SpaceGrotesk_500:
      require("@/assets/fonts/SpaceGrotesk-Medium.ttf") as FontSource,
    SpaceGrotesk_600:
      require("@/assets/fonts/SpaceGrotesk-SemiBold.ttf") as FontSource,
    SpaceGrotesk_700:
      require("@/assets/fonts/SpaceGrotesk-Bold.ttf") as FontSource,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return loaded || !!error;
}
