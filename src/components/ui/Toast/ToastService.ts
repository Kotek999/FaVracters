import Toast from "react-native-toast-message";
import { ToastOptions, ToastType } from "../types";

class ToastService {
  private show<T extends ToastType>({ type, payload }: ToastOptions<T>) {
    Toast.show({
      type,
      text1: payload.title,
      text2: payload.message,
      visibilityTime: payload.duration ?? 3000,
      position: "top",
    });
  }

  success(title: string, message?: string) {
    this.show({
      type: "success",
      payload: { title, message },
    });
  }

  error(title: string, message?: string) {
    this.show({
      type: "error",
      payload: { title, message },
    });
  }

  info(title: string, message?: string) {
    this.show({
      type: "info",
      payload: { title, message },
    });
  }

  custom(options: ToastOptions) {
    this.show(options);
  }
}

export const toast = new ToastService();
