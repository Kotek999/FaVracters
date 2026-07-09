import Toast from "react-native-toast-message";
import { ToastType } from "../types";

class ToastService {
  private show(
    type: ToastType,
    title: string,
    message?: string,
    duration = 3000,
  ) {
    Toast.show({
      type,
      text1: title,
      text2: message,
      visibilityTime: duration,
      position: "top",
    });
  }

  success(title: string, message?: string) {
    this.show("success", title, message);
  }

  error(title: string, message?: string) {
    this.show("error", title, message);
  }

  info(title: string, message?: string) {
    this.show("info", title, message);
  }
}

export const toast = new ToastService();
