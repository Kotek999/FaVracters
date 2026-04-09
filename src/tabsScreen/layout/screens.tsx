import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { Text, Avatar } from "@ui-kitten/components";
import { ImageSourcePropType, TouchableOpacity } from "react-native";
import { colors } from "@/theme/colors";
import { HeaderIconButton } from "@/tabsScreen/components/HeaderIconButton";
import { navigate } from "../utils/navigate";
import { ScreenConfig } from "@/tabsScreen/types";

const source: ImageSourcePropType = require("../../assets/images/image_example_1.png");

export const screens = [
  {
    name: "index",
    title: "Główna",
    iconName: "home-variant",

    headerLeft: () => (
      <TouchableOpacity onPress={() => navigate("/fourth")}>
        <Avatar
          borderRadius={20}
          style={{ borderWidth: 1, borderColor: colors.borderPrimary }}
          size="medium"
          source={source}
        />
      </TouchableOpacity>
    ),

    headerRight: () => (
      <HeaderIconButton
        onPress={() => navigate("/loginCalendar")}
        icon={
          <MaterialCommunityIcons
            name="calendar-check"
            size={18}
            color={colors.primary}
          />
        }
      />
    ),
  },

  {
    name: "second",
    title: "Kolekcja",
    iconName: "view-grid",

    headerLeft: () => (
      <HeaderIconButton
        onPress={() => router.back()}
        icon={
          <MaterialCommunityIcons
            name="arrow-left"
            size={18}
            color={colors.primary}
          />
        }
      />
    ),
  },

  {
    name: "case",
    title: "Skrzynki",
    iconName: "treasure-chest",

    headerLeft: () => (
      <HeaderIconButton
        onPress={() => router.back()}
        icon={
          <MaterialCommunityIcons
            name="arrow-left"
            size={18}
            color={colors.primary}
          />
        }
      />
    ),

    headerRight: () => (
      <HeaderIconButton
        style={{
          flexDirection: "row",
          width: 70,
          borderRadius: 16,
          gap: 5,
        }}
        onPress={() => alert("energy action clicked...")}
        icon={
          <>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={18}
              color={colors.primary}
            />
            <Text style={{ color: colors.primary }}>- - - -</Text>
          </>
        }
      />
    ),
  },

  {
    name: "fourth",
    title: "Profil",
    iconName: "account-circle",

    headerLeft: () => (
      <HeaderIconButton
        onPress={() => router.back()}
        icon={
          <MaterialCommunityIcons
            name="arrow-left"
            size={18}
            color={colors.primary}
          />
        }
      />
    ),

    headerRight: () => (
      <HeaderIconButton
        onPress={() => alert("cog icon clicked...")}
        icon={
          <MaterialCommunityIcons name="cog" size={18} color={colors.primary} />
        }
      />
    ),
  },
] as const satisfies readonly ScreenConfig[];
