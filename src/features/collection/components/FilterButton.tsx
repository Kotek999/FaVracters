import { Text, Pressable, StyleSheet } from "react-native";

interface FilterButtonProps {
  readonly label: string;
  readonly active: boolean;
  readonly onPress: () => void;
}

export const FilterButton = ({ label, active, onPress }: FilterButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.filterButton, active && styles.filterButtonActive]}
    >
      <Text style={[styles.filterText, active && styles.filterTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    backgroundColor: "#222",
    alignItems: "center",
  },

  filterButtonActive: {
    backgroundColor: "#444",
  },

  filterText: {
    color: "#888",
    fontWeight: "600",
  },

  filterTextActive: {
    color: "white",
  },
});
