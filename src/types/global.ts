import {
  ColorValue,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";

type Children = React.ReactNode;

export interface ImageWithGradientProps {
  children: Children;
  source?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}
