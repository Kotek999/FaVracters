import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@/components/ui/Button/Button";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { BlurView } from "expo-blur";
import { EnergyToBuyCardProps } from "@/features/shop/types";

export const EnergyToBuyCard = ({
  iconName,
  value,
  description,
  price,
  onPress,
}: EnergyToBuyCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name={iconName}
                size={22}
                color={colors.primary}
              />
            </View>
          </View>
          <Text style={styles.valueText}>{value} Energii</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title={price}
              variant="secondary"
              textStyle={styles.buttonText}
              onPress={onPress}
            />
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "47%",
  },
  blurContainer: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.backgroundBlur,
    borderWidth: 1.2,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginVertical: 10,
    flexShrink: 1,
    maxWidth: "100%",
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.backgroundDarkGreen,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    fontSize: 18,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 11,
    letterSpacing: 0.5,
    fontFamily: fonts.semibold,
    color: colors.textGray,
  },
  buttonContainer: {
    marginTop: 10,
    flexShrink: 1,
    maxWidth: "100%",
  },
  buttonText: {
    color: colors.textDark,
  },
});
