import { Text } from "@ui-kitten/components";
import { StyleSheet, View, ActivityIndicator, Pressable } from "react-native";
import { getBackgroundColor } from "./getBackgroundColor";
import { getTextColor } from "./getTextColor";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { ButtonProps } from "../types";

export const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  style,
  textStyle,
}: ButtonProps) => {
  const backgroundColor = getBackgroundColor(disabled, variant);
  const color = getTextColor(variant);

  const iconElement = icon ? (
    <View style={iconPosition === "left" ? styles.iconLeft : styles.iconRight}>
      {icon}
    </View>
  ) : null;

  const disabledStyle = [
    disabled ? { ...styles.shadow, shadowColor: colors.shadow } : styles.shadow,
  ];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: backgroundColor,
          opacity: pressed ? 0.7 : 1,
          borderWidth: variant === "outline" ? 1 : 0,
          borderColor: colors.primary,
        },
        disabledStyle,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={color} />
      ) : (
        <View style={styles.content}>
          {iconPosition === "left" && iconElement}
          <Text style={[styles.text, { color: color }, textStyle]}>
            {title}
          </Text>
          {iconPosition === "right" && iconElement}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: fonts.bold,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
