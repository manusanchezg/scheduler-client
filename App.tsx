import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ClientNavigator from "./src/navigation/ClientNavigation";
import CompanyNavigationDrawer from "./src/navigation/CompanyNavigationDrawer";
import { useState } from "react";
import { useFonts, loadAsync } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "vietnam-bold": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf"),
    "vietnam-black": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-Black.ttf"),
    "vietnam-extra-bold": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf"),
    "vietnam-extra-light": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraLight.ttf"),
    "vietnam-light": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf"),
    "vietnam-medium": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf"),
    "vietnam-regular": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf"),
    "vietnam-semi-bold": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf"),
    "vietnam-thin": require("./src/assets/Fonts/Be_Vietnam_Pro/BeVietnamPro-Thin.ttf"),
  });
  // for now like this to try
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? <CompanyNavigationDrawer /> : <ClientNavigator />}
    </NavigationContainer>
  );
}
