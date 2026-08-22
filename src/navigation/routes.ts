export const routes = {
  home: "/index",
  collection: "/collection",
  case: "/case",
  caseSpin: "/caseSpin",
  caseDetails: "/caseDetails",
  cardId: "/card/[id]",
  loginCalendar: "/loginCalendar",
  userProfile: "/userProfile",
  shop: "/shop",
  settings: "/settings",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
