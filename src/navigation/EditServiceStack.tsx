import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseServiceToEdit from "../screens/CompanyNavigation/ChooseServiceToEdit";
import EditService from "../screens/CompanyNavigation/EditService";
import { Service } from "../types/Service";

export type RootStackParamList = {
  ChooseEditService: undefined;
  EditServiceDetails: {service: Service};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
