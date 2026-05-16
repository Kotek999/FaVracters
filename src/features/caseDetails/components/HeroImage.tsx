import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { HeroChancesRowProps } from "../types";

export const HeroImage = ({ rarity, item }: HeroChancesRowProps) => {
  return (
    <View
      style={{
        ...styles.iconContainer,
        shadowColor: rarity.color,
      }}
    >
      <Image
        source={{ uri: item.image } as ImageSourcePropType}
        style={{
          ...styles.image,
          borderColor: rarity.color,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.backgroundDarkBlue,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    elevation: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
  },
});
