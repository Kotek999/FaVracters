import { TouchableOpacity } from "react-native";
import { AnimatedProgressBar } from "./AnimatedProgressBar";
import { ProgressBarProps } from "@/features/collection/types";

export const ProgressBar = ({
  xp = 0,
  xpNeeded = 100,
  height = 24,
  canLevelUp,
  onLevelUp = () => {},
}: ProgressBarProps) => {
  const activeOpacity: number = canLevelUp ? 0.7 : 1;
  const disabled = canLevelUp ? false : true;

  const onPressLevelUp = () => {
    if (canLevelUp) onLevelUp();
  };

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPressLevelUp}
    >
      <AnimatedProgressBar
        xp={xp}
        xpNeeded={xpNeeded}
        height={height}
        canLevelUp={canLevelUp}
      />
    </TouchableOpacity>
  );
};
