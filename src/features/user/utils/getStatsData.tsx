import { Text } from "react-native";
import { formatNumberShort } from "./formatNumberShort";
import { TOTAL_CARDS } from "@/systems/progression/card";
import { StatsDataProps, Stats } from "../types";

export const getStatsData = ({
  ownedCardsCount,
  style,
  energy,
}: StatsDataProps): Stats[] => [
  {
    icon: "cards",
    value: (
      <>
        {ownedCardsCount} <Text style={style}>/ {TOTAL_CARDS}</Text>
      </>
    ),
    label: "Zebrane karty",
  },
  {
    icon: "lightning-bolt",
    value: formatNumberShort(energy),
    label: "Energia",
  },
];
