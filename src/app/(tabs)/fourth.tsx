import { View, Text } from "react-native";
import { useUserStore } from "@/store/hooks/useUserStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar } from "@ui-kitten/components";
import { AppScrollView } from "@/components/layout/AppScrollView";
import { AvatarWithLevel } from "@/features/userProfile/components/AvatarWithLevel";

const UserProfileScreen = () => {
  const user = useUserStore((state) => state);
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <AppScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 30,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AvatarWithLevel />
            <Text style={{ fontSize: 20, color: "lime" }}>@{user.name}</Text>
            <Text style={{ fontSize: 16, color: "orange" }}>
              dwdwokdw djwdd
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 30,
              width: "100%",
              paddingHorizontal: 30,
              paddingVertical: 0,
            }}
          >
            <View
              style={{
                marginBottom: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>effeeffe</Text>
              <View
                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: "blue",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                }}
              >
                <Text style={{ color: "white", fontSize: 14 }}>
                  dwjidjjwwdd
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 10, alignItems: "center" }}>
              <ProgressBar
                style={{
                  borderRadius: 10,
                  height: 12,
                  width: "100%",
                  backgroundColor: "orange",
                }}
              />
            </View>
            <Text style={{ color: "white", fontSize: 18 }}>
              u992edwdwwwd2e2
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 30,
              paddingHorizontal: 30,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginBottom: 10, color: "red" }}>fjkj9wjdjw</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "yellow",
                marginVertical: 10,
                width: "100%",
                height: 110,
                borderRadius: 10,
                backgroundColor: "gray",
              }}
            >
              <View
                style={{
                  padding: 18,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "orange" }}>dwwd</Text>
                <MaterialCommunityIcons
                  name="card-account-details"
                  size={22}
                  color="lime"
                />
              </View>
              <View style={{ marginLeft: 18, marginTop: -10 }}>
                <Text style={{ fontSize: 20, color: "pink" }}>effeef33</Text>
              </View>
            </View>
            <View
              style={{
                gap: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "yellow",
                  marginVertical: 10,
                  width: "47%",
                  height: 150,
                  borderRadius: 10,
                  backgroundColor: "gray",
                }}
              >
                <View style={{ gap: 10, padding: 18 }}>
                  <Text style={{ width: "70%", color: "orange" }}>
                    dwwdefefefefefeffefe
                  </Text>
                  <Text style={{ color: "yellow", marginTop: 0 }}>
                    dwwdefefefe
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="card-account-details"
                      size={22}
                      color="lime"
                    />
                    <Text style={{ marginLeft: 10, color: "purple" }}>
                      dwwdefefefe
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "yellow",
                  marginVertical: 10,
                  width: "47%",
                  height: 150,
                  borderRadius: 10,
                  backgroundColor: "gray",
                }}
              >
                <View style={{ gap: 5, padding: 18 }}>
                  <Text style={{ width: "80%", color: "orange" }}>
                    dwwdefefefefefeffefe
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 10, color: "pink" }}>dww</Text>
                    <MaterialCommunityIcons
                      name="card-account-details"
                      size={22}
                      color="lime"
                    />
                  </View>
                  <Text style={{ color: "purple" }}>dwwdefefefe</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </AppScrollView>
    </SafeAreaView>
  );
};

export default function Fourth() {
  return <UserProfileScreen />;
}
