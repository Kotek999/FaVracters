import { View, Text, StyleSheet, Image } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { SIZE, STROKE_WIDTH, RADIUS, CIRCUMFERENCE } from "../consts";

export const AvatarWithLevel = () => {
  const level: number = 0;
  const progress: number = 0.75;
  const strokeDashoffset = CIRCUMFERENCE - CIRCUMFERENCE * progress;

  return (
    <View style={styles.container}>
      {/* ring */}
      <Svg width={SIZE} height={SIZE}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* <Stop offset="0%" stopColor="#00F5FF" />
            <Stop offset="100%" stopColor="#00C2FF" /> */}
            <Stop offset="0%" stopColor="#ff4800" />
            <Stop offset="100%" stopColor="#d45a35" />
          </LinearGradient>
        </Defs>

        {/* background circle */}
        <Circle
          stroke="#1E3A3F"
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />

        {/* progress circle */}
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

      {/* avatar */}
      <Image
        source={require("@/assets/images/image_example_1.png")}
        style={styles.avatar}
      />

      {/* level badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>LVL {level}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
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
  badge: {
    position: "absolute",
    bottom: -10,
    // backgroundColor: "#00F5FF",
    backgroundColor: "#ff4800",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontWeight: "bold",
    color: "#00363D",
  },
});
