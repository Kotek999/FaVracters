import { FilterButtonsData } from "@/features/collection/types";

export const filterButtonsData: FilterButtonsData = [
  {
    label: "Wszystkie",
    filterMode: "all",
  },
  {
    label: "Posiadane",
    filterMode: "owned",
  },
  {
    label: "Nieposiadane",
    filterMode: "missing",
  },
];
