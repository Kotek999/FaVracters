import { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useProgressBarAnimations } from "../hooks/useProgressBarAnimations";
import { screenWidth } from "@/utils/dimensions";
import type { ProgressBarProps } from "../types";

export const ProgressBar = ({
  xp = 0,
  xpNeeded = 100,
  height = 28,
  canLevelUp,
  handleLevelUp = () => {},
}: ProgressBarProps) => {
  const progress = Math.min(xp / xpNeeded, 1);

  const { animatedWidth, shineAnim, pulseAnim } = useProgressBarAnimations({
    progress,
    canLevelUp,
  });

  const label = useMemo(() => `${xp} / ${xpNeeded}`, [xp, xpNeeded]);

  return (
    <TouchableOpacity
      activeOpacity={canLevelUp ? 0.7 : 1}
      onPress={() => {
        if (canLevelUp) handleLevelUp();
      }}
      disabled={canLevelUp ? false : true}
    >
      <Animated.View
        style={[
          styles.container,
          { height },
          canLevelUp && { transform: [{ scale: pulseAnim }] },
        ]}
      >
        <Animated.View
          style={[styles.progressWrapper, { width: animatedWidth }]}
        >
          <LinearGradient
            colors={["#4ADE80", "#22C55E", "#16A34A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />

          {canLevelUp && (
            <>
              <LinearGradient
                colors={["rgba(255,255,255,0.35)", "rgba(255,255,255,0)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gloss}
              />
              <Animated.View
                style={[
                  styles.shineWrapper,
                  { transform: [{ translateX: shineAnim }] },
                ]}
              >
                <LinearGradient
                  colors={[
                    "rgba(255,255,255,0)",
                    "rgba(255,255,255,0.6)",
                    "rgba(255,255,255,0)",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.shine}
                />
              </Animated.View>
            </>
          )}
        </Animated.View>

        <View style={styles.labelContainer}>
          <Text style={[styles.label]}>
            {canLevelUp ? "Tap to Level Up" : label}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 3,
    backgroundColor: "#1F2937",
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
  },
  progressWrapper: {
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
  gloss: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "45%",
  },
  shineWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 80,
  },
  shine: {
    flex: 1,
    transform: [{ skewX: "-20deg" }],
  },
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
