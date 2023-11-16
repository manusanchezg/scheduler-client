import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import ClientNavigator from "./src/navigation/ClientNavigation";

export default function App() {
  return (
    <NavigationContainer >
      <ClientNavigator />
    </NavigationContainer>
  );
}