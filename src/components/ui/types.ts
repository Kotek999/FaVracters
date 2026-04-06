import { TextStyle, ViewStyle } from "react-native";

export type Variant = "primary" | "secondary" | "outline";
export type Position = "left" | "right";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: Position;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
