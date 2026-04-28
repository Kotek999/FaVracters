import { StyleSheet, View, Text } from "react-native";
import { AvatarWithLevel } from "@/features/user/components/AvatarWithLevel";
import { getUserTitle } from "@/features/user/utils/getUserTitle";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { AvatarItemProps } from "../types";

export const AvatarItem = ({ level, progress, userName }: AvatarItemProps) => {
  return (
    <View style={styles.mainContainer}>
      <AvatarWithLevel level={level} progress={progress} />
      <View style={styles.container}>
        <Text style={styles.userNameText}>@{userName}</Text>
        <Text style={styles.userTitleText}>{getUserTitle(level)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    gap: 3,
  },
  userNameText: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
  userTitleText: {
    opacity: 0.6,
    textAlign: "center",
    fontSize: 12,
    fontFamily: fonts.semibold,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: colors.secondary,
  },
});
