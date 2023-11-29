import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, ScrollView, TouchableOpacity, View } from "react-native";

import { ImageView } from "../../components/ImageView";
import { Description } from "../../components/SelectServiceDescription";
import { ClientNavigationStackParamList } from "../../navigation/ClientNavigation";

import globalStyles from "../../styles/globalStyles";
import MyText from "../../components/MyText";

interface Props
  extends StackScreenProps<ClientNavigationStackParamList, "SelectService"> {}

const SelectService = ({ navigation }: Props) => {
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
    <ScrollView>
      <ImageView />
      <Description />
      <View style={globalStyles.mainContainer}>
        <Text style={globalStyles.title}>
          <MyText>Select Service</MyText>
        </Text>

        <ScrollView style={globalStyles.scrollContainer}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={globalStyles.serviceItem}
              onPress={() => navigation.navigate("SelectClient", { service })}
            >
              <Text style={globalStyles.titleServiceItem}>{service.name}</Text>
              <Text style={globalStyles.priceServiceItem}>
                ${service.price}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* <Footer /> */}
    </ScrollView>
  );
};

export default SelectService;
