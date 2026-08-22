import { IconName } from "@/types/global";
import { CaseItem } from "@/features/caseOpening/config/types";

export interface HeaderProps {
  energy: number;
}

export interface CategoryTitleProps {
  title: string;
}

export interface EnergyToBuyCardProps {
  iconName: IconName;
  value: number;
  description: string;
  price: string;
  onPress: () => void;
}

export interface PrimaryCaseToBuyProps {
  onPress: () => void;
}

export interface PrimaryCaseToBuyProps {
  item: CaseItem;
  onPress: () => void;
}

export interface DotsProps {
  activeIndex: number;
}
