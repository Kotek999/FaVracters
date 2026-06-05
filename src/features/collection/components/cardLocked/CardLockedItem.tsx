import { View, StyleSheet } from "react-native";
import {
  CARD_ITEM_WIDTH,
  CARD_ITEM_MARGIN,
} from "@/features/collection/consts";
import { colors } from "@/theme/colors";
import { CardLocked } from "./CardLocked";
import { CardLockedItemProps } from "@/features/collection/types";

export const CardLockedItem = ({
  imageSource,
  cardRarity,
}: CardLockedItemProps) => {
  return (
    <View style={{ ...styles.cardContainer, ...styles.cardLockedContainer }}>
      <View style={styles.imageContainer}>
        <CardLocked imageSource={imageSource} cardRarity={cardRarity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_ITEM_WIDTH,
    margin: CARD_ITEM_MARGIN,
    aspectRatio: 0.7,
  },
  cardLockedContainer: {
    borderRadius: 16,
    opacity: 0.8,
    overflow: "hidden",
    borderStyle: "dashed",
    backgroundColor: colors.backgroundBlur,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    shadowColor: colors.borderSecondary,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.opacityDark,
    justifyContent: "center",
    alignItems: "center",
  },
});
