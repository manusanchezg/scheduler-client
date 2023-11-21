import { createDrawerNavigator } from '@react-navigation/drawer';
import AddService from '../screens/CompanyNavigation/AddService';
import EditService from '../screens/CompanyNavigation/EditService';
import AddSchedule from '../screens/CompanyNavigation/AddSchedule';
import Appointments from '../screens/CompanyNavigation/Appointments';
import CompanyAppointmentStack from './CompanyAppointmentStack';

const Drawer = createDrawerNavigator();

function CompanyNavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={CompanyAppointmentStack} />
      <Drawer.Screen name="AddService" component={AddService} />
      <Drawer.Screen name="EditService" component={EditService} />
      <Drawer.Screen name="AddSchedule" component={AddSchedule} />
      <Drawer.Screen name="Appointments" component={Appointments} />
    </Drawer.Navigator>
  );
}

export default CompanyNavigationDrawer