import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { colors } from "@/theme/colors";
import { COMMON_SCREEN_OPTIONS } from "./tabsScreenOptions";
import { labelStyle } from "../utils/labelStyle";
import { iconColor } from "../utils/iconColor";
import { ScreenConfig, TabBarLabelProps, FocusedProp } from "../types";

export const createScreenOptions = (config: ScreenConfig) => ({
  ...COMMON_SCREEN_OPTIONS,

  animation: "shift" as const,
  headerShown: true,
  headerStyle: styles.header,
  headerLeft: config.headerLeft,
  headerRight: config.headerRight,
  title: config.title,

  tabBarLabel: ({ children, focused }: TabBarLabelProps) => (
    <Text style={labelStyle(focused)}>{children}</Text>
  ),

  tabBarIcon: ({ focused }: FocusedProp) => (
    <MaterialCommunityIcons
      name={config.iconName}
      size={22}
      color={iconColor(focused)}
    />
  ),
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.backgroundPrimary,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderPrimary,
  },
});
