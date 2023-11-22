import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Service } from "../../types/Service";
import globalStyles from "../../styles/globalStyles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/CompanyAppointmentStack";
import Icon from "react-native-vector-icons/Ionicons";
import { ServiceDetailCard } from "../../components/ServiceDetailCard";

interface Props
  extends StackScreenProps<RootStackParamList, "ChooseEditService"> {}

const ChooseServiceToEdit = ({ navigation }: Props) => {
  const services: Service[] = [
    {
      id: 1,
      duration: 1.5,
      price: 300,
      serviceName: "Esculpidas",
    },
    {
      id: 2,
      duration: 1,
      price: 6000,
      serviceName: "Semipermanente manos",
    },
    {
      id: 3,
      duration: 2,
      price: 10000,
      serviceName: "Semipermanente manos y pies",
    },
    {
      id: 4,
      duration: 3,
      price: 3000,
      serviceName: "Esmaltado regular",
    },
    {
      id: 5,
      duration: 0.5,
      price: 600,
      serviceName: "Remocion servicio anterior",
    },
    {
      id: 6,
      duration: 1,
      price: 900,
      serviceName: "Esculpidas con diseño",
    },
    {
      id: 7,
      duration: 4.25,
      price: 200000,
      serviceName: "Semi con diseño",
    },
    {
      id: 8,
      duration: 3.75,
      price: 1283022,
      serviceName: "Otro servicio",
    },
  ];

  return (
    <View style={globalStyles.globalPadding}>
      <View>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
      <Text style={globalStyles.title}>Available Services</Text>
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceDetailCard item={item} />}
        style={{ marginBottom: 70 }}
      />
    </View>
  );
};

export default ChooseServiceToEdit;
