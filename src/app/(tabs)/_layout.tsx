import { Tabs } from "expo-router";
import { tabsScreenOptions } from "@/tabsScreen/options/tabsScreenOptions";
import { createScreenOptions } from "@/tabsScreen/options/createScreenOptions";
import { screens } from "@/tabsScreen/layout/screens";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={tabsScreenOptions}>
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={createScreenOptions(screen)}
        />
      ))}
    </Tabs>
  );
}
