import { StyleSheet, View } from "react-native";
import { colors } from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressLinesProps } from "../types";

export const ProgressLines = ({ total, current }: ProgressLinesProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {Array.from({ length: total }).map((_, index) => {
          const isActive = index < current;

          return isActive ? (
            <LinearGradient
              key={index}
              colors={[colors.backgroundLightGreen, colors.primary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.bar}
            />
          ) : (
            <View key={index} style={[styles.bar, styles.inactive]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 0,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  bar: {
    width: 10,
    height: 24,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.7,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
  },
  inactive: {
    backgroundColor: colors.backgroundDarkGreen,
    shadowOpacity: 0,
    elevation: 0,
  },
});
