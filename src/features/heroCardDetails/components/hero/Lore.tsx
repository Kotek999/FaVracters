import { SectionContainer } from "./SectionContainer";
import { HighlightedText } from "@/components/ui/HighlightedText/HighlightedText";
import { LoreProps } from "@/features/heroCardDetails/types";

export const Lore = ({ cardLore, cardNames }: LoreProps) => {
  return (
    <SectionContainer isRatingBadge={false}>
      <HighlightedText text={cardLore} names={cardNames} />
    </SectionContainer>
  );
};
