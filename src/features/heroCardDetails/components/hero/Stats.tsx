import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { ProgressBar } from "@/components/ui/ProgressBar/ProgressBar";
import { SectionContainer } from "./SectionContainer";
import { MAX_STAT } from "@/features/heroCardDetails/consts";
import { useCardStats } from "@/features/heroCardDetails/hooks/useCardStats";
import { StatsProps } from "@/features/heroCardDetails/types";
import { IconName } from "@/types/global";

export const Stats = ({ cardStats, cardRating }: StatsProps) => {
  const { characterStats } = useCardStats({ cardStats });

  return (
    <SectionContainer isRatingBadge cardRating={cardRating}>
      {characterStats.map((stat, index) => (
        <View key={index} style={styles.positionContainer}>
          <View style={styles.statsWithProgressBarsContainer}>
            <View style={styles.positionContainer}>
              <View style={styles.statsTitleContainer}>
                <MaterialCommunityIcons
                  name={stat.iconName as IconName}
                  size={20}
                  color={colors.textGray}
                />
                <Text style={styles.statsTitleText}>{stat.title}</Text>
              </View>
              <Text style={styles.statsValueText}>
                {stat.value}
                <Text style={styles.statsMaxText}>/{MAX_STAT}</Text>
              </Text>
            </View>
            <ProgressBar
              height={8}
              progress={stat.progressBar.progress}
              colors={stat.progressBar.colors}
            />
          </View>
        </View>
      ))}
    </SectionContainer>
  );
};

const styles = StyleSheet.create({
  positionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  statsWithProgressBarsContainer: {
    flex: 1,
    flexDirection: "column",
  },
  statsTitleContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  statsTitleText: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: fonts.semibold,
    color: colors.textGray,
    textTransform: "uppercase",
  },
  statsValueText: {
    fontSize: 17,
    fontFamily: fonts.semibold,
    color: colors.white,
    textShadowColor: colors.opacityDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  statsMaxText: {
    fontSize: 11,
    letterSpacing: 1.5,
    fontFamily: fonts.semibold,
    color: colors.textGray,
    textShadowColor: colors.opacityDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});
