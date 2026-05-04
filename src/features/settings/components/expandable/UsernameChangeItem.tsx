import Animated, {
  useAnimatedStyle,
  LinearTransition,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { colors } from "@/theme/colors";
import { useExpandable } from "../../hooks/useExpandable";
import { StartContent } from "./StartContent";
import { EndContent } from "./EndContent";
import { UsernameChangeItemProps } from "../../types";

export const UsernameChangeItem = ({
  title,
  placeholder,
  buttonTitle,
}: UsernameChangeItemProps) => {
  const { expanded, progress, toggle } = useExpandable();

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
  }));

  return (
    <Animated.View style={styles.cardWrapper} layout={LinearTransition}>
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <StartContent title={title} toggle={toggle} iconStyle={iconStyle} />
        {expanded && (
          <EndContent placeholder={placeholder} buttonTitle={buttonTitle} />
        )}
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
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
});
