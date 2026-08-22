import React from "react";
import { View } from "react-native";
import { CASES_LIST } from "@/features/caseOpening/config/cases";
import { FlashList } from "@shopify/flash-list";
import { CARD_GAP, ITEM_OFFSET, SIDE_PADDING } from "../consts";
import { useCarouselItems } from "../hooks/useCarouselItems";
import { Dots } from "./Dots";

export const CaseToBuyCarousel = () => {
  const { renderItem, activeIndex, viewabilityConfig, onViewableItemsChanged } =
    useCarouselItems();

  return (
    <>
      <FlashList
        data={CASES_LIST}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.config.key}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={ITEM_OFFSET}
        snapToAlignment="start"
        disableIntervalMomentum
        bounces={false}
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
        ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <Dots activeIndex={activeIndex} />
    </>
  );
};
