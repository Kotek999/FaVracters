import { CollectionState, CollectionActions } from "../types";

const state = {
  items: {},
  ownedCardsCount: 0,
  highestCardRarity: null,
};

export const initialState = (): Omit<CollectionState, CollectionActions> => ({
  ...state,
});
