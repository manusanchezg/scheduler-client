import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { AppointmentCard } from "../../components/AppointmentCard";
import { Appointment } from "../../interfaces/appointmentInterface";
import { ServiceStatus } from "../../enums/serviceStatus";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/CompanyAppointmentStack";

interface Props
  extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

const Home = ({navigation}: Props) => {
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
        <Text style={globalStyles.title}>Current Appointments</Text>
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
            borderWidth: 1,
            borderColor: "#BCB0BF",
            backgroundColor: "#C1EDC5",
          }}
        >
          <Text
            style={{
              ...globalStyles.buttonText,
              fontSize: 18,
              color: "#6B8E23",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("AddService")}
          >
            Add Service
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...globalStyles.button,
            borderWidth: 1,
            borderColor: "#BCB0BF",
            backgroundColor: "#C4E4F8",
          }}
        >
          <Text
            style={{
              ...globalStyles.buttonText,
              fontSize: 18,
              color: "#6E8B9E",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("ChooseEditService")}
          >
            Edit Service
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
