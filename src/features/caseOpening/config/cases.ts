import { Images } from "@/assets/images";
import { moviePool, gamePool } from "@/data/pools";
import { CaseItem } from "./types";

export const CASES = {
  movie: {
    id: "movie",
    category: "Transformers",
    price: 25,
    cases: {
      all: {
        key: "movie",
        id: "movie",
        name: "Transformers",
        description: "Zawiera podstawowe postacie",
        price: 25,
        pool: moviePool.all,
        image: Images.transformersAllCase,
      },
      autobots: {
        key: "movieAutobots",
        id: "autobots",
        name: "Transformers - Autoboty",
        description: "Zawiera tylko autoboty",
        price: 25,
        pool: moviePool.autobots,
        image: Images.transformersAutobotsCase,
      },
      decepticons: {
        key: "movieDecepticons",
        id: "decepticons",
        name: "Transformers - Deceptikony",
        description: "Zawiera tylko deceptikony",
        price: 25,
        pool: moviePool.decepticons,
        image: Images.transformersDecepticonsCase,
      },
    },
  },
  game: {
    id: "game",
    category: "Wiedźmin",
    price: 25,
    cases: {
      all: {
        key: "game",
        id: "game",
        name: "Wiedźmin",
        description: "Zawiera podstawowe postacie",
        price: 25,
        pool: gamePool.all,
        image: Images.witcherAllCase,
      },
      heroes: {
        key: "gameHeroes",
        id: "heroes",
        name: "Wiedźmin - Bohaterowie",
        description: "Zawiera tylko bohaterów",
        price: 25,
        pool: gamePool.heroes,
        image: Images.witcherHeroesCase,
      },
      monsters: {
        key: "gameMonsters",
        id: "monsters",
        name: "Wiedźmin - Potwory",
        description: "Zawiera tylko potwory",
        price: 25,
        pool: gamePool.monsters,
        image: Images.witcherMonstersCase,
      },
    },
  },
} as const;

export const CASES_LIST: readonly CaseItem[] = [
  {
    category: "movie",
    caseId: "all",
    config: CASES.movie.cases.all,
  },
  {
    category: "movie",
    caseId: "autobots",
    config: CASES.movie.cases.autobots,
  },
  {
    category: "movie",
    caseId: "decepticons",
    config: CASES.movie.cases.decepticons,
  },
  {
    category: "game",
    caseId: "all",
    config: CASES.game.cases.all,
  },
  {
    category: "game",
    caseId: "heroes",
    config: CASES.game.cases.heroes,
  },
  {
    category: "game",
    caseId: "monsters",
    config: CASES.game.cases.monsters,
  },
];
