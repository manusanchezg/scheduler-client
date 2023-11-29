import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import globalStyles, { colors } from "../../styles/globalStyles";

import { CompanyAppointmentStackParamList } from "../../navigation/CompanyAppointmentStack";
import { statusColor, capitalizeFirstLetter } from "../../helpers";

import MyText from "../../components/MyText";

interface Props
  extends StackScreenProps<
    CompanyAppointmentStackParamList,
    "ViewDetailAppointment"
  > {}

const ViewDetailAppointment = ({ navigation, route }: Props) => {
  const { item } = route.params;
  return (
    <View style={globalStyles.globalPadding}>
      <View>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            marginVertical: 25,
            borderColor: colors.text,
            borderWidth: 1,
            borderRadius: 40,
            paddingVertical: 25,
          }}
        >
          <Text style={{ ...globalStyles.title, textAlign: "center" }}>
            <MyText fontWeight="600SemiBold">
              {item.service} on {item.date}
            </MyText>
          </Text>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                textAlign: "center",
              }}
            >
              <MyText>
                Appointment with{" "}
                <MyText fontWeight="700Bold">"{item.clientName}"</MyText>
              </MyText>
            </Text>
          </View>
        </View>
        <Text
          style={{
            ...globalStyles.title,
            marginTop: 20,
            color: statusColor(item.status),
          }}
        >
          <MyText fontWeight="600SemiBold">
            {capitalizeFirstLetter(item.status)}
          </MyText>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: colors.postponed,
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderRadius: 8,
            alignItems: "center",
            marginHorizontal: 30,
          }}
          onPress={() =>
            navigation.navigate("ManageAppointmentStatus", {
              status: item.status,
            })
          }
        >
          <Text style={{ color: colors.text, fontSize: 20 }}>
            <MyText>Manage Status</MyText>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewDetailAppointment;
