import React from "react";
import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/globalStyles";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> {}

export const SelectServiceScroll = ({ navigation }: Props) => {
  const services = [
    { id: 1, name: "Semi-Permanente", price: 2000 },
    { id: 2, name: "Esculpidas PolyGel", price: 6000 },
    { id: 3, name: "Manicura Comun", price: 3500 },
    { id: 4, name: "Remover Servicio", price: 1000 },
    { id: 5, name: "Pedicura Completa", price: 80000 },
    { id: 6, name: "Manos y Pies Semi", price: 32000 },
    { id: 7, name: "Esculpidas Manos Semi Pies", price: 9000 },
  ];
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.title}>Select Service</Text>

      <ScrollView style={globalStyles.scrollContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={globalStyles.serviceItem}
            onPress={() => navigation.navigate("SelectDate", { service })}
          >
            <Text style={globalStyles.titleServiceItem}>{service.name}</Text>
            <Text style={globalStyles.priceServiceItem}>${service.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
