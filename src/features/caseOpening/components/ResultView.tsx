import { View, Text, Pressable } from "react-native";
import { Card } from "./Card";
import { ResultViewProps } from "../types";

export const ResultView = ({
  winner,
  pityChance,
  onSpin,
  onBack,
}: ResultViewProps) => (
  <View style={{ alignItems: "center" }}>
    <Card item={winner} />

    <Text>{winner.name}</Text>

    <Pressable onPress={onSpin}>
      <Text>OPEN AGAIN</Text>
    </Pressable>

    <Pressable onPress={onBack}>
      <Text>BACK</Text>
    </Pressable>

    <Text>Pity +{Math.round(pityChance * 100)}%</Text>
  </View>
);
