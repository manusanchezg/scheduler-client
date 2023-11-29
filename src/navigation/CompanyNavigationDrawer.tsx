import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AddService from "../screens/CompanyNavigation/AddService";
import Appointments from "../screens/CompanyNavigation/Appointments";
import CompanyAppointmentStack from "./CompanyAppointmentStack";

import EditServiceStack from "./EditServiceStack";
import ClientNavigator from "./ClientNavigation";

import { colors } from "../styles/globalStyles";

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
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{ title: "Home Page" }}
        component={CompanyAppointmentStack}
      />
      <Drawer.Screen
        name="AddService"
        options={{ title: "Add Service" }}
        component={AddService}
      />
      <Drawer.Screen
        name="EditServiceStack"
        options={{ title: "Edit Service" }}
        component={EditServiceStack}
      />
      <Drawer.Screen
        name="AddSchedule"
        options={{ title: "Add Schedule" }}
        component={ClientNavigator}
      />
      <Drawer.Screen name="Appointments" component={Appointments} />
    </Drawer.Navigator>
  );
}

export default CompanyNavigationDrawer;
