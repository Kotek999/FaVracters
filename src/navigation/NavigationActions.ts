import { Navigation } from "./Navigation";
import { routes } from "./routes";

export const NavigationActions = {
  openHeroCard(id: string) {
    Navigation.push({
      pathname: "/card/[id]",
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
