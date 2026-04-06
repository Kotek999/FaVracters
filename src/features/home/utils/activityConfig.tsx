import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@/theme/colors";
import { rarityColor } from "@/features/caseOpening/consts";
import { FontAwesome6 } from "@expo/vector-icons";
import { createActivityConfig } from "./createActivityConfig";

export const activityConfig = createActivityConfig({
  HERO_UNLOCK: {
    title: (activity) => `Znalazłeś ${activity.rarity.toUpperCase()} Hero!`,
    description: (activity) => `${activity.heroName} dodany do kolekcji`,
    backgroundColor: colors.backgroundDarkGreen,
    icon: (activity) => (
      <MaterialCommunityIcons
        name="star-shooting"
        size={20}
        color={rarityColor[activity.rarity]}
      />
    ),
  },
  LEVEL_UP: {
    title: (activity) => `Nowy poziom: ${activity.level}`,
    description: (activity) => activity.reward ?? "",
    backgroundColor: colors.backgroundBrown,
    icon: () => (
      <MaterialCommunityIcons name="progress-star" size={20} color="#f8c51f" />
    ),
  },
  REWARD_CLAIM: {
    title: () => "Nagroda odebrana",
    description: (activity) => `+${activity.energy} Energii`,
    backgroundColor: colors.backgroundDarkGreen,
    icon: () => (
      <FontAwesome6 name="money-bills" size={20} color={colors.primary} />
    ),
  },
});
