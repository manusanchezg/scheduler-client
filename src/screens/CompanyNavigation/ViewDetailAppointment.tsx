import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { CompanyAppointmentStackParamList } from "../../navigation/CompanyAppointmentStack";
import globalStyles from "../../styles/globalStyles";
import { statusColor } from "../../helpers/statusColor";

interface Props
  extends StackScreenProps<CompanyAppointmentStackParamList, "ViewDetailAppointment"> {}

const ViewDetailAppointment = ({ navigation, route }: Props) => {
  const { item } = route.params;
  return (
    <View style={globalStyles.globalPadding}>
      <View>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ ...globalStyles.title, textAlign: "auto" }}>
          {item.service} on {item.date}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Appointment with {item.clientName}
          </Text>
          <Text
            style={{
              ...globalStyles.title,
              marginTop: 10,
              color: statusColor(item.status),
              textAlign: "auto",
            }}
          >
            {item.status}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#3498db",
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderRadius: 8,
            alignItems: "center",
            marginHorizontal: 30,
          }}
          onPress={() => navigation.navigate("ManageAppointmentStatus", {status: item.status})}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Manage Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewDetailAppointment;
