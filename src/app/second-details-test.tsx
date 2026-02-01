import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function SecondDetailsTest() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details TEST</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
