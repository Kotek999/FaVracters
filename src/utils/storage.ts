import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage } from "zustand/middleware";

export const zustandStorage = createJSONStorage(() => AsyncStorage);
export const STORAGE_KEYS = {
  user: "user-storage",
  collection: "collection-storage",
};
