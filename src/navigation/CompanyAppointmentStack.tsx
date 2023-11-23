import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/CompanyNavigation/Home";
import ViewDetailAppointment from "../screens/CompanyNavigation/ViewDetailAppointment";
import { Appointment } from "../interfaces/appointmentInterface";
import ManageAppointmentStatus from "../screens/CompanyNavigation/ManageAppointmentStatus";
import { ServiceStatus } from "../enums/serviceStatus";
import AddService from "../screens/CompanyNavigation/AddService";
import ChooseServiceToEdit from "../screens/CompanyNavigation/ChooseServiceToEdit";
import { Service } from "../types/Service";
import EditService from "../screens/CompanyNavigation/EditService";

export type RootStackParamList = {
  HomeScreen: undefined;
  ViewDetailAppointment: { item: Appointment };
  ManageAppointmentStatus: { status: ServiceStatus };
  AddService: undefined;
  ChooseEditService: undefined;
  EditServiceDetails: { service: Service };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const CompanyAppointmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
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
