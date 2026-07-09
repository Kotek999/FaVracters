import { ColorValue, TextStyle, ViewStyle } from "react-native";
import { BaseToastProps } from "react-native-toast-message";
import { TOAST_VARIANTS } from "./Toast/ToastConfig";
import { IconName } from "@/types/global";

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

export type ToastType = keyof typeof TOAST_VARIANTS;

export type ToastVariantsConfig = {
  readonly icon: IconName;
  readonly iconColor: string;
  readonly borderColor: string;
};

export type ToastProps = BaseToastProps & {
  variant: ToastType;
};

export interface ProgressBarProps {
  progress: number;
  height?: number;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

export interface ErrorMessageProps {
  error: string | null;
}

export type HighlightedTextProps = {
  text: string;
  names: string[];
};
