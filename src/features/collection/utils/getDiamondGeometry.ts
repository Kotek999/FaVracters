import { createDiamondGeometry } from "./createDiamondGeometry";
import type { DiamondGeometry } from "../types";

const geometryCache = new Map<number, DiamondGeometry>();

export const getDiamondGeometry = (SIZE: number): DiamondGeometry => {
  let geometry = geometryCache.get(SIZE);

  if (!geometry) {
    geometry = createDiamondGeometry(SIZE);
    geometryCache.set(SIZE, geometry);
  }

  return geometry;
};
