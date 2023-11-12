import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectService from "../screens/SelectService";
import SelectDate from "../screens/SelectDate";

const Stack = createNativeStackNavigator();

const ClientNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
          margin: 15
        },
      }}
    >
      <Stack.Screen name="NailsDesign" component={SelectService} />
      <Stack.Screen name="SelectDate" component={SelectDate} />
    </Stack.Navigator>
  );
};

export default ClientNavigator;
