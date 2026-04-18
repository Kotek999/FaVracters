import { toast } from "../Toast/ToastService";

export const showToastMessageInfo = (title: string, message: string) => {
  toast.custom({
    type: "info",
    payload: {
      title,
      message,
      duration: 3500,
    },
  });
};
