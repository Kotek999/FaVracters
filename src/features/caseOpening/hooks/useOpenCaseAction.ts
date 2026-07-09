import { useUserStore } from "@/features/user/store/useUserStore";
import { toast } from "@/components/ui/Toast/ToastService";

export const useOpenCaseAction = (
  onAction: () => void,
  onBack?: () => void,
) => {
  const { cases, useCase } = useUserStore();

  const onPressOpenCase = () => {
    const canOpen = useCase();

    if (!canOpen) {
      toast.error(
        "Akcja zablokowana!",
        "Nie masz wystarczającej ilości skrzynek",
      );
      return;
    }
    onAction();
  };

  const onPressAddToCollection = () => {
    toast.success("Akcja udana!", "Bohater został dodany do kolekcji");
    onBack && onBack();
  };

  return {
    cases,
    onPressOpenCase,
    onPressAddToCollection,
  };
};
