import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { Header } from "./reward/Header";
import { Days } from "./reward/Days";
import { TimerWithButton } from "./reward/TimerWithButton";
import { Progress } from "./reward/Progress";

export const LoginCalendar = () => {
  return (
    <SafeAreaWithScrollView>
      <View style={styles.container}>
        <Header />
        <Days />
        <TimerWithButton />
        <Progress />
      </View>
    </SafeAreaWithScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
