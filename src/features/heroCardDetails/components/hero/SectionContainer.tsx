import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { colors } from "@/theme/colors";
import { screenWidth } from "@/utils/dimensions";
import { RatingBadge } from "./RatingBadge";
import { SectionContainerProps } from "@/features/heroCardDetails/types";

export const SectionContainer = ({
  children,
  isRatingBadge,
  cardRating,
}: SectionContainerProps) => {
  return (
    <View
      style={{
        ...styles.mainContainer,
        marginVertical: isRatingBadge ? 22 : 5,
      }}
    >
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <View style={styles.contentContainer}>{children}</View>
      </BlurView>
      {isRatingBadge && <RatingBadge cardRating={cardRating as number} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth - 40,
  },
  blurContainer: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 20,
    backgroundColor: colors.backgroundBlur,
    borderWidth: 0,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
