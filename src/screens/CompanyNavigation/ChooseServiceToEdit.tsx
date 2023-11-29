import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Service } from "../../types/Service";
import globalStyles, { colors } from "../../styles/globalStyles";

import { CompanyAppointmentStackParamList } from "../../navigation/CompanyAppointmentStack";
import { ServiceDetailCard } from "../../components/ServiceDetailCard";
import MyText from "../../components/MyText";

interface Props
  extends StackScreenProps<
    CompanyAppointmentStackParamList,
    "ChooseEditService"
  > {}

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
    <View
      style={{
        ...globalStyles.globalPadding,
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <View>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} color={colors.text} />
        </TouchableOpacity>
      </View>
      <Text style={globalStyles.title}>
        <MyText fontWeight="600SemiBold">Available Services</MyText>
      </Text>
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceDetailCard item={item} />}
        style={{ marginBottom: 70 }}
      />
    </View>
  );
};

export default ChooseServiceToEdit;
