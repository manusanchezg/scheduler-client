import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ClientNavigator from "./src/navigation/ClientNavigation";
import CompanyNavigationDrawer from "./src/navigation/CompanyNavigationDrawer";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? <CompanyNavigationDrawer /> : <ClientNavigator />}
    </NavigationContainer>
  );
}
