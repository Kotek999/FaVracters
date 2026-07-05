import { getCharactersEngine } from "./characters.engine";

export const CharactersRepo = {
  getById(id: string) {
    return getCharactersEngine()[id];
  },

  getAll() {
    return Object.values(getCharactersEngine());
  },

  getMap() {
    return getCharactersEngine();
  },
};
