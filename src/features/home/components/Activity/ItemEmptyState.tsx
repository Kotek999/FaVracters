import { Text } from "@ui-kitten/components";
import { BlurView } from "expo-blur";
import { View, StyleSheet } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { ItemEmptyStateProps } from "../../types";

export const ItemEmptyState = ({ title, subtitle }: ItemEmptyStateProps) => {
  return (
    <View style={styles.mainContainer}>
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>{subtitle}</Text>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

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
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.semibold,
  },
  subtitleText: {
    color: colors.textGray,
    fontSize: 12,
    fontFamily: fonts.medium,
  },
});
