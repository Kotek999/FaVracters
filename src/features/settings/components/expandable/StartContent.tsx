import Animated from "react-native-reanimated";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { StartContentProps } from "../../types";

export const StartContent = ({
  title,
  toggle,
  iconStyle,
}: StartContentProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>

      <Pressable onPress={toggle} hitSlop={10}>
        <Animated.View style={iconStyle}>
          <MaterialCommunityIcons
            name="chevron-down"
            size={22}
            color={colors.primary}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: colors.white,
    flex: 1,
  },
});
