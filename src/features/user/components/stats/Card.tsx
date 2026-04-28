import { StyleSheet, View, Text } from "react-native";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { CardStatsProps as CardProps } from "../../types";

export const Card = ({ icon, value, label, fullWidth }: CardProps) => (
  <View style={[styles.cardWrapper, fullWidth && styles.fullWidth]}>
    <BlurView intensity={8} tint="light" style={styles.blurContainer}>
      <View style={styles.content}>
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={colors.secondary}
        />
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </BlurView>
  </View>
);

const styles = StyleSheet.create({
  cardWrapper: {
    width: "47%",
    marginVertical: 10,
  },

  fullWidth: {
    width: "100%",
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
  content: {
    flex: 1,
    gap: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  value: {
    fontSize: 24,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
    color: colors.textGray,
  },
});
