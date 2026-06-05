import { View, StyleSheet } from "react-native";
import { FilterButton } from "./FilterButton";
import { filterButtonsData } from "./filterButtonsData";
import type { FilterButtonsProps } from "@/features/collection/types";

export const FilterButtons = ({
  filterMode,
  setFilterMode,
}: FilterButtonsProps) => {
  return (
    <View style={styles.filterContainer}>
      {filterButtonsData.map((button, index) => (
        <FilterButton
          key={index}
          label={button.label}
          active={filterMode === button.filterMode}
          onPress={() => setFilterMode(button.filterMode)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginBottom: 10,
  },
});
