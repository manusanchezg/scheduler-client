import { createDrawerNavigator } from '@react-navigation/drawer';
import AddService from '../screens/CompanyNavigation/AddService';
import AddSchedule from '../screens/CompanyNavigation/AddSchedule';
import Appointments from '../screens/CompanyNavigation/Appointments';
import CompanyAppointmentStack from './CompanyAppointmentStack';
import EditServiceStack from './EditServiceStack';

const Drawer = createDrawerNavigator();

function CompanyNavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={CompanyAppointmentStack} />
      <Drawer.Screen name="AddService" component={AddService} />
      <Drawer.Screen name="EditServiceStack" component={EditServiceStack} />
      <Drawer.Screen name="AddSchedule" component={AddSchedule} />
      <Drawer.Screen name="Appointments" component={Appointments} />
    </Drawer.Navigator>
  );
}

export default CompanyNavigationDrawer