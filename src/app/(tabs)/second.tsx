import { useCallback } from "react";
import { View, Text, FlatList, StyleSheet, ListRenderItem } from "react-native";
import { characters } from "@/data/characters";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar } from "@ui-kitten/components";
import { FilterButton } from "@/features/collection/components/FilterButton";
import { RenderCardItem } from "@/features/collection/components/CardItem";
import { HORIZONTAL_PADDING } from "@/features/collection/consts";
import { useCollectionFilters } from "@/features/collection/hooks/useCollectionFilters";
import type { CaseItem } from "@/features/caseOpening";

const CollectionScreen = () => {
  const { filterMode, setFilterMode, filteredData } =
    useCollectionFilters(characters);

  const renderItem: ListRenderItem<CaseItem> = useCallback(({ item }) => {
    return <RenderCardItem item={item} />;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <View
        style={{
          width: "100%",
          marginTop: 20,
          marginBottom: 10,
          paddingHorizontal: 20,
          paddingVertical: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>effeeffe</Text>
          <Text style={{ color: "white", fontSize: 18 }}>wddwdwdwwd</Text>
        </View>
        <View style={{ marginVertical: 10, alignItems: "center" }}>
          <ProgressBar
            style={{
              borderRadius: 10,
              height: 8,
              width: "100%",
              backgroundColor: "orange",
            }}
          />
        </View>
      </View>

      <View style={styles.filterContainer}>
        <FilterButton
          label="Wszystkie"
          active={filterMode === "all"}
          onPress={() => setFilterMode("all")}
        />
        <FilterButton
          label="Posiadane"
          active={filterMode === "owned"}
          onPress={() => setFilterMode("owned")}
        />
        <FilterButton
          label="Nieposiadane"
          active={filterMode === "missing"}
          onPress={() => setFilterMode("missing")}
        />
      </View>
      <FlatList
        removeClippedSubviews
        maxToRenderPerBatch={8}
        windowSize={5}
        initialNumToRender={8}
        updateCellsBatchingPeriod={50}
        data={filteredData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "cyan" }}>Brak zdjęć</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingTop: 10,
    paddingBottom: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginBottom: 10,
  },
});

export default function Second() {
  return <CollectionScreen />;
}
