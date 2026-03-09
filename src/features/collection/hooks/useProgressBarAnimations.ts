import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import type { ProgressBarAnimationsProps } from "../types";

export const useProgressBarAnimations = ({
  progress,
  canLevelUp,
}: ProgressBarAnimationsProps) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const shineAnim = useRef(new Animated.Value(-screenWidth)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  useEffect(() => {
    if (!canLevelUp) return;

    const shineLoop = Animated.loop(
      Animated.timing(shineAnim, {
        toValue: screenWidth,
        duration: 4000,
        useNativeDriver: true,
      }),
    );
    shineLoop.start();

    return () => shineLoop.stop();
  }, [canLevelUp]);

  useEffect(() => {
    if (!canLevelUp) return;

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    );

    pulseLoop.start();
    return () => pulseLoop.stop();
  }, [canLevelUp]);

  const animatedWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return {
    animatedWidth,
    shineAnim,
    pulseAnim,
  };
};
