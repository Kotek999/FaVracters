import { CASES } from "./cases";

export type CaseType = "movie" | "game";
export type CaseCategory = keyof typeof CASES;

export type Case = {
  [C in CaseCategory]: {
    category: C;
    caseId: keyof (typeof CASES)[C]["cases"];
    config: (typeof CASES)[C]["cases"][keyof (typeof CASES)[C]["cases"]];
  };
}[CaseCategory];

export type CaseId<C extends CaseCategory> = Extract<
  keyof (typeof CASES)[C]["cases"],
  string
>;

type CaseConfig<C extends CaseCategory> = (typeof CASES)[C]["cases"][CaseId<C>];

export type CaseItem =
  | {
      category: "movie";
      caseId: CaseId<"movie">;
      config: CaseConfig<"movie">;
    }
  | {
      category: "game";
      caseId: CaseId<"game">;
      config: CaseConfig<"game">;
    };

export type CasesState = {
  [C in CaseCategory]: {
    [K in CaseId<C>]: number;
  };
};

export type CaseRef =
  | {
      category: "movie";
      caseId: CaseId<"movie">;
    }
  | {
      category: "game";
      caseId: CaseId<"game">;
    };
