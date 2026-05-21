import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "@ui-kitten/components";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getRarityLabel } from "@/features/caseOpening/utils/getRarityLabel";
import { rarityColor } from "@/features/caseOpening/consts";
import { DroppedCardProps } from "@/features/caseOpening/types";

export const HeroImageCardContent = ({ winner }: DroppedCardProps) => {
  return (
    <>
      <Image
        source={{ uri: winner.image as string }}
        style={styles.image}
        resizeMode="cover"
        alt="image"
      />
      <LinearGradient
        colors={[colors.backgroundDarkGreen, colors.backgroundDarkBlue]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        style={styles.gradient}
      >
        <View style={styles.heroNameContainer}>
          <View style={styles.heroNameWithDividerContainer}>
            <Text style={styles.heroNameText}>{winner.name}</Text>
            <Divider style={styles.divider} />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.badge}>
        <MaterialCommunityIcons
          name="star-circle"
          size={22}
          color={rarityColor[winner.rarity]}
        />
        <Text style={styles.countText}>{getRarityLabel(winner.rarity)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    margin: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: colors.backgroundBlur,
  },
  heroNameContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heroNameWithDividerContainer: {
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  heroNameText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 26,
    letterSpacing: 1.5,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
  },
  divider: {
    width: 60,
    height: 2.5,
    backgroundColor: colors.secondary,
  },
  countText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 14,
    letterSpacing: 2.5,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
  },
  badge: {
    position: "absolute",
    top: 20,
    left: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: colors.backgroundNavDarkGreen,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
