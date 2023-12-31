import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import ServiceForm from "../../components/ServiceForm";
import { CompanyAppointmentStackParamList } from "../../navigation/CompanyAppointmentStack";

import { colors } from "../../styles/globalStyles";

const AddService = () => {
  const navigation =
    useNavigation<StackNavigationProp<CompanyAppointmentStackParamList>>();
  const [newService, setNewService] = useState({
    id: 1,
    serviceName: "",
    duration: 0,
    price: 0,
  });

  const handleAddService = () => {
    // Aquí implementare la lógica para guardar el nuevo servicio en mi base de datos
    console.log("Adding service:", { newService });
    // realizar la navegación hacia el home
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ margin: 15 }}>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Icon name="arrow-back-outline" size={40} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ServiceForm
        buttonName="Add Service"
        handleService={handleAddService}
        item={newService}
      />
    </View>
  );
};

export default AddService;
