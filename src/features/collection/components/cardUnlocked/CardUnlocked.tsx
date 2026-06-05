import { View, Image, StyleSheet } from "react-native";
import { ProgressBar } from "./progressBar/ProgressBar";
import { GradientFooter } from "./GradientFooter";
import { TouchableDetailsBadge } from "./TouchableDetailsBadge";
import { CardUnlockedProps } from "@/features/collection/types";
import { screenHeight } from "@/utils/dimensions";

export const CardUnlocked = ({
  imageSource,
  cardLevel,
  xp,
  xpNeeded,
  onLevelUp,
  canLevelUp,
  cardRarity,
  cardName,
  onPress,
}: CardUnlockedProps) => {
  return (
    <>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.progressBarContainer}>
        <ProgressBar
          xp={xp}
          xpNeeded={xpNeeded}
          canLevelUp={canLevelUp}
          onLevelUp={onLevelUp}
        />
      </View>
      <GradientFooter
        cardRarity={cardRarity}
        cardName={cardName}
        cardLevel={cardLevel}
      />
      <TouchableDetailsBadge onPress={onPress} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  progressBarContainer: {
    position: "absolute",
    bottom: screenHeight / 10,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
});
