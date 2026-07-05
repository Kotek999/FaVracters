import React, { useMemo } from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { HighlightedTextProps } from "../types";

export const HighlightedText = ({ text, names }: HighlightedTextProps) => {
  const regex = useMemo(() => {
    const escaped = names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

    return new RegExp(`\\b(${escaped.join("|")})\\b`, "gi");
  }, [names]);

  const elements = useMemo(() => {
    const result: React.ReactNode[] = [];
    let lastIndex = 0;

    for (const match of text.matchAll(regex)) {
      const matchText = match[0];
      const index = match.index ?? 0;

      if (index > lastIndex) {
        result.push(text.slice(lastIndex, index));
      }

      result.push(
        <Text key={index} style={{ ...styles.highlight, ...styles.font }}>
          {matchText}
        </Text>,
      );

      lastIndex = index + matchText.length;
    }

    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }

    return result;
  }, [text, regex]);

  return <Text style={{ ...styles.text, ...styles.font }}>{elements}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.textGray,
    fontFamily: fonts.medium,
  },
  highlight: {
    color: colors.secondary,
    fontFamily: fonts.bold,
  },
  font: {
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 22,
  },
});
