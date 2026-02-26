import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Svg, { Defs, RadialGradient, Rect, Stop, Mask } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppScrollView } from "@/components/layout/AppScrollView";

export const Case = () => {
  const caseTestValue: number = 1;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <AppScrollView>
        <View
          style={{
            marginTop: 10,
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View>
            <Text style={{ color: "lime", fontSize: 24 }}>Twoje Skrzynki</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialCommunityIcons
                name="treasure-chest"
                size={22}
                color="red"
              />
              <Text style={{ color: "red" }}>Dostępne: {caseTestValue}</Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.wrapper}>
            <LinearGradient
              colors={["#11181c", "#0b1114"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <Svg style={StyleSheet.absoluteFill}>
                <Defs>
                  <RadialGradient id="lightGrad" cx="0" cy="0" r="1">
                    <Stop offset="0%" stopColor="white" stopOpacity="1" />
                    <Stop offset="100%" stopColor="white" stopOpacity="0" />
                  </RadialGradient>

                  <Mask id="mask">
                    <Rect width="100%" height="100%" fill="black" />
                    <Rect
                      x="-100"
                      y="-100"
                      width="400"
                      height="400"
                      fill="url(#lightGrad)"
                    />
                  </Mask>
                </Defs>

                <Rect
                  width="100%"
                  height="100%"
                  fill="rgba(255,180,0,0.35)"
                  mask="url(#mask)"
                />
              </Svg>

              <MaterialIcons
                name="diamond"
                size={100}
                color="white"
                style={styles.diamond}
              />

              <BlurView
                intensity={20}
                tint="light"
                style={StyleSheet.absoluteFill}
              />

              <View style={styles.content}>
                <Text style={styles.title}>diwk9i9i2 dwdw</Text>
                <Text style={styles.subtitle}>kdwokdwokwdokwdodwkdwkw</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginVertical: 14,
                }}
              >
                <Text style={{ color: "red" }}>x1</Text>
                <Button
                  title="Przejdź do skrzynki"
                  disabled={caseTestValue === 0 ? true : false}
                  onPress={() => router.push("/caseSpin")}
                />
              </View>
              <Image
                style={styles.image}
                source={require("@/assets/images/image_example_2.png")}
              />
            </LinearGradient>
          </View>

          <View
            style={{
              width: screenWidth - 50,
              height: 220,
              backgroundColor: "gray",
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "red",
              borderStyle: "dashed",
              opacity: 0.8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
                onPress={() => alert("shop icon pressed...")}
              >
                <MaterialIcons name="shopping-cart" size={24} />
              </TouchableOpacity>
              <View>
                <Text style={{ color: "white" }}>kdowkodw odwk?</Text>
              </View>
              <View
                style={{
                  width: "50%",
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  wdokwdowkokwdk odwkk dwkokwkdowkkwdo.
                </Text>
              </View>
              <View>
                <Text style={{ color: "white" }}>dwokwd j dwwdjk</Text>
              </View>
            </View>
          </View>
        </View>
      </AppScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    width: screenWidth - 50,
    height: 460,
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f4af0077",
  },
  diamond: {
    position: "absolute",
    right: 20,
    top: 20,
    opacity: 0.05,
  },
  content: {
    zIndex: 10,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    color: "rgba(255,255,255,0.6)",
    marginTop: 4,
  },
  image: {
    borderRadius: 16,
    width: screenWidth / 1.3,
    height: screenHeight / 2.6,
  },
});
