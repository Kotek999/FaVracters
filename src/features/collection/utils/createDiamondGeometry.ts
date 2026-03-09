import type { DiamondGeometry } from "../types";

export const createDiamondGeometry = (SIZE: number): DiamondGeometry => {
  const r = SIZE / 2;
  const offset = SIZE * 0.18;

  const top = { x: r, y: 0 };
  const right = { x: SIZE, y: r };
  const bottom = { x: r, y: SIZE };
  const left = { x: 0, y: r };

  const toStr = (p: { x: number; y: number }[]) =>
    p.map(({ x, y }) => `${x},${y}`).join(" ");

  return {
    diamondPoints: toStr([top, right, bottom, left]),

    topPoints: toStr([
      top,
      { x: top.x - offset, y: top.y + offset },
      { x: top.x + offset, y: top.y + offset },
    ]),

    rightPoints: toStr([
      right,
      { x: right.x - offset, y: right.y - offset },
      { x: right.x - offset, y: right.y + offset },
    ]),

    bottomPoints: toStr([
      bottom,
      { x: bottom.x - offset, y: bottom.y - offset },
      { x: bottom.x + offset, y: bottom.y - offset },
    ]),

    leftPoints: toStr([
      left,
      { x: left.x + offset, y: left.y - offset },
      { x: left.x + offset, y: left.y + offset },
    ]),

    textY: r + SIZE * 0.12,
    fontSize: SIZE / 3,
  };
};
