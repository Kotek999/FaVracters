import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ImageSourcePropType,
  Button,
} from "react-native";
import { characters } from "@/data/characters";
import { useUserStore } from "@/store/hooks/useUserStore";
import { rarityColor } from "@/features/caseOpening/consts";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Divider, Input, Layout, ProgressBar } from "@ui-kitten/components";
import { router } from "expo-router";
import { FilterButton } from "@/features/collection/components/FilterButton";
import { CardItem } from "@/features/collection/components/CardItem";
import { HORIZONTAL_PADDING } from "@/features/collection/consts";
import { useCollectionFilters } from "@/features/collection/hooks/useCollectionFilters";

const CollectionScreen = () => {
  const {
    filterMode,
    setFilterMode,
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    openSearch,
    closeSearch,
    slideAnim,
    filteredData,
  } = useCollectionFilters(characters);

  const user = useUserStore((state) => state);

  const lockedImage: ImageSourcePropType = require("@/assets/images/image_example_1.png");

  return (
    <View
      style={{ flex: 1, top: 0, marginBottom: -50, backgroundColor: "#142c2c" }}
    >
      <View>
        <View
          style={{
            margin: 20,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 35,
              height: 35,
              backgroundColor: "#1f3f3fb9",
              borderWidth: 1,
              borderColor: "#246969",
              borderRadius: 10,
            }}
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons name="arrow-left" size={18} color="red" />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "white", fontSize: 18 }}>
              Kolekcja - {user.name}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: 35,
              height: 35,
              backgroundColor: "#1f3f3fb9",
              borderWidth: 1,
              borderColor: "#246969",
              borderRadius: 10,
            }}
            onPress={openSearch}
          >
            <MaterialIcons name="search" size={18} color="red" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            margin: 0,
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
        <Divider style={{ marginVertical: 14, backgroundColor: "#1e4e4e" }} />
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

      {isSearchOpen && (
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 130,
              left: 0,
              right: 0,
              zIndex: 1000,
              alignItems: "center",
            },
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Layout
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "#142c2c",
              padding: 16,
            }}
          >
            <Input
              style={{ width: "60%" }}
              placeholder="Wpisz nazwę postaci..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />

            <TouchableOpacity onPress={closeSearch}>
              <MaterialIcons name="close" size={32} color="lime" />
            </TouchableOpacity>
          </Layout>
        </Animated.View>
      )}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        renderItem={({ item }) => {
          const imageSource = item.isUnlocked
            ? { uri: item.image }
            : lockedImage;

          return (
            <CardItem
              item={item}
              isUnlocked={item.isUnlocked}
              count={item.count}
              imageSource={imageSource}
              rarityColor={rarityColor}
            />
          );
        }}
        ListEmptyComponent={
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "cyan" }}>Brak zdjęć</Text>
          </View>
        }
      />
    </View>
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#142c2c" }}>
      <CollectionScreen />
    </SafeAreaView>
  );
}
