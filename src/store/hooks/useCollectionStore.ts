import { create } from "zustand";
import { persist } from "zustand/middleware";
import { zustandStorage } from "../storage";

export interface CollectionState {
  readonly items: Record<string, number>;
  readonly addItem: (id: string) => { isDuplicate: boolean; count: number };
  readonly clear: () => void;
  readonly clearStorage: () => Promise<void>;
}

const STORAGE_KEY = "collection-storage";

const initialState = (): Pick<CollectionState, "items"> => ({
  items: {},
});

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set) => ({
      ...initialState(),

      addItem: (id: string) => {
        let result = { isDuplicate: false, count: 0 };

        set((state) => {
          const current = state.items[id] ?? 0;
          const newCount = current + 1;

          result = {
            isDuplicate: current > 0,
            count: newCount,
          };

          return {
            items: {
              ...state.items,
              [id]: newCount,
            },
          };
        });

        return result;
      },

      clear: () => {
        set(initialState());
      },

      clearStorage: async () => {
        await useCollectionStore.persist.clearStorage();
        set(initialState());
      },
    }),
    {
      name: STORAGE_KEY,
      storage: zustandStorage,

      partialize: (state) => ({
        items: state.items,
      }),
    },
  ),
);
