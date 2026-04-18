import { Text } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { getTimerValues } from "../../utils/getTimerValues";
import { TimerProps } from "../../types";

export const Timer = ({ hours, minutes, seconds }: TimerProps) => {
  const boxes = getTimerValues({ hours, minutes, seconds });

  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {boxes.map((item, index) => {
          return (
            <View key={index} style={styles.boxContainer}>
              <Text style={styles.valueText}>{format(item.value)}</Text>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxContainer: {
    width: "30%",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: colors.borderPrimary,
    backgroundColor: colors.backgroundPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    textAlign: "center",
    width: "100%",
    color: colors.primary,
    fontFamily: fonts.semibold,
    fontVariant: ["tabular-nums"],
    letterSpacing: 0.5,
    fontSize: 18,
  },
  titleText: {
    color: colors.textGray,
    fontSize: 12,
    fontFamily: fonts.medium,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
