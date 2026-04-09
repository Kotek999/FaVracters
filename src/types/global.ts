import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps, ReactNode } from "react";
import {
  ColorValue,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";

export type Children = ReactNode;

export interface ImageWithGradientProps {
  children: Children;
  source?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

export type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];
export type HeaderRenderer = () => Children;
