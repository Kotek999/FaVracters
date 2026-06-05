import { useMemo } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useProgressBarAnimations } from "@/features/collection/hooks/useProgressBarAnimations";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { screenWidth } from "@/utils/dimensions";
import { AnimatedGradient } from "./AnimatedGradient";
import { ProgressBarProps as AnimatedProgressBarProps } from "@/features/collection/types";

export const AnimatedProgressBar = ({
  xp,
  xpNeeded,
  height,
  canLevelUp,
}: AnimatedProgressBarProps) => {
  const progress = Math.min(xp / xpNeeded, 1);
  const label = useMemo(() => `${xp} / ${xpNeeded}`, [xp, xpNeeded]);

  const { animatedWidth, shineAnim, pulseAnim } = useProgressBarAnimations({
    progress,
    canLevelUp,
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { height },
        canLevelUp && { transform: [{ scale: pulseAnim }] },
      ]}
    >
      <AnimatedGradient
        animatedWidth={animatedWidth}
        canLevelUp={canLevelUp}
        shineAnim={shineAnim}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{canLevelUp ? "Ulepsz" : label}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 3,
    backgroundColor: colors.backgroundDarkBlue,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
  },
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    textAlign: "center",
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
