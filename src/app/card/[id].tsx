import { View, Text, Button, Image, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { characters } from "@/data/characters";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppScrollView } from "@/components/layout/AppScrollView";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { rarityColor } from "@/features/caseOpening/consts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar } from "@ui-kitten/components";

const HeroCardDetails = () => {
  const { id } = useLocalSearchParams();

  const card = characters.find((character) => character.id === id);

  if (!card) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "red" }}>Karta nie znaleziona</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <AppScrollView>
        <View
          style={{
            width: screenWidth - 40,
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Text style={{ color: "lime", fontSize: 20 }}>HERO DETAILS</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={[styles.cardContainer, styles.unlockedCard]}>
              <View
                style={{
                  ...styles.imageWrapper,
                }}
              >
                <Image
                  source={{ uri: card.image as string }}
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
                    height: 80,
                    backgroundColor: "rgba(0, 0, 0, 0.71)",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      height: 60,
                      flexDirection: "row",
                      alignItems: "center",
                      // backgroundColor: "red",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "flex-end",
                        justifyContent: "space-around",
                      }}
                    >
                      <View
                        style={{
                          width: "50%",
                          gap: 5,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          wddwd
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                            textShadowColor: "rgba(0,0,0,0.8)",
                            textShadowOffset: { width: 0, height: 2 },
                            textShadowRadius: 6,
                          }}
                        >
                          wddw dwdww
                        </Text>
                      </View>

                      <View
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: 114,
                            height: 30,
                            backgroundColor: "gray",
                            borderRadius: 16,
                            opacity: 0.8,
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <MaterialCommunityIcons
                              name="star"
                              size={19}
                              color="yellow"
                            />
                            <MaterialCommunityIcons
                              name="star"
                              size={19}
                              color="yellow"
                            />
                            <MaterialCommunityIcons
                              name="star"
                              size={19}
                              color="yellow"
                            />
                            <MaterialCommunityIcons
                              name="star"
                              size={19}
                              color="yellow"
                            />
                            <MaterialCommunityIcons
                              name="star"
                              size={19}
                              color="lightgray"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginVertical: 10, alignItems: "center", gap: 10 }}>
            <Text
              style={{
                color: "red",
                fontSize: 30,
                fontStyle: "italic",
              }}
            >
              {card.name}
            </Text>

            <View
              style={{
                gap: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 110,
                  height: 34,
                  backgroundColor: "gray",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  borderRadius: 16,
                }}
              >
                <MaterialCommunityIcons name="leaf" size={20} />
                <Text style={{ color: "white", fontSize: 12 }}>wddw dwwd</Text>
              </View>
              <View
                style={{
                  width: 110,
                  height: 34,
                  backgroundColor: rarityColor[card.rarity],
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  borderRadius: 16,
                }}
              >
                <MaterialCommunityIcons name="medal" size={20} />
                <Text style={{ color: "white", fontSize: 12 }}>dwwwdwd</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ gap: 5, flexDirection: "row", alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name="data-matrix"
                  size={20}
                  color="lime"
                />
                <Text style={{ color: "lime" }}>dwdwwdwdwd wddw</Text>
              </View>
              <Text style={{ color: "gray" }}>
                ID: {card.id}-{Math.random().toPrecision(4)}
              </Text>
            </View>

            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <View
                style={{
                  alignItems: "center",
                  width: screenWidth - 40,
                  height: screenHeight / 3.4,
                  backgroundColor: "gray",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        gap: 5,
                        padding: 0,
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            gap: 5,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <MaterialCommunityIcons
                            name="sword"
                            size={30}
                            color="orange"
                          />
                          <Text style={{ color: "orange" }}>Siła</Text>
                        </View>
                        <Text style={{ color: "orange" }}>85%</Text>
                      </View>

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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        gap: 5,
                        padding: 0,
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            gap: 5,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <MaterialCommunityIcons
                            name="sword"
                            size={30}
                            color="orange"
                          />
                          <Text style={{ color: "orange" }}>Siła</Text>
                        </View>
                        <Text style={{ color: "orange" }}>85%</Text>
                      </View>

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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        gap: 5,
                        padding: 0,
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            gap: 5,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <MaterialCommunityIcons
                            name="sword"
                            size={30}
                            color="orange"
                          />
                          <Text style={{ color: "orange" }}>Siła</Text>
                        </View>
                        <Text style={{ color: "orange" }}>85%</Text>
                      </View>

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
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <View
              style={{ gap: 5, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons name="book-open" size={20} color="lime" />
              <Text style={{ color: "lime" }}>wdwwd</Text>
            </View>
            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <View
                style={{
                  alignItems: "center",
                  width: screenWidth - 40,
                  height: screenHeight / 4,
                  backgroundColor: "gray",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse hendrerit eu lorem sollicitudin molestie. Donec
                    maximus iaculis dictum. Donec sagittis metus ac condimentum
                    interdum. Phasellus rutrum fermentum turpis vitae aliquet.
                    Nunc fringilla finibus turpis. Pellentesque vulputate libero
                    eget pellentesque luctus.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Button title="<- Powrót" onPress={() => router.back()} />
          </View>
        </View>
      </AppScrollView>
    </SafeAreaView>
  );
};

export default function SecondDetailsTest() {
  return <HeroCardDetails />;
}

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth / 1.4,
    height: screenHeight / 2,
    aspectRatio: 0.8,
  },

  unlockedCard: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#246969",
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
