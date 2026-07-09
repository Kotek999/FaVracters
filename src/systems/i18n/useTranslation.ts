import { useUserStore } from "@/features/user/store/useUserStore";
import { translations } from "./translations";

export const useTranslation = () => {
  const { lang } = useUserStore();

  return (key: keyof (typeof translations)["pl"]) => translations[lang][key];
};
