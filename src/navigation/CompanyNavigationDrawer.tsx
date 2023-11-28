import { createDrawerNavigator } from "@react-navigation/drawer";
import AddService from "../screens/CompanyNavigation/AddService";
import AddSchedule from "../screens/CompanyNavigation/AddSchedule";
import Appointments from "../screens/CompanyNavigation/Appointments";
import CompanyAppointmentStack from "./CompanyAppointmentStack";
import EditServiceStack from "./EditServiceStack";
import { colors } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

function CompanyNavigationDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
          fontSize: 25,
        },
        drawerContentStyle: {
          backgroundColor: colors.background,
        },
        drawerLabelStyle: {
          color: colors.text,
          fontSize: 16,
          marginVertical: 5,
          marginLeft: 10,
        },
        drawerIcon: () => {
          return <Icon name="menu-outline" color="white" />;
        },
      }}
    >
      <Drawer.Screen name="Home" component={CompanyAppointmentStack} />
      <Drawer.Screen name="AddService" component={AddService} />
      <Drawer.Screen name="EditServiceStack" component={EditServiceStack} />
      <Drawer.Screen name="AddSchedule" component={AddSchedule} />
      <Drawer.Screen name="Appointments" component={Appointments} />
    </Drawer.Navigator>
  );
}

export default CompanyNavigationDrawer;
