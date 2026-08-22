import { getCharactersEngine } from "./characters.engine";

export const CharactersRepo = {
  getById(id: string) {
    return getCharactersEngine().byId[id];
  },

  getAll() {
    return getCharactersEngine().all;
  },

  getMap() {
    return getCharactersEngine().byId;
  },

  getCollection(name: string) {
    return getCharactersEngine().collections[name];
  },
} as const;
