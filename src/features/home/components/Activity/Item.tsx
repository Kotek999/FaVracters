import { memo } from "react";
import { BlurView } from "expo-blur";
import { View, StyleSheet } from "react-native";
import { Content as ActivityContent } from "./Content";
import { colors } from "@/theme/colors";
import { Activity } from "@/features/user/types";

export const Item = memo(
  ({ activity, index }: { activity: Activity; index: number }) => {
    const opacity = 1 - index * 0.25;

    return (
      <View style={styles.mainContainer}>
        <BlurView
          intensity={8}
          tint="light"
          style={{ ...styles.blurContainer, opacity }}
        >
          <ActivityContent activity={activity} />
        </BlurView>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  mainContainer: {
    top: 20,
    marginBottom: 14,
  },
  blurContainer: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.backgroundBlur,
    borderWidth: 1.5,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
});
