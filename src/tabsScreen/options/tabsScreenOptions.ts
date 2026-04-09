import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { TabsScreenOptions } from "../types";

export const tabsScreenOptions: TabsScreenOptions = {
  animation: "fade",
  sceneStyle: { backgroundColor: colors.backgroundPrimary },
  tabBarStyle: {
    backgroundColor: colors.backgroundPrimary,
    borderTopWidth: 1,
    borderTopColor: colors.borderPrimary,
  },
};

export const COMMON_SCREEN_OPTIONS = {
  headerTitleStyle: {
    width: "100%",
    fontSize: 18,
    fontFamily: fonts.bold,
    textTransform: "uppercase",
  },
  headerTintColor: colors.white,
  headerTitleAlign: "center",
  headerLeftContainerStyle: {
    marginStart: 22,
  },
  headerRightContainerStyle: {
    marginEnd: 22,
  },
} as const;
