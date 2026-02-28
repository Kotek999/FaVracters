import { View, Text, Image, StyleSheet, Button } from "react-native";
import type { ResultViewProps } from "../types";
import { rarityColor } from "../consts";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@ui-kitten/components";

export const ResultView = ({
  winner,
  pityChance,
  onSpin,
  onBack,
}: ResultViewProps) => {
  // const isLegendary = winner.rarity === "legendary";

  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "lime" }}>odkrtyo nową kartę</Text>
      <View style={styles.cardContainer}>
        <View
          style={[
            styles.imageWrapper,
            {
              borderColor: rarityColor[winner.rarity],
              shadowColor: rarityColor[winner.rarity],
              shadowOpacity: 0.9,
              shadowRadius: 16,
              elevation: 20,
              transform: [{ scale: 0.95 }],
            },
          ]}
        >
          <Image
            source={{ uri: winner.image as string }}
            // source={require("@/assets/images/image_example_1.png")}
            style={styles.image}
            resizeMode="cover"
          />

          <View
            style={{
              margin: 0,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 140,
              backgroundColor: "rgba(0, 0, 0, 0.71)",
              padding: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 26,
                    }}
                  >
                    {winner.name}
                  </Text>

                  <Divider
                    style={{ width: 50, height: 2, backgroundColor: "yellow" }}
                  />
                  <View
                    style={{
                      width: "70%",
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        gap: 5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="sword"
                        size={24}
                        color="white"
                      />
                      <Text
                        style={{
                          color: "red",
                          fontSize: 16,
                          fontWeight: "bold",
                          textShadowColor: "rgba(0,0,0,0.8)",
                          textShadowOffset: { width: 0, height: 2 },
                          textShadowRadius: 6,
                        }}
                      >
                        85%
                      </Text>
                    </View>
                    <View
                      style={{
                        gap: 5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="sword"
                        size={24}
                        color="white"
                      />
                      <Text
                        style={{
                          color: "red",
                          fontSize: 16,
                          fontWeight: "bold",
                          textShadowColor: "rgba(0,0,0,0.8)",
                          textShadowOffset: { width: 0, height: 2 },
                          textShadowRadius: 6,
                        }}
                      >
                        85%
                      </Text>
                    </View>
                    <View
                      style={{
                        gap: 5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="sword"
                        size={24}
                        color="white"
                      />
                      <Text
                        style={{
                          color: "red",
                          fontSize: 16,
                          fontWeight: "bold",
                          textShadowColor: "rgba(0,0,0,0.8)",
                          textShadowOffset: { width: 0, height: 2 },
                          textShadowRadius: 6,
                        }}
                      >
                        85%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              top: 20,
              left: 15,
              backgroundColor: "gray",
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <MaterialCommunityIcons name="leaf" size={24} color="black" />
            <Text style={styles.countText}>wddw dwwd</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 60,
              left: 15,
              backgroundColor: rarityColor[winner.rarity],
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <MaterialCommunityIcons name="medal" size={24} color="black" />
            <Text style={styles.countText}>{winner.rarity}</Text>
          </View>
        </View>
      </View>
      <Text style={{ color: "red" }}>
        Current Pity +{Math.round(pityChance * 100)}%
      </Text>
      <View style={{ gap: 10 }}>
        <Button title="Losuj dalej" onPress={onSpin} />
        <Button
          title="Szczegóły"
          onPress={() => router.push(`/card/${winner.id}`)}
        />
      </View>
      <Button title="<- Powrót" onPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth - 50,
    height: screenHeight / 1.5,
  },

  imageWrapper: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  countText: {
    color: "black",
    fontWeight: "600",
  },
});
