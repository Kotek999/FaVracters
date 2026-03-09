import { screenWidth } from "@/utils/dimensions";
import { Rarity } from "../caseOpening";
import type { Corner } from "./types";

export const HORIZONTAL_PADDING: number = 8;
export const CARD_ITEM_MARGIN: number = 8;
export const CARD_ITEM_WIDTH =
  (screenWidth - HORIZONTAL_PADDING * 2 - CARD_ITEM_MARGIN * 4) / 2;

export const RARITY_CORNERS = {
  common: ["top"],
  rare: ["left", "right"],
  epic: ["top", "left", "right"],
  legendary: ["top", "right", "bottom", "left"],
} as const satisfies Record<Rarity, readonly Corner[]>;
