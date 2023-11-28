import { Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  BeVietnam_400Regular,
  BeVietnam_500Medium,
  BeVietnam_600SemiBold,
  BeVietnam_700Bold,
  BeVietnam_800ExtraBold,
} from "@expo-google-fonts/be-vietnam";
import { useCallback, useEffect } from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[] | (string| JSX.Element)[];
  fontWeight?:
    | "400Regular"
    | "500Medium"
    | "600SemiBold"
    | "700Bold"
    | "800ExtraBold";
}

const MyText = ({ children, fontWeight = "400Regular" }: Props) => {
  const [fontsLoaded] = useFonts({
    BeVietnam_400Regular,
    BeVietnam_500Medium,
    BeVietnam_600SemiBold,
    BeVietnam_700Bold,
    BeVietnam_800ExtraBold,
  });

  // for now like this to try

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Text
      onLayout={onLayout}
      style={{
        fontFamily: `BeVietnam_${fontWeight}`,
      }}
    >
      {children}
    </Text>
  );
};

export default MyText;
