import { StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { characters } from "@/data/characters";
import { SafeAreaView } from "react-native-safe-area-context";
import { HORIZONTAL_PADDING } from "@/features/collection/consts";
import { useCollectionFilters } from "@/features/collection/hooks/useCollectionFilters";
import { CardsProgress } from "./CardsProgress";
import { FilterButtons } from "./FilterButton/FilterButtons";
import { ListEmptyHeroCards } from "./ListEmptyHeroCards";
import { useFlashListActions } from "../hooks/useFlashListActions";
import { useCollectionStore } from "../store/useCollectionStore";

export const Collection = () => {
  const { ownedCardsCount } = useCollectionStore();

  const { filterMode, setFilterMode, filteredData } =
    useCollectionFilters(characters);

  const { renderItem, keyExtractor } = useFlashListActions();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <CardsProgress />
      {ownedCardsCount > 0 && (
        <FilterButtons filterMode={filterMode} setFilterMode={setFilterMode} />
      )}
      <FlashList
        key={filterMode}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={styles.flashListContentContainer}
        showsVerticalScrollIndicator={false}
        drawDistance={200}
        removeClippedSubviews
        ListEmptyComponent={<ListEmptyHeroCards />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flashListContentContainer: {
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingTop: 10,
    paddingBottom: 20,
  },
});
