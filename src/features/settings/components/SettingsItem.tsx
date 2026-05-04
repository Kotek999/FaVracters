import { StyleSheet, View } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { useUserStore } from "@/features/user/store/useUserStore";
import { useTranslation } from "@/systems/i18n/useTranslation";
import { TitleWithButton } from "./TitleWithButton";
import { Option } from "./Option";
import { UsernameChangeItem } from "./expandable/UsernameChangeItem";
import { LanguagePicker } from "./LanguagePicker";
import { Copyright } from "./Copyright";

export const SettingsItem = () => {
  const { language, setLanguage } = useUserStore();
  const t = useTranslation();

  return (
    <View style={styles.mainContainer}>
      <TitleWithButton title={t("settings")} />
      <View style={styles.contentContainer}>
        <Option
          title={t("profile")}
          renderElement={
            <UsernameChangeItem
              title={t("changeName")}
              placeholder={t("newName")}
              buttonTitle={t("save")}
            />
          }
        />
        <Option
          title={t("language")}
          renderElement={
            <LanguagePicker selected={language} onSelect={setLanguage} />
          }
        />
        <Copyright title={t("copyright")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 14,
    width: screenWidth - 28,
  },
  contentContainer: {
    marginTop: 40,
  },
});
