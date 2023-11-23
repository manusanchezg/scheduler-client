import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { CompanyAppointmentStackParamList } from "../../navigation/CompanyAppointmentStack";
import globalStyles, { colors } from "../../styles/globalStyles";
import { ServiceStatus } from "../../enums/serviceStatus";

interface Props
  extends StackScreenProps<CompanyAppointmentStackParamList, "ManageAppointmentStatus"> {}

const ManageAppointmentStatus = ({ navigation, route }: Props) => {
  const { status } = route.params;

  const buttons = [
    {
      status: ServiceStatus.Pending,
      icon: "hourglass",
      text: "Mark as Pending",
      style: {
        backgroundColor: colors.pending,
      },
    },
    {
      status: ServiceStatus.Approved,
      icon: "checkmark",
      text: "Mark as Approved",
      style: {
        backgroundColor: colors.approved,
      },
    },
    {
      status: ServiceStatus.Canceled,
      icon: "close",
      text: "Mark as Canceled",
      style: {
        backgroundColor: colors.canceled,
      },
    },
    {
      status: ServiceStatus.Completed,
      icon: "checkmark-done",
      text: "Mark as Completed",
      style: {
        backgroundColor: colors.completed,
      },
    },
  ];

  const filteredButtons = buttons.filter((button) => button.status !== status);
  return (
    <View style={globalStyles.globalPadding}>
      <View>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Icon name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        {filteredButtons.map((button) => (
          <TouchableOpacity
            key={button.status}
            style={{ ...globalStyles.statusButton, ...button.style }}
            onPress={() => {}}
          >
            <Icon name={button.icon} size={40} />
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ManageAppointmentStatus;
