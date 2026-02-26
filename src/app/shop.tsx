import { View, Text, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppScrollView } from "@/components/layout/AppScrollView";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const HORIZONTAL_PADDING: number = 8;
const CARD_ITEM_MARGIN: number = 8;
const CARD_ITEM_WIDTH =
  (screenWidth - HORIZONTAL_PADDING * 2 - CARD_ITEM_MARGIN * 4) / 1.7;

export default function Shop() {
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
            <Text style={{ color: "lime", fontSize: 20 }}>Sklep</Text>
          </View>

          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                width: screenWidth / 2.3,
                height: 70,
                backgroundColor: "gray",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 14,
                }}
              >
                <View>
                  <Text style={{ color: "blue" }}>GOLD</Text>
                  <Text style={{ color: "white" }}>15,400</Text>
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "orange",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="sack"
                    size={24}
                    color="yellow"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                width: screenWidth / 2.3,
                height: 70,
                backgroundColor: "gray",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 14,
                }}
              >
                <View>
                  <Text style={{ color: "blue" }}>GEMS</Text>
                  <Text style={{ color: "white" }}>250</Text>
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "lightblue",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="diamond-stone"
                    size={24}
                    color="blue"
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white" }}>wddwwd</Text>
            <Text style={{ color: "red" }}>wd dwdw</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={[styles.cardContainer]}>
              <View
                style={{
                  ...styles.imageWrapper,
                }}
              >
                <Image
                  source={require("@/assets/images/image_example_2.png")}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View
                  style={{
                    backgroundColor: "#1e4e4e",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: screenHeight / 6.5,
                    justifyContent: "flex-start",
                    padding: 12,
                  }}
                >
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
                    dwijwd djwijwdd djwi
                  </Text>
                  <Text
                    style={{
                      color: "lightgray",
                      fontSize: 12,
                      fontWeight: "bold",
                      textShadowColor: "rgba(0,0,0,0.8)",
                      textShadowOffset: { width: 0, height: 2 },
                      textShadowRadius: 6,
                    }}
                  >
                    9dwokd jdijw djiwijdwij
                  </Text>
                  <View style={{ marginTop: 10 }}>
                    <Button title="jduujwd - $999,00" />
                  </View>
                </View>

                <View
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    backgroundColor: "red",
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 8,
                  }}
                >
                  <Text style={styles.countText}>COŚ</Text>
                </View>
              </View>

              {/* <View style={styles.countBadge}>
              <Text style={styles.countText}>xfefef</Text>
            </View> */}
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ color: "white" }}>efeeff</Text>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: screenWidth / 2.4,
                height: 200,
                backgroundColor: "gray",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <MaterialIcons name="question-mark" size={22} color="red" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text>243 dwdw</Text>
                <Text>wdwdwd dwwd</Text>
              </View>
              <View style={{ width: "80%" }}>
                <Button title="$999,00" />
              </View>
            </View>
            <View
              style={{
                width: screenWidth / 2.4,
                height: 200,
                backgroundColor: "gray",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <MaterialIcons name="question-mark" size={22} color="red" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text>975 dwd</Text>
                <Text>efef effe</Text>
              </View>
              <View style={{ width: "80%" }}>
                <Button title="$999,00" />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: screenWidth / 2.4,
                height: 200,
                backgroundColor: "gray",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <MaterialIcons name="question-mark" size={22} color="red" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text>345 fefe</Text>
                <Text>efef feef</Text>
              </View>
              <View style={{ width: "80%" }}>
                <Button title="$999,00" />
              </View>
            </View>
            <View
              style={{
                width: screenWidth / 2.4,
                height: 200,
                backgroundColor: "gray",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <MaterialIcons name="question-mark" size={22} color="red" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text>445 fefe</Text>
                <Text>ffe fefefe</Text>
              </View>
              <View style={{ width: "80%" }}>
                <Button title="$999,00" />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <View
              style={{
                width: screenWidth - 40,
                height: 150,
                backgroundColor: "gray",
                borderRadius: 12,
              }}
            >
              <View style={{ padding: 20, gap: 6 }}>
                <Text style={{ color: "blue" }}>efefef fefe</Text>
                <Text style={{ color: "white" }}>wdwddw dwd wwd</Text>
                <Text style={{ color: "lightgray" }}>
                  feefeff eeff eefeffe eefefef
                </Text>
                <View style={{ width: "60%" }}>
                  <Button title="999" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </AppScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 30,
    width: CARD_ITEM_WIDTH,
    height: 250,
    aspectRatio: 1.2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#246969",
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    marginBottom: 110,
  },

  countText: {
    color: "black",
    fontWeight: "600",
  },
});
