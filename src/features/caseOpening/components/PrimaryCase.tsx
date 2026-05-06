import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Button } from "@/components/ui/Button/Button";
import { PrimaryCaseProps } from "../types";

export const PrimaryCase = ({ cases }: PrimaryCaseProps) => {
  const onPressRedirectToCaseSpinScreen = () => router.push("/caseSpin");
  const source: ImageSourcePropType = require("@/assets/images/image_example_2.png");

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[colors.backgroundPrimary, colors.opacityDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <MaterialIcons
          name="diamond"
          size={80}
          color={colors.primary}
          style={styles.diamond}
        />
        <BlurView intensity={15} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Skrzynia Bohaterów</Text>
          <Text style={styles.subtitle}>Podstawowe wylosowanie bohatera.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Przejdź do skrzynki"
            variant="secondary"
            disabled={cases === 0}
            textStyle={{ color: colors.textDark }}
            onPress={onPressRedirectToCaseSpinScreen}
          />
        </View>
        <Image style={styles.image} source={source} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth,
    marginVertical: 10,
    paddingHorizontal: 22,
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    backgroundColor: colors.backgroundBlur,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    paddingHorizontal: 20,
  },
  diamond: {
    position: "absolute",
    right: 10,
    top: 10,
    opacity: 0.07,
  },
  contentContainer: {
    zIndex: 10,
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontFamily: fonts.bold,
  },
  subtitle: {
    color: colors.textLightGray,
    marginTop: 4,
    fontFamily: fonts.medium,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 14,
  },
  image: {
    borderRadius: 10,
    width: screenWidth / 1.26,
    height: screenHeight / 2.6,
  },
});
