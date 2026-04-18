import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { rarityColor } from "@/features/caseOpening/consts";
import { Title } from "../day/Title";
import { EpicHeroItemProps } from "../../types";
import { screenWidth } from "@/utils/dimensions";

export const EpicHeroItem = ({
  epicHeroReward,
  reward,
  isToday,
  day,
}: EpicHeroItemProps) => {
  if (!epicHeroReward) return null;

  const rewardImage = (
    <>
      {"rarity" in reward && (
        <Image
          source={{ uri: epicHeroReward.image }}
          style={{
            ...styles.image,
            borderColor: rarityColor[reward.rarity],
          }}
          resizeMode="cover"
        />
      )}
    </>
  );

  const rewardHeroTitle = (
    <>
      {"rarity" in reward && (
        <Text style={styles.epicRewardSubtitleText}>
          Epicki bohater - {epicHeroReward.name}
        </Text>
      )}
    </>
  );

  return (
    <>
      {epicHeroReward && (
        <View style={styles.mainContainer}>
          {rewardImage}
          <View>
            <Title isToday={isToday} day={day} />
            <Text style={styles.epicRewardTitleText}>Wielka Nagroda</Text>
            {rewardHeroTitle}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth / 1.3,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  image: {
    borderRadius: 10,
    borderWidth: 3,
    width: 90,
    height: 90,
  },
  epicRewardTitleText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.semibold,
  },
  epicRewardSubtitleText: {
    width: screenWidth / 2,
    color: colors.textGray,
    fontFamily: fonts.medium,
  },
});
