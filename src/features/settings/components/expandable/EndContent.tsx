import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { Input } from "@ui-kitten/components";
import { Button } from "@/components/ui/Button/Button";
import { useUsernameChange } from "../../hooks/useUsernameChange";
import { renderIcon } from "../../utils/renderIcon";
import { ErrorMessage } from "@/components/ui/ErrorMessage/ErrorMessage";
import { EndContentProps } from "../../types";

export const EndContent = ({ placeholder, buttonTitle }: EndContentProps) => {
  const { value, error, dirty, onChangeText, onPressSave } =
    useUsernameChange();

  const icon = renderIcon({ dirty, error });

  const status = dirty ? (error ? "danger" : "success") : "basic";
  const disabled = !dirty || !!error;

  return (
    <Animated.View
      entering={FadeIn.duration(180)}
      exiting={FadeOut.duration(120)}
      layout={LinearTransition}
      style={styles.expandContainer}
    >
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        status={status}
        accessoryRight={icon}
        style={styles.input}
        textStyle={{ color: colors.white }}
      />
      <ErrorMessage error={error} />
      <Button
        title={buttonTitle}
        variant="secondary"
        disabled={disabled}
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={onPressSave}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  expandContainer: {
    marginTop: 10,
    gap: 10,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.backgroundDarkGreen,
  },
  button: {
    width: "100%",
    height: 40,
  },
  buttonText: {
    fontSize: 14,
    letterSpacing: 0.7,
    color: colors.textDark,
  },
});
