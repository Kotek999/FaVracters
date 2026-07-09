import { router, type Href } from "expo-router";

export const Navigation = {
  push(href: Href) {
    router.push(href);
  },

  replace(href: Href) {
    router.replace(href);
  },

  back() {
    router.back();
  },

  canGoBack() {
    return router.canGoBack();
  },

  dismiss() {
    router.dismiss();
  },
};
