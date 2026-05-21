import { useUserStore } from "@/features/user/store/useUserStore";
import { showToastMessageInfo } from "@/components/ui/utils/showToastMessageInfo";

export const useOpenCaseAction = (onAction: () => void) => {
  const { cases, useCase } = useUserStore();

  const onPressOpenCase = () => {
    const canOpen = useCase();

    if (!canOpen) {
      showToastMessageInfo(
        "Akcja zablokowana!",
        "Nie masz wystarczającej ilości skrzynek",
      );
      return;
    }
    onAction();
  };

  return {
    cases,
    onPressOpenCase,
  };
};
