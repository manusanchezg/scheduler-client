import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Service } from "../types/Service";

import ChooseServiceToEdit from "../screens/CompanyNavigation/ChooseServiceToEdit";
import EditService from "../screens/CompanyNavigation/EditService";

export type EditServiceStackParamList = {
  ChooseEditService: undefined;
  EditServiceDetails: {service: Service};
};

const Stack = createNativeStackNavigator<EditServiceStackParamList>();

const EditServiceStack = () => {
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
      <Stack.Screen name="ChooseEditService" component={ChooseServiceToEdit} />
      <Stack.Screen name="EditServiceDetails" component={EditService} />
    </Stack.Navigator>
  );
};

export default EditServiceStack;
