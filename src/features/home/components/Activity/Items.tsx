import { View } from "react-native";
import { Item as Activity } from "./Item";
import { ItemEmptyState as ActivityEmptyState } from "./ItemEmptyState";
import { ItemsProps } from "../../types";

export const Items = ({ activities }: ItemsProps) => {
  return (
    <View>
      {!activities.length ? (
        <ActivityEmptyState
          title="Brak aktywności"
          subtitle="Odbieraj nagrody, kolekcjonuj karty i zacznij działać"
        />
      ) : (
        <>
          {activities.map((activity, index) => (
            <Activity key={index} activity={activity} index={index} />
          ))}
        </>
      )}
    </View>
  );
};
