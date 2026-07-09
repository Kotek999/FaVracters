import { toast } from "@/components/ui/Toast/ToastService";
import { NewHeroCardProps } from "@/features/caseOpening";

export const useToastActions = () => {
  const buyCase = (spendEnergy: (amount: number) => boolean) => {
    const success = spendEnergy(25);

    if (!success) {
      toast.error(
        "Zakup nieudany - Brak energii",
        "Zdobądź lub kup potrzebną walutę",
      );
      return;
    } else {
      toast.success("Zakup udany", "Dodano nową zawartość");
    }
  };

  const newHeroCard = ({ result, item, playerXp }: NewHeroCardProps) => {
    if (result.isNew) {
      toast.info(
        "Nowa karta!",
        `${item.name} dodana do kolekcji\nLevel ${result.currentLevel}`,
      );
    } else {
      toast.info("Duplikat!", `+${result.xpGained} XP\n+${playerXp} player XP`);
    }
  };

  const onPressClaimDailyReward = (claimDailyReward: () => boolean) => {
    const reward = claimDailyReward();
    if (reward) {
      toast.success("Dzienna nagroda", "Otrzymano 1 skrzynkę i 10 energii!");
    }
  };

  return {
    buyCase,
    newHeroCard,
    onPressClaimDailyReward,
  };
};
