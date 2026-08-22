import { screenWidth } from "@/utils/dimensions";

const CARD_WIDTH = Math.min(screenWidth * 0.82, 380);
const CARD_GAP = 16;
const ITEM_OFFSET = CARD_WIDTH + CARD_GAP;
const SIDE_PADDING = (screenWidth - CARD_WIDTH) / 10;

export { CARD_WIDTH, CARD_GAP, ITEM_OFFSET, SIDE_PADDING };
