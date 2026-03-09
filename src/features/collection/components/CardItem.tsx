import { memo } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CARD_ITEM_MARGIN, CARD_ITEM_WIDTH } from "../consts";
import { screenHeight } from "@/utils/dimensions";
import { rarityColor } from "@/features/caseOpening/consts";
import { useCardItemLevel } from "../hooks/useCardItemLevel";
import { DiamondLevel } from "./DiamondLevel";
import { ProgressBar } from "./ProgressBar";
import type { CardItemProps } from "../types";

export const CardItem = memo(({ item }: CardItemProps) => {
  const {
    progress,
    imageSource,
    level,
    xp,
    xpNeeded,
    handleLevelUp,
    canLevelUp,
  } = useCardItemLevel({ item: item });

  if (!progress)
    return (
      <View style={[styles.cardContainer, styles.lockedCard]}>
        <View
          style={{
            ...styles.imageWrapper,
          }}
        >
          <Image
            source={imageSource}
            style={[styles.image, { opacity: 0.4 }]}
            resizeMode="cover"
          />
          <View
            style={{
              backgroundColor: "#1e4e4e",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: screenHeight / 13,
              justifyContent: "flex-end",
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
              Nie znany
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "bold",
                textShadowColor: "rgba(0,0,0,0.8)",
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 6,
              }}
            >
              dwwdd
            </Text>
          </View>
          <View style={styles.lockedOverlay}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "yellow",
                borderRadius: 30,
                width: 50,
                height: 50,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => alert("Dostęp zablokowany (Nie odkryto bohatera)")}
            >
              <MaterialIcons name="lock" size={28} color="lightgray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  return (
    <View
      style={[
        styles.cardContainer,
        {
          borderColor: rarityColor[item.rarity],
          shadowColor: rarityColor[item.rarity],
          shadowOpacity: 0.9,
          shadowRadius: 20,
          elevation: 10,
          borderWidth: 2,
          borderRadius: 16,
        },
      ]}
    >
      <View style={styles.imageWrapper}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />

        <DiamondLevel item={item} level={level} />

        <View
          style={{
            position: "absolute",
            bottom: 65,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <ProgressBar
            xp={xp}
            xpNeeded={xpNeeded}
            canLevelUp={canLevelUp}
            handleLevelUp={handleLevelUp}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#1e4e4e",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: screenHeight / 13,
            justifyContent: "center",
          }}
          onPress={() => router.push(`/card/${item.id}`)}
        >
          <View
            style={{
              marginHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
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
                {item.name}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: "bold",
                  textShadowColor: "rgba(0,0,0,0.8)",
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 6,
                }}
              >
                dwwdd
              </Text>
            </View>
            <MaterialCommunityIcons name="arrow-right" size={28} color="lime" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export const RenderCardItem = memo(
  CardItem,
  (prev, next) =>
    prev.item.id === next.item.id && prev.item.rarity === next.item.rarity,
);

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_ITEM_WIDTH,
    margin: CARD_ITEM_MARGIN,
    aspectRatio: 0.7,
  },

  lockedCard: {
    borderRadius: 16,
    opacity: 0.8,
  },

  imageWrapper: {
    shadowColor: "#237c7c",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 20,
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
  },

  lockedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
});
