import { StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/colors";
import { ShineAnimationProps } from "@/features/collection/types";

export const ShineAnimation = ({ shineAnim }: ShineAnimationProps) => {
  return (
    <>
      <LinearGradient
        colors={[colors.shineMedium, colors.shineDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gloss}
      />
      <Animated.View
        style={[
          styles.shineContainer,
          { transform: [{ translateX: shineAnim }] },
        ]}
      >
        <LinearGradient
          colors={[colors.shineDark, colors.shineLight, colors.shineDark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.shine}
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  gloss: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "45%",
  },
  shineContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 80,
  },
  shine: {
    flex: 1,
    transform: [{ skewX: "-20deg" }],
  },
});
