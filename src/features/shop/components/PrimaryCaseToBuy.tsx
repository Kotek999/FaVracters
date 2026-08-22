import { View, Text, Image, StyleSheet } from "react-native";
import { screenHeight } from "@/utils/dimensions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@/components/ui/Button/Button";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { PrimaryCaseToBuyProps } from "../types";

export const PrimaryCaseToBuy = ({ item, onPress }: PrimaryCaseToBuyProps) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={item.config.image}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.caseContainer}>
            <Text style={[styles.titleText, styles.shadowText]}>
              {item.config.name}
            </Text>
            <Text style={[styles.descriptionText, styles.shadowText]}>
              x1 Skrzynka • {item.config.description}
            </Text>
            <Button
              title="Kup pakiet"
              variant="secondary"
              style={styles.button}
              textStyle={styles.buttonText}
              icon={
                <MaterialCommunityIcons
                  name="cart"
                  size={20}
                  color={colors.textDark}
                />
              }
              iconPosition="left"
              onPress={onPress}
            />
          </View>
          <View style={styles.badge}>
            <Text style={styles.countText}>{item.config.price}</Text>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={18}
              color={colors.secondary}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "center",
    height: screenHeight / 3,
    aspectRatio: 1.2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderSecondary,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    marginBottom: 60,
  },
  caseContainer: {
    backgroundColor: colors.backgroundNavDarkGreen,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: screenHeight / 6.2,
    justifyContent: "flex-start",
    padding: 12,
  },
  shadowText: {
    textShadowColor: colors.shadow,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  titleText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  descriptionText: {
    color: colors.textGray,
    fontSize: 12,
    fontFamily: fonts.semibold,
  },
  button: {
    height: screenHeight / 18,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.textDark,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 2,
  },
  countText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.semibold,
  },
});
