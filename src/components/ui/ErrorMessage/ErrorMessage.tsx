import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { ErrorMessageProps } from "../types";

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <>
      {error && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.errorBox}
        >
          <Text style={styles.errorText}>
            <FontAwesome
              name="exclamation-circle"
              size={13}
              color={colors.error}
            />{" "}
            {error}
          </Text>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorBox: {
    paddingVertical: 4,
  },
  errorText: {
    color: colors.error,
    fontSize: 13,
  },
});
