import { IconName } from "@/types/global";

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
