import { ColorValue, TextStyle, ViewStyle } from "react-native";
import { BaseToastProps } from "react-native-toast-message";

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

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
} as const;

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

export interface ToastPayload {
  title: string;
  message?: string;
  duration?: number;
}

export interface ToastOptions<T extends ToastType = ToastType> {
  type: T;
  payload: ToastPayload;
}

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
