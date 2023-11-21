import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
// import ClientNavigator from "./src/navigation/ClientNavigation";
import CompanyNavigationDrawer from './src/navigation/CompanyNavigationDrawer';

export default function App() {
  return (
    <NavigationContainer >
      {/* <ClientNavigator /> */}
      <CompanyNavigationDrawer />
    </NavigationContainer>
  );
}