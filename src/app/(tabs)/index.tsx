import { Layout, Text, Button } from "@ui-kitten/components";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <Text category="h3" style={{ color: "white" }}>
          HOME SCREEN
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
