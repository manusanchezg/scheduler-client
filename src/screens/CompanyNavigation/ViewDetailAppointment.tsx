import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "../../navigation/CompanyAppointmentStack";
import globalStyles from "../../styles/globalStyles";

interface Props
  extends StackScreenProps<RootStackParamList, "ViewDetailAppointment"> {}

const ViewDetailAppointment = ({ navigation, route }: Props) => {
  const { item } = route.params;
  return (
    <View>
      <View style={{ marginTop: 10, marginLeft: 15 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 30 }}>
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
          <Text style={{ marginTop: 10 }}>{item.status}</Text>
        </View>
        <Button title="Manage Status"/>
      </View>
    </View>
  );
};

export default ViewDetailAppointment;
