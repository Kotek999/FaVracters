import { useCallback } from "react";
import { StyleSheet, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { colors } from "@/theme/colors";
import { LANGUAGES } from "../utils/languages";
import { LanguageContent } from "./LanguageContent";
import { LanguageCode, LanguagePickerProps } from "../types";

export const LanguagePicker = ({ selected, onSelect }: LanguagePickerProps) => {
  const onPressSelect = useCallback(
    (code: LanguageCode) => {
      if (code !== selected) {
        onSelect(code);
      }
    },
    [selected, onSelect],
  );

  return (
    <>
      {LANGUAGES.map((item) => {
        const isSelected = item.code === selected;

        return (
          <Pressable
            key={item.code}
            onPress={() => onPressSelect(item.code)}
            style={styles.mainContainer}
          >
            <BlurView
              intensity={8}
              tint="light"
              style={[styles.blurContainer, isSelected && styles.selectedBlur]}
            >
              <LanguageContent item={item} isSelected={isSelected} />
            </BlurView>
          </Pressable>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginVertical: 10,
  },
  blurContainer: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.backgroundBlur,
    borderWidth: 1.2,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    paddingHorizontal: 20,
  },
  selectedBlur: {
    backgroundColor: colors.backgroundDarkBlue,
  },
});
