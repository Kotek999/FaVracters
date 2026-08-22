import { View, StyleSheet } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { useCardProgress } from "@/features/collection/hooks/useCardProgress";
import { HeaderTitle } from "./HeaderTitle";
import { CardImage } from "./CardImage";
import { CardNameWithStarsAndLevel } from "./CardNameWithStarsAndLevel";
import { MainInfo } from "./MainInfo";
import { SectionTitle } from "./SectionTitle";
import { Stats } from "./Stats";
import { Lore } from "./Lore";
import { CardProps as CardContentProps } from "@/features/caseOpening/types";

export const CardContent = ({ card }: CardContentProps) => {
  const { progress } = useCardProgress({ cardId: card.id });

  const cardLevel = progress?.level ?? 1;

  return (
    <SafeAreaWithScrollView>
      <View style={styles.mainContainer}>
        <HeaderTitle />
        <CardImage cardRarity={card.rarity} cardImage={card.image} />
        <CardNameWithStarsAndLevel
          cardName={card.name}
          cardLevel={cardLevel}
          cardStars={card.stars}
        />
        <SectionTitle
          title="Podstawowe informacje"
          iconName="information-box"
        />
        <MainInfo
          cardRole={card.role}
          cardRarity={card.rarity}
          cardUniverse={card.universe}
          cardRace={card.race}
        />
        <SectionTitle title="Dane wydajnościowe" iconName="chart-box" />
        <Stats cardStats={card.stats} cardRating={card.rating} />
        <SectionTitle title="Lore bohatera" iconName="book-open-page-variant" />
        <Lore cardLore={card.lore} cardNames={[card.name]} />
      </View>
    </SafeAreaWithScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth - 40,
    justifyContent: "center",
  },
  cardLevelText: {
    fontSize: 20,
    textAlign: "center",
    color: colors.backgroundLightGreen,
    fontFamily: fonts.bold,
    textTransform: "uppercase",
  },
  shadowText: {
    fontFamily: fonts.bold,
    textShadowColor: colors.opacityDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});
