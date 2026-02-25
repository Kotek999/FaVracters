import { View, Text, Image, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppScrollView } from "@/components/layout/AppScrollView";
import { characters } from "@/data/characters";
import { screenWidth } from "@/utils/dimensions";
import { useMemo } from "react";

const CaseDetails = () => {
  const rarityPriority = {
    legendary: 4,
    epic: 3,
    rare: 2,
    common: 1,
  };

  const sortedItems = useMemo(() => {
    return [...characters].sort(
      (a, b) => rarityPriority[b.rarity] - rarityPriority[a.rarity],
    );
  }, [characters]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <AppScrollView>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              marginHorizontal: 24,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "lime" }}>jwdid</Text>
            <Text style={{ color: "lime" }}>efef</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            {sortedItems.map((item) => (
              <View key={item.id} style={{ alignItems: "center", margin: 10 }}>
                <View
                  style={{
                    width: screenWidth - 60,
                    height: 70,
                    backgroundColor: "gray",
                  }}
                >
                  <View
                    style={{
                      marginHorizontal: 10,
                      flex: 1,
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        gap: 5,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "orange",
                        }}
                      >
                        <Image
                          source={{ uri: item.image } as ImageSourcePropType}
                          style={{ width: 50, height: 50 }}
                          resizeMode="cover"
                        />
                      </View>
                      <View
                        style={{
                          width: 120,
                          height: 50,
                          backgroundColor: "orange",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          <View
                            style={{
                              width: 15,
                              height: 15,
                              backgroundColor: "lime",
                            }}
                          />
                          <Text style={{ color: "red" }}>{item.name}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          <View
                            style={{
                              width: 15,
                              height: 15,
                              backgroundColor: "lime",
                            }}
                          />
                          <Text style={{ color: "purple" }}>
                            {item.rarity} - {item.id}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "orange",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "blue" }}>0.0%</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </AppScrollView>
    </SafeAreaView>
  );
};

export default function CaseDetailsTest() {
  return <CaseDetails />;
}
