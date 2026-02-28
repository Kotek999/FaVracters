import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  ImageURISource,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CaseItem } from "@/features/caseOpening";
import { CARD_ITEM_MARGIN, CARD_ITEM_WIDTH } from "../consts";
import { screenHeight } from "@/utils/dimensions";

type ImageSource =
  | number
  | ImageURISource
  | ImageURISource[]
  | {
      uri: string | ImageSourcePropType;
    };

type RarityColor = {
  common: string;
  rare: string;
  epic: string;
  legendary: string;
};

interface CardItemProps {
  readonly item: CaseItem;
  readonly isUnlocked: boolean;
  readonly count: number;
  readonly imageSource: ImageSource;
  readonly rarityColor: RarityColor;
}

export const CardItem = ({
  item,
  isUnlocked,
  count,
  imageSource,
  rarityColor,
}: CardItemProps) => {
  return (
    <View
      style={[
        styles.cardContainer,
        isUnlocked ? styles.unlockedCard : styles.lockedCard,
      ]}
    >
      <View
        style={{
          ...styles.imageWrapper,
        }}
      >
        <Image
          source={imageSource as ImageSourcePropType}
          style={[styles.image, !isUnlocked && { opacity: 0.4 }]}
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
            {isUnlocked ? item.name : "Nie znany"}
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
        {isUnlocked && (
          <>
            <View
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor: rarityColor[item.rarity],
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 8,
              }}
            >
              <Text style={styles.countText}>{item.rarity}</Text>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                backgroundColor: "orange",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 8,
              }}
              onPress={() => router.push(`/card/${item.id}`)}
            >
              <MaterialCommunityIcons
                name="information"
                size={22}
                color="black"
              />
            </TouchableOpacity>
          </>
        )}
        {!isUnlocked && (
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
        )}
      </View>
      {isUnlocked && (
        <View style={styles.countBadge}>
          <Text style={styles.countText}>x{count}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_ITEM_WIDTH,
    margin: CARD_ITEM_MARGIN,
    aspectRatio: 0.8,
  },

  unlockedCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#246969",
  },

  lockedCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#246969",
    borderStyle: "dashed",
    opacity: 0.8,
  },

  imageWrapper: {
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

  countBadge: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "lime",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  countText: {
    color: "black",
    fontWeight: "600",
  },
});
