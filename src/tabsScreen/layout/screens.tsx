import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { Navigation, routes } from "@/navigation";
import { Avatar } from "@ui-kitten/components";
import { colors } from "@/theme/colors";
import { Images } from "@/assets/images/characters";
import { HeaderIconButton } from "@/tabsScreen/components/HeaderIconButton";
import { ScreenConfig } from "@/tabsScreen/types";

export const screens = [
  {
    name: "index",
    title: "Główna",
    iconName: "home-variant",

    headerLeft: () => (
      <TouchableOpacity onPress={() => Navigation.push(routes.userProfile)}>
        <Avatar
          borderRadius={20}
          style={{ borderWidth: 1, borderColor: colors.borderPrimary }}
          size="medium"
          source={Images.avatar}
        />
      </TouchableOpacity>
    ),

    headerRight: () => (
      <HeaderIconButton
        onPress={() => Navigation.push(routes.loginCalendar)}
        icon={
          <MaterialCommunityIcons
            name="calendar-check"
            size={18}
            color={colors.primary}
          />
        }
        showBadge
      />
    ),
  },

  {
    name: "collection",
    title: "Kolekcja",
    iconName: "view-grid",

    headerLeft: () => (
      <HeaderIconButton
        onPress={() => Navigation.back()}
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
        onPress={() => Navigation.back()}
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
    name: "userProfile",
    title: "Profil",
    iconName: "account-circle",

    headerLeft: () => (
      <HeaderIconButton
        onPress={() => Navigation.back()}
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
        onPress={() => Navigation.push(routes.settings)}
        icon={
          <MaterialCommunityIcons name="cog" size={18} color={colors.primary} />
        }
      />
    ),
  },
] as const satisfies readonly ScreenConfig[];
