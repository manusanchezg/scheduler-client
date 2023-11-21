import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/CompanyNavigation/Home";
import ViewDetailAppointment from "../screens/CompanyNavigation/ViewDetailAppointment";

const Stack = createNativeStackNavigator<any>();

const CompanyAppointmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen
        name="ViewDetailAppointment"
        component={ViewDetailAppointment}
      />
    </Stack.Navigator>
  );
};

export default CompanyAppointmentStack;
