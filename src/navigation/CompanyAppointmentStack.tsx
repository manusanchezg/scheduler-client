import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Service } from "../types/Service";
import { ServiceStatus } from "../enums/serviceStatus";
import { Appointment } from "../interfaces/appointmentInterface";

import Home from "../screens/CompanyNavigation/Home";
import ViewDetailAppointment from "../screens/CompanyNavigation/ViewDetailAppointment";
import ManageAppointmentStatus from "../screens/CompanyNavigation/ManageAppointmentStatus";
import AddService from "../screens/CompanyNavigation/AddService";
import ChooseServiceToEdit from "../screens/CompanyNavigation/ChooseServiceToEdit";
import EditService from "../screens/CompanyNavigation/EditService";

import { colors } from "../styles/globalStyles";

export type CompanyAppointmentStackParamList = {
  HomeScreen: undefined;
  ViewDetailAppointment: { item: Appointment };
  ManageAppointmentStatus: { status: ServiceStatus };
  AddService: undefined;
  ChooseEditService: undefined;
  EditServiceDetails: { service: Service };
};

const Stack = createNativeStackNavigator<CompanyAppointmentStackParamList>();

const CompanyAppointmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen
        name="ViewDetailAppointment"
        component={ViewDetailAppointment}
      />
      <Stack.Screen
        name="ManageAppointmentStatus"
        component={ManageAppointmentStatus}
      />
      <Stack.Screen name="AddService" component={AddService} />
      <Stack.Screen name="ChooseEditService" component={ChooseServiceToEdit} />
      <Stack.Screen name="EditServiceDetails" component={EditService} />
    </Stack.Navigator>
  );
};

export default CompanyAppointmentStack;
