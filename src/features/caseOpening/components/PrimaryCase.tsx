import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { BlurView } from "expo-blur";
import { screenWidth } from "@/utils/dimensions";
import { Button } from "@/components/ui/Button/Button";
import { NavigationActions } from "@/navigation";
import { PrimaryCaseProps } from "@/features/caseOpening/types";

export const PrimaryCase = ({
  caseRef,
  source,
  title,
  subtitle,
  cases,
}: PrimaryCaseProps) => {
  const onPressRedirectToCase = () => NavigationActions.openCase(caseRef);

  return (
    <View style={styles.mainContainer}>
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <View style={styles.caseContainer}>
          <View style={styles.imageContainer}>
            <Image source={source} style={styles.image} resizeMode="cover" />
            <View style={styles.badge}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 12,
                  fontFamily: fonts.bold,
                }}
              >
                x{cases}
              </Text>
            </View>
          </View>
          <View style={styles.caseContentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
            <Text style={styles.subtitleText}>{subtitle}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Przejdź do skrzynki"
                variant="secondary"
                disabled={cases === 0}
                textStyle={styles.buttonText}
                onPress={onPressRedirectToCase}
              />
            </View>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth,
    marginVertical: 10,
    paddingHorizontal: 22,
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  caseContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: colors.backgroundDarkBlue,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  caseContentContainer: {
    flex: 2,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  subtitleText: {
    color: colors.textLightGray,
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonText: { color: colors.textDark, fontSize: 12 },
});
