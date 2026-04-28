import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { SIZE, STROKE_WIDTH, RADIUS, CIRCUMFERENCE } from "../consts";
import { colors } from "@/theme/colors";
import { ProgressProps as AvatarWithLevelProps } from "../types";

export const AvatarWithLevel = ({ progress }: AvatarWithLevelProps) => {
  const strokeDashoffset = CIRCUMFERENCE - CIRCUMFERENCE * progress;
  const source: ImageSourcePropType = require("@/assets/images/image_example_1.png");

  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={SIZE}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={colors.primary} />
            <Stop offset="100%" stopColor={colors.secondary} />
            <Stop offset="50%" stopColor={colors.epic} />
          </LinearGradient>
        </Defs>
        <Circle
          stroke="#1E3A3F"
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />
        <Circle
          stroke="url(#grad)"
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${SIZE / 2}, ${SIZE / 2}`}
        />
      </Svg>
      <Image source={source} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    position: "absolute",
    width: SIZE - 30,
    height: SIZE - 30,
    borderRadius: (SIZE - 30) / 2,
  },
});
