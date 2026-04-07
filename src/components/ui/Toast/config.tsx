import React from "react";
import { BaseToastProps } from "react-native-toast-message";
import { Toast } from "./Toast";

export const config = {
  success: (props: BaseToastProps) => <Toast {...props} variant="success" />,
  error: (props: BaseToastProps) => <Toast {...props} variant="error" />,
  info: (props: BaseToastProps) => <Toast {...props} variant="info" />,
};
