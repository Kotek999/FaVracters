import { useLocalSearchParams } from "expo-router";
import { CharactersRepo } from "@/data/characters.repo";
import { CardSpinner } from "./hero/CardSpinner";
import { CardContent } from "./hero/CardContent";
import { CardNotFound } from "./hero/CardNotFound";

export const HeroCardDetails = () => {
  const { id } = useLocalSearchParams();
  const card = CharactersRepo.getById(id as string);

  if (!card) {
    return <CardSpinner />;
  }

  return <>{card ? <CardContent card={card} /> : <CardNotFound />}</>;
};
