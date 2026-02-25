import React, { memo } from "react";
import Animated from "react-native-reanimated";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BOX_SIZE } from "../consts";
import type { PreRollViewProps } from "../types";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export const PreRollView = memo(function PreRollView({
  source,
  styleTL,
  styleTR,
  styleBL,
  styleBR,
  onOpen,
}: PreRollViewProps) {
  const pieces = [
    { key: "tl", style: styleTL, tx: 0, ty: 0 },
    { key: "tr", style: styleTR, tx: -BOX_SIZE / 2, ty: 0 },
    { key: "bl", style: styleBL, tx: 0, ty: -BOX_SIZE / 2 },
    { key: "br", style: styleBR, tx: -BOX_SIZE / 2, ty: -BOX_SIZE / 2 },
  ] as const;

  return (
    <View style={styles.center}>
      <View style={styles.box}>
        {pieces.map((p) => (
          <Animated.View key={p.key} style={[styles.piece, p.style]}>
            <Image
              source={source}
              style={[
                styles.image,
                { transform: [{ translateX: p.tx }, { translateY: p.ty }] },
              ]}
            />
          </Animated.View>
        ))}
      </View>

      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ color: "red" }}>Koszt otwarcia: </Text>
        <View
          style={{
            width: 120,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "row",
            borderRadius: 16,
            backgroundColor: "#1f3f3fb9",
            borderWidth: 1,
            borderColor: "#246969",
            gap: 5,
          }}
        >
          <MaterialCommunityIcons name="lightning-bolt" size={18} color="red" />
          <Text style={{ color: "red" }}>500 energii</Text>
        </View>
      </View>

      <View
        style={{
          margin: 10,
          width: screenWidth - 40,
          justifyContent: "center",
          borderRadius: 16,
        }}
      >
        <BlurView
          intensity={7}
          tint="light"
          style={{
            // borderWidth: 1,
            // borderColor: "red",
            height: screenHeight / 3.7,
            overflow: "hidden",
            padding: 25,
            borderRadius: 40,
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
        >
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "lime" }}>jijdwokdokwd</Text>
            <TouchableOpacity onPress={() => router.push("/case-details-test")}>
              <MaterialCommunityIcons
                color="red"
                size={20}
                name="information"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                margin: 10,
                width: screenWidth / 2.8,
                height: screenHeight / 18,

                backgroundColor: "gray",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 14,
              }}
            >
              <View
                style={{
                  gap: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "yellow",
                    borderRadius: 20,
                  }}
                />
                <Text style={{ color: "orange" }}>Common</Text>
              </View>
              <Text style={{ textAlign: "right", color: "white" }}>50%</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                margin: 10,
                width: screenWidth / 2.8,
                height: screenHeight / 18,
                backgroundColor: "gray",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 14,
              }}
            >
              <View
                style={{
                  gap: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "yellow",
                    borderRadius: 20,
                  }}
                />
                <Text style={{ color: "orange" }}>Common</Text>
              </View>
              <Text style={{ textAlign: "right", color: "white" }}>50%</Text>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                margin: 10,
                width: screenWidth / 2.8,
                height: screenHeight / 18,
                backgroundColor: "gray",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 14,
              }}
            >
              <View
                style={{
                  gap: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "yellow",
                    borderRadius: 20,
                  }}
                />
                <Text style={{ color: "orange" }}>Common</Text>
              </View>
              <Text style={{ textAlign: "right", color: "white" }}>50%</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                margin: 10,
                width: screenWidth / 2.8,
                height: screenHeight / 18,
                backgroundColor: "gray",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 14,
              }}
            >
              <View
                style={{
                  gap: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "yellow",
                    borderRadius: 20,
                  }}
                />
                <Text style={{ color: "orange" }}>Common</Text>
              </View>
              <Text style={{ textAlign: "right", color: "white" }}>50%</Text>
            </View>
          </View>
        </BlurView>
      </View>

      <TouchableOpacity style={styles.button} onPress={onOpen}>
        <Text style={styles.text}>Open</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },

  piece: {
    width: BOX_SIZE / 2,
    height: BOX_SIZE / 2,
    overflow: "hidden",
  },

  image: {
    width: BOX_SIZE,
    height: BOX_SIZE,
  },

  button: {
    width: screenWidth - 40,
    height: 48,
    backgroundColor: "#333",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "600",
  },
});
