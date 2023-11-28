import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import globalStyles, { colors } from "../../styles/globalStyles";
import { AppointmentCard } from "../../components/AppointmentCard";
import { Appointment } from "../../interfaces/appointmentInterface";
import { ServiceStatus } from "../../enums/serviceStatus";
import { StackScreenProps } from "@react-navigation/stack";
import { CompanyAppointmentStackParamList } from "../../navigation/CompanyAppointmentStack";
import MyText from "../../components/MyText";

interface Props
  extends StackScreenProps<CompanyAppointmentStackParamList, "HomeScreen"> {}

const Home = ({ navigation }: Props) => {
  const upcomingAppointments: Appointment[] = [
    // pending, approved, canceled, postponed
    {
      id: 1,
      clientName: "Mariana",
      date: "24-11-2023",
      service: "Service 1",
      status: ServiceStatus.Pending,
    },
    {
      id: 2,
      clientName: "Milagros",
      date: "12-12-2023",
      service: "Service 2",
      status: ServiceStatus.Approved,
    },
    {
      id: 3,
      clientName: "Julieta",
      date: "20-12-2023",
      service: "Service 3",
      status: ServiceStatus.Canceled,
    },
    {
      id: 4,
      clientName: "Camila",
      date: "21-12-2023",
      service: "Service 4",
      status: ServiceStatus.Approved,
    },
    {
      id: 5,
      clientName: "Manuel",
      date: "22-12-2023",
      service: "Service 5",
      status: ServiceStatus.Postponed,
    },
    {
      id: 6,
      clientName: "Aramis",
      date: "23-12-2023",
      service: "Service 6",
      status: ServiceStatus.Canceled,
    },
    {
      id: 7,
      clientName: "Sol",
      date: "24-05-2024",
      service: "Service 7",
      status: ServiceStatus.Canceled,
    },
  ];
  return (
    <>
      <View style={{ maxHeight: "80%" }}>
        <Text style={globalStyles.title}>
          <MyText fontWeight="600SemiBold">Current Appointments</MyText>
        </Text>
        <FlatList
          data={upcomingAppointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <AppointmentCard item={item} />}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            ...globalStyles.button,
            backgroundColor: colors.approved,
          }}
          onPress={() => navigation.navigate("AddService")}
        >
          <Text
            style={{
              ...globalStyles.buttonText,
              fontSize: 20,
              color: colors.text,
            }}
          >
            <MyText fontWeight="600SemiBold">Add Service</MyText>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...globalStyles.button,
            backgroundColor: colors.postponed,
          }}
          onPress={() => navigation.navigate("ChooseEditService")}
        >
          <Text
            style={{
              ...globalStyles.buttonText,
              fontSize: 20,
              color: colors.text,
            }}
          >
            <MyText fontWeight="600SemiBold">Edit Service</MyText>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
