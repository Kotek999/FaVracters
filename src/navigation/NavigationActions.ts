import { CaseType } from "@/features/caseOpening/config/types";
import { Navigation } from "./Navigation";
import { routes } from "./routes";
import { CaseRef } from "@/features/caseOpening/config/types";

export const NavigationActions = {
  openCase: (ref: CaseRef) => {
    Navigation.push({
      pathname: routes.caseSpin,
      params: {
        category: ref.category,
        caseId: ref.caseId,
      },
    });
  },
  openCaseDetails: (category: CaseType, caseId: string) => {
    Navigation.push({
      pathname: routes.caseDetails,
      params: {
        category,
        caseId,
      },
    });
  },
  openHeroCard(id: string) {
    Navigation.push({
      pathname: routes.cardId,
      params: { id },
    });
  },
  openHero(id: string, isOwned: boolean) {
    if (!isOwned) {
      Navigation.push(routes.case);
      return;
    }

    this.openHeroCard(id);
  },
};
