import { useState } from "react";
import { Navigation, routes } from "@/navigation";
import { validateUsername } from "../utils/validateUsername";
import { useUserStore } from "@/features/user/store/useUserStore";
import { toast } from "@/components/ui/Toast/ToastService";

export const useUsernameChange = () => {
  const { userName, setName } = useUserStore();

  const [value, setValue] = useState(userName);
  const [error, setError] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);

  const onChangeText = (text: string) => {
    setValue(text);

    if (text === userName) {
      setDirty(false);
      setError(null);
      return;
    }

    if (!dirty) {
      setDirty(true);
    }

    setError(validateUsername(text));
  };

  const onPressSave = () => {
    const err = validateUsername(value);

    if (err) {
      setError(err);
      setDirty(true);
      return;
    }

    setName(value);
    setDirty(false);

    toast.success("Zmiana nazwy", "Pomyślnie zmieniono nazwę!");
    Navigation.push(routes.userProfile);
  };

  return {
    value,
    error,
    dirty,
    onChangeText,
    onPressSave,
  };
};
