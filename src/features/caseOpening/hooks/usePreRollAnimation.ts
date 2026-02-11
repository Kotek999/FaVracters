import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { useState } from "react";
import { SV } from "../types";

export function usePreRollAnimation(move: number) {
  const [visible, setVisible] = useState(true);

  const make = () => ({
    x: useSharedValue(0),
    y: useSharedValue(0),
    r: useSharedValue(0),
  });

  const tl = make();
  const tr = make();
  const bl = make();
  const br = make();

  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const makeStyle = (x: SV, y: SV, r: SV) =>
    useAnimatedStyle(() => ({
      opacity: opacity.value,
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { rotate: `${r.value}deg` },
        { scale: scale.value },
      ],
    }));

  const styleTL = makeStyle(tl.x, tl.y, tl.r);
  const styleTR = makeStyle(tr.x, tr.y, tr.r);
  const styleBL = makeStyle(bl.x, bl.y, bl.r);
  const styleBR = makeStyle(br.x, br.y, br.r);

  const animate = () => {
    tl.x.value = withTiming(-move);
    tl.y.value = withTiming(-move);

    tr.x.value = withTiming(move);
    tr.y.value = withTiming(-move);

    bl.x.value = withTiming(-move);
    bl.y.value = withTiming(move);

    br.x.value = withTiming(move, {}, () => runOnJS(setVisible)(false));
    br.y.value = withTiming(move);

    opacity.value = withTiming(0);
  };

  const reset = () => {
    [tl, tr, bl, br].forEach(({ x, y }) => {
      x.value = 0;
      y.value = 0;
    });

    opacity.value = 1;

    setVisible(true);
  };

  return {
    visible,
    styleTL,
    styleTR,
    styleBL,
    styleBR,
    animate,
    reset,
  } as const;
}
