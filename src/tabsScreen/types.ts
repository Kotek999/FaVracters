import { ViewStyle } from "react-native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { Children, HeaderRenderer, IconName } from "@/types/global";

export type TabsScreenOptions =
  | BottomTabNavigationOptions
  | ((props: {
      route: import("@react-navigation/native").RouteProp<
        ParamListBase,
        string
      >;
      navigation: import("@react-navigation/bottom-tabs").BottomTabNavigationProp<
        ParamListBase,
        string,
        undefined
      >;
      theme: ReactNavigation.Theme;
    }) => BottomTabNavigationOptions)
  | undefined;

type ScreenName = "index" | "second" | "case" | "fourth";

export type RoutePath =
  | "/"
  | "/second"
  | "/case"
  | "/fourth"
  | "/loginCalendar";

export type ScreenConfig = {
  name: ScreenName;
  title: string;
  iconName: IconName;
  headerLeft?: HeaderRenderer;
  headerRight?: HeaderRenderer;
};

export interface HeaderIconButtonProps {
  icon: Children;
  onPress: () => void;
  style?: ViewStyle;
}

export type FocusedProp = {
  focused: boolean;
};

export interface TabBarLabelProps extends FocusedProp {
  children: string;
}
