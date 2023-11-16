import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
// import ClientNavigator from "./src/navigation/ClientNavigation";
import CompanyNavigation from './src/navigation/CompanyNavigation';

export default function App() {
  return (
    <NavigationContainer >
      {/* <ClientNavigator /> */}
      <CompanyNavigation />
    </NavigationContainer>
  );
}