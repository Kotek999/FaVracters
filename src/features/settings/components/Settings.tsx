import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { SettingsItem } from "./SettingsItem";

export const Settings = () => {
  return (
    <SafeAreaWithScrollView edges={["top", "bottom"]}>
      <SettingsItem />
    </SafeAreaWithScrollView>
  );
};
