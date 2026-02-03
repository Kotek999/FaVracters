import { Layout, Text, Button } from "@ui-kitten/components";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../theme/fonts";

export default function Home() {
  return (
    <Layout
      style={{
        flex: 1,
        backgroundColor: "#132525",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView>
        <Text style={{ fontFamily: fonts.bold, color: "white" }}>
          HOME SCREEN
        </Text>
        <Text style={{ fontFamily: fonts.medium, color: "red" }}>
          dwkowkokdwokw
        </Text>
        <Button
          appearance="ghost"
          status="info"
          style={{
            backgroundColor: "#0df2f2",
          }}
          onPress={() => router.push("/second")}
        >
          Go to Second Screen
        </Button>
      </SafeAreaView>
    </Layout>
  );
}
