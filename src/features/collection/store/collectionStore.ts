import { create } from "zustand";
import { persist } from "zustand/middleware";
import { zustandStorage } from "@/utils/storage";
import { immer } from "zustand/middleware/immer";
import {
  DUPLICATE_XP,
  MAX_CARD_LEVEL,
  getCardXpNeeded,
} from "@/systems/progression/cardXp";
import type {
  CollectionState,
  CollectionActions,
  CardProgress,
} from "../types";

const STORAGE_KEY = "collection-storage";

const initialState = (): Omit<CollectionState, CollectionActions> => ({
  items: {},
});

export const collectionStore = create<CollectionState>()(
  persist(
    immer((set, get) => ({
      items: {},

      addDuplicate: (id, rarity) => {
        const state = get();
        const current = state.items[id];
        const xpGain = DUPLICATE_XP[rarity];

        if (!current) {
          const newCard: CardProgress = {
            level: 1,
            xp: 0,
            copies: 1,
            rarity,
          };

          set({
            items: {
              ...state.items,
              [id]: newCard,
            },
          });

          return {
            isNew: true,
            xpGained: 0,
            currentLevel: 1,
          };
        }

        const updated: CardProgress = {
          ...current,
          xp: current.xp + xpGain,
          copies: current.copies + 1,
        };

        set({
          items: {
            ...state.items,
            [id]: updated,
          },
        });

        return {
          isNew: false,
          xpGained: xpGain,
          currentLevel: updated.level,
        };
      },

      levelUp: (id, rarity) => {
        set((s) => {
          const card = s.items[id];
          if (!card) return;

          if (card.level >= MAX_CARD_LEVEL) return;

          const needed = getCardXpNeeded(rarity, card.level);

          if (card.xp < needed) return;

          card.xp -= needed;
          card.level += 1;
        });
      },

      clear: () => {
        set(initialState());
      },

      clearStorage: async () => {
        await collectionStore.persist.clearStorage();
        set(initialState());
      },
    })),
    {
      name: STORAGE_KEY,
      storage: zustandStorage,

      partialize: (state) => ({
        items: state.items,
      }),
    },
  ),
);
