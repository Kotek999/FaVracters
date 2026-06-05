import { View, StyleSheet } from "react-native";
import { CARD_ITEM_MARGIN, CARD_ITEM_WIDTH } from "../../consts";
import { rarityColor } from "@/features/caseOpening/consts";
import { colors } from "@/theme/colors";
import { CardUnlocked } from "./CardUnlocked";
import { CardUnlockedItemProps } from "@/features/collection/types";

export const CardUnlockedItem = ({
  imageSource,
  cardLevel,
  xp,
  xpNeeded,
  canLevelUp,
  onLevelUp,
  onPress,
  item,
}: CardUnlockedItemProps) => {
  return (
    <View
      style={{
        ...styles.cardContainer,
        ...styles.cardUnlockedContainer,
        borderColor: rarityColor[item.rarity],
        shadowColor: rarityColor[item.rarity],
      }}
    >
      <View style={styles.imageContainer}>
        <CardUnlocked
          imageSource={imageSource}
          cardName={item.name}
          cardRarity={item.rarity}
          cardLevel={cardLevel}
          xp={xp}
          xpNeeded={xpNeeded}
          canLevelUp={canLevelUp}
          onLevelUp={onLevelUp}
          onPress={onPress}
        />
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
  cardUnlockedContainer: {
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderRadius: 16,
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
