import Svg, { Polygon, Text as SvgText } from "react-native-svg";
import { rarityColor } from "@/features/caseOpening/consts";
import { getDiamondGeometry } from "../utils/getDiamondGeometry";
import { RARITY_CORNERS } from "../consts";
import type { DiamondLevelProps, Corner, PolygonConfig } from "../types";

export const DiamondLevel = ({ item, SIZE = 50, level }: DiamondLevelProps) => {
  const geo = getDiamondGeometry(SIZE);
  const r = SIZE / 2;

  const CORNER_POLYGONS: Record<Corner, PolygonConfig> = {
    top: { points: geo.topPoints },
    right: { points: geo.rightPoints },
    bottom: { points: geo.bottomPoints },
    left: { points: geo.leftPoints },
  };
  return (
    <Svg
      width={SIZE}
      height={SIZE}
      style={{ position: "absolute", top: 5, left: 5 }}
      stroke="white"
      strokeWidth={1}
    >
      <Polygon
        points={geo.diamondPoints}
        fill="#246969"
        stroke="white"
        strokeWidth={0.8}
      />

      {RARITY_CORNERS[item.rarity].map((corner: Corner) => {
        const polygon = CORNER_POLYGONS[corner];

        return (
          <Polygon
            key={corner}
            points={polygon.points}
            fill={rarityColor[item.rarity]}
          />
        );
      })}
      <SvgText
        x={r}
        y={geo.textY}
        fontSize={geo.fontSize}
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        {level}
      </SvgText>
    </Svg>
  );
};
