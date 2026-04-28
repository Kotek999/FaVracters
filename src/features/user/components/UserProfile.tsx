import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { ProfileItem } from "./ProfileItem";

export const UserProfile = () => {
  return (
    <SafeAreaWithScrollView edges={["bottom"]}>
      <ProfileItem />
    </SafeAreaWithScrollView>
  );
};
