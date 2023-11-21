import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Appointment } from "../interfaces/appointmentInterface";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/CompanyAppointmentStack";

interface Props {
  item: Appointment;
}

export const AppointmentCard = ({ item }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); //TODO <StackNavigationProp<RootStackParamList>>

  return (
    <TouchableOpacity
      style={globalStyles.itemSelect}
      onPress={() => navigation.navigate("ViewDetailAppointment", {item})}
    >
      <Text style={globalStyles.descriptionText}>
        {item.clientName} {item.date}
      </Text>
      <View
        style={{
          position: "absolute",
          top: 10,
          right: 20,
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <TouchableOpacity>
          <Icon name="edit" size={35} color="#141115" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="times" size={35} color="#AA0000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
