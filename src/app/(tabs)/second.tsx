import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Second() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Second Screen</Text>
      <Button
        title="Go to details TEST"
        onPress={() => router.push("/second-details-test")}
      />
    </View>
  );
}
