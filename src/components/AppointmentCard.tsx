import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Appointment } from "../interfaces/appointmentInterface";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompanyAppointmentStackParamList } from "../navigation/CompanyAppointmentStack";
import { statusColor } from "../helpers/statusColor";
import MyText from "./MyText";

interface Props {
  item: Appointment;
}

export const AppointmentCard = ({ item }: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<CompanyAppointmentStackParamList>>();

  return (
    <TouchableOpacity
      style={{
        ...globalStyles.itemSelect,
        backgroundColor: statusColor(item.status),
      }}
      onPress={() => navigation.navigate("ViewDetailAppointment", { item })}
    >
      <MyText fontWeight="500Medium">
        <Text style={globalStyles.descriptionText}>
          {item.clientName} {item.date}
        </Text>
      </MyText>
      <View
        style={{
          position: "absolute",
          top: 10,
          right: 20,
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ManageAppointmentStatus", {
              status: item.status,
            })
          }
        >
          <Icon name="edit" size={35} color="#141115" />
        </TouchableOpacity>
        <TouchableOpacity
        //TODO deleteService
        // onPress={()=> deleteServie()}
        >
          <Icon name="times" size={35} color="#AA0000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
