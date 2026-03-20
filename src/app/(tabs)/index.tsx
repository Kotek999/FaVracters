import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { memo } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { StyleSheet, ImageBackground, View, Alert } from "react-native";
import { screenWidth, screenHeight } from "@/utils/dimensions";
import { AppScrollView } from "@/components/layout/AppScrollView";
import { useCountdown } from "@/systems/time/useCountdown";
import { formatTime } from "@/systems/time/formatTime";
import { useUserStore } from "@/features/user/store/useUserStore";
import { timeAgo } from "@/systems/time/timeAgo";
import { Activity } from "@/features/user/types";

const ActivityItem = memo(({ activity }: { activity: Activity }) => {
  const ago = timeAgo(activity.createdAt);

  if (activity.type === "HERO_UNLOCK") {
    return (
      <Text style={{ color: "lime" }}>
        🔥 Znalazłeś {activity.rarity.toUpperCase()} Hero!
        {"\n"}
        {activity.heroName} dodany do kolekcji • {ago}
      </Text>
    );
  }

  if (activity.type === "LEVEL_UP") {
    return (
      <Text style={{ color: "lime" }}>
        🆙 Nowy poziom: {activity.level}
        {"\n"}
        {activity.reward ?? ""} • {ago}
      </Text>
    );
  }

  if (activity.type === "REWARD_CLAIM") {
    return (
      <Text style={{ color: "lime" }}>
        Nagroda odebrana
        {"\n"}
        {activity.energy ?? ""} energii • {ago}
      </Text>
    );
  }

  return null;
});

export default function Home() {
  const { dailyRewardAt, activities, claimDailyReward } = useUserStore();

  const { hours, minutes, seconds, isReady } = useCountdown(dailyRewardAt);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <AppScrollView>
        <ImageBackground
          resizeMode="cover"
          resizeMethod="scale"
          alt="photo"
          source={require("../../assets/images/image_example_2.png")}
          borderRadius={20}
          style={styles.imageContainer}
        >
          <LinearGradient
            colors={["rgba(10, 3, 3, 0.88)", "gray"]}
            style={styles.gradientContainer}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    {!isReady ? (
                      <>
                        <Text style={{ color: "white" }}>Pozostało: </Text>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ color: "white" }}>
                            {formatTime(hours, minutes, seconds)}
                          </Text>
                        </View>
                      </>
                    ) : (
                      <Text style={{ color: "lime" }}>
                        Nagroda gotowa do odebrania
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 5,
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "gray",
                    }}
                  >
                    <Text style={{ color: "white" }}>coś tutaj</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      width: "30%",
                      padding: 10,
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 5,
                      backgroundColor: "gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "blue" }}>feefef</Text>
                    <Text style={{ color: "purple" }}>feefef</Text>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      padding: 10,
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 5,
                      backgroundColor: "gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "blue" }}>feefef</Text>
                    <Text style={{ color: "purple" }}>feefef</Text>
                  </View>
                  <View
                    style={{
                      width: "30%",
                      padding: 10,
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 5,
                      backgroundColor: "gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "blue" }}>feefef</Text>
                    <Text style={{ color: "purple" }}>feefef</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text style={{ color: "white" }}>
                    Przykładowy dłuższy tekst, dwwdd dwjwdidwwdjwddwwddw.
                  </Text>
                </View>
                <View
                  style={{
                    flexShrink: 1,
                    maxWidth: "50%",
                  }}
                >
                  <Button
                    appearance="ghost"
                    status="info"
                    style={{
                      backgroundColor: "#0df2f2",
                    }}
                    disabled={!isReady}
                    onPress={() => {
                      const reward = claimDailyReward();
                      if (reward) {
                        Alert.alert(
                          "Nagroda dzienna",
                          "Otrzymano 1 skrzynkę i 10 energii!",
                        );
                      }
                    }}
                  >
                    Odbierz
                  </Button>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
        <Layout
          style={{
            padding: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "black" }}>Jakiś napis</Text>
          <Text style={{ color: "black" }}>Inny napis</Text>
        </Layout>
        <ImageBackground
          resizeMode="cover"
          resizeMethod="scale"
          alt="photo"
          source={require("../../assets/images/image_example_3.png")}
          borderRadius={20}
          style={styles.imageContainerTwo}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.gradientContainerTwo}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text style={{ color: "white" }}>Tekst jakiś</Text>
                <Text style={{ color: "white" }}>Kolejne info</Text>
              </View>
              <Button
                appearance="ghost"
                status="info"
                style={{
                  width: "100%",
                  backgroundColor: "#0df2f2",
                }}
                onPress={() => router.push("/second")}
              >
                TEST
              </Button>
            </View>
          </LinearGradient>
        </ImageBackground>
        <Layout>
          <Text style={{ color: "black" }}>Jakiś kolejny napis</Text>
        </Layout>

        <View>
          {activities.map((activity, index) => (
            <ActivityItem key={index} activity={activity} />
          ))}
        </View>
        <View
          style={{
            top: 20,
            marginBottom: 30,
          }}
        >
          <BlurView
            intensity={20}
            tint="light"
            style={{
              overflow: "hidden",
              padding: 12,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#cde",
                  marginRight: 16,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons name="star" size={24} color="black" />
              </View>
              <View style={{ flex: 1, marginRight: 8 }}>
                <Text style={{ fontWeight: "bold", color: "orange" }}>
                  grrrgr
                </Text>
                <Text style={{ color: "red" }}>efef33fejkef9ofeoefoke ddw</Text>
              </View>
              <View style={{ flexShrink: 1, maxWidth: "50%" }}>
                <Text
                  style={{
                    color: "lime",
                    textAlign: "right",
                    flexWrap: "wrap",
                  }}
                >
                  f3eff3
                </Text>
              </View>
            </View>
          </BlurView>
        </View>
      </AppScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth - 35,
    height: screenHeight / 2.6,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainerTwo: {
    width: screenWidth - 35,
    height: screenHeight / 2,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  gradientContainer: {
    position: "absolute",
    width: screenWidth - 35,
    height: screenHeight / 2.6,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#1e4e4e",
    justifyContent: "space-between",
  },
  gradientContainerTwo: {
    position: "absolute",
    width: screenWidth - 35,
    height: screenHeight / 2,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#1e4e4e",
    justifyContent: "space-between",
  },
});
