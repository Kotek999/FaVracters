import { Text } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { timeAgo } from "@/systems/time/timeAgo";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { callUI } from "../../utils/callUI";
import { Activity } from "@/features/user/types";

export const Content = ({ activity }: { activity: Activity }) => {
  const ui = callUI(activity);
  const ago = timeAgo(activity.createdAt);

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: ui.backgroundColor,
        }}
      >
        {ui.icon}
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.titleText}>{ui.title}</Text>
        <Text style={styles.descriptionText}>{ui.description}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{ago}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionContainer: {
    flex: 1,
    marginRight: 8,
  },
  titleText: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.semibold,
  },
  descriptionText: {
    color: colors.textGray,
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  timeContainer: {
    flexShrink: 1,
    maxWidth: "50%",
  },
  timeText: {
    color: colors.textGray,
    fontSize: 13,
    textTransform: "uppercase",
    textAlign: "center",
    flexWrap: "wrap",
    fontStyle: "italic",
  },
});
