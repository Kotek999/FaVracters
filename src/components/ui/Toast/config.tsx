import React from "react";
import { BaseToastProps } from "react-native-toast-message";
import { Toast } from "./Toast";
import { TOAST_VARIANTS } from "./ToastConfig";
import { ToastType } from "../types";

export const config = Object.fromEntries(
  Object.keys(TOAST_VARIANTS).map((variant) => [
    variant,
    (props: BaseToastProps) => (
      <Toast {...props} variant={variant as ToastType} />
    ),
  ]),
);
