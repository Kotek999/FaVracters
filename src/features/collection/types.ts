import type { CaseItem } from "../caseOpening";

export type FilterMode = "all" | "owned" | "missing";
export type Corner = "top" | "right" | "bottom" | "left";

export interface DiamondGeometry {
  diamondPoints: string;
  topPoints: string;
  rightPoints: string;
  bottomPoints: string;
  leftPoints: string;
  textY: number;
  fontSize: number;
}

export interface CardItemProps {
  readonly item: CaseItem;
}

export interface DiamondLevelProps {
  item: CaseItem;
  SIZE?: number;
  level: number;
}

export interface PolygonConfig {
  points: string;
}

export interface ProgressBarAnimationsProps {
  progress: number;
  canLevelUp: boolean;
}

export interface ProgressBarProps {
  xp: number;
  xpNeeded: number;
  height?: number;
  canLevelUp: boolean;
  handleLevelUp: () => void;
}
