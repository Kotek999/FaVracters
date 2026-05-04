import { userStore } from "@/features/user/store/userStore";
import { translations } from "./translations";

export const useTranslation = () => {
  const lang = userStore((state) => state.language);

  return (key: keyof (typeof translations)["pl"]) => translations[lang][key];
};
