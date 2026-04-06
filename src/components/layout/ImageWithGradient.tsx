import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { ImageWithGradientProps } from "@/types/global";

export const ImageWithGradient = ({
  children,
  source,
  style,
  gradientStyle,
  gradientColors,
}: ImageWithGradientProps) => {
  return (
    <ImageBackground
      resizeMode="cover"
      resizeMethod="scale"
      alt="photo"
      source={source}
      style={style}
    >
      <LinearGradient colors={gradientColors} style={gradientStyle}>
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};
