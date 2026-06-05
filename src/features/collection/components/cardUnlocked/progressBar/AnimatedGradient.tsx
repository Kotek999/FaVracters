import { StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/colors";
import { ShineAnimation } from "./ShineAnimation";
import { AnimatedGradientProps } from "@/features/collection/types";

export const AnimatedGradient = ({
  animatedWidth,
  canLevelUp,
  shineAnim,
}: AnimatedGradientProps) => {
  return (
    <Animated.View style={[styles.progressContainer, { width: animatedWidth }]}>
      <LinearGradient
        colors={[colors.primary, colors.backgroundDarkGreen, colors.primary]}
        start={{ x: 1, y: -0.5 }}
        end={{ x: 1, y: 2.5 }}
        style={styles.gradient}
      />

      {canLevelUp && <ShineAnimation shineAnim={shineAnim} />}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
  },
});
