import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/Button/Button";
import { OpenCaseButtonProps } from "../types";

export const OpenCaseButton = ({
  title,
  iconName,
  isDefault,
  style,
  onPress,
}: OpenCaseButtonProps) => {
  return (
    <Button
      title={title}
      variant="secondary"
      icon={
        <MaterialCommunityIcons
          name={iconName}
          size={22}
          color={colors.black}
        />
      }
      iconPosition="left"
      style={isDefault ? styles.button : style}
      textStyle={{ ...styles.buttonText, ...styles.buttonSecondaryText }}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.7,
  },
  buttonSecondaryText: {
    color: colors.textDark,
  },
});
