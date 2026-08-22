import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import { PrimaryCaseToBuy } from "../components/PrimaryCaseToBuy";
import { useToastActions } from "@/hooks/useToastActions";
import { CARD_WIDTH } from "../consts";
import { CaseItem } from "@/features/caseOpening/config/types";

export const useCarouselItems = () => {
  const { buyCase } = useToastActions();
  const [activeIndex, setActiveIndex] = useState(0);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 60,
  }).current;

  const onViewableItemsChanged = useRef(
    ({
      viewableItems,
    }: {
      viewableItems: Array<{
        index: number | null;
        isViewable: boolean;
      }>;
    }) => {
      const visibleItem = viewableItems.find(
        (item) => item.isViewable && item.index != null,
      );

      if (visibleItem?.index != null) {
        setActiveIndex(visibleItem.index);
      }
    },
  ).current;

  const renderItem = useCallback(
    ({ item }: { item: CaseItem }) => {
      return (
        <View style={{ width: CARD_WIDTH }}>
          <PrimaryCaseToBuy
            item={item}
            onPress={() => buyCase(item, item.config.price)}
          />
        </View>
      );
    },
    [CARD_WIDTH],
  );

  return {
    activeIndex,
    viewabilityConfig,
    onViewableItemsChanged,
    renderItem,
  };
};
