import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../../styles/globalStyles";
import { AppointmentCard } from "../../components/AppointmentCard";
import { Appointment } from "../../interfaces/appointmentInterface";

const Home = () => {
  const upcomingAppointments: Appointment[] = [
    {
      id: 1,
      clientName: "Mariana",
      date: "24-11-2023",
    },
    {
      id: 2,
      clientName: "Milagros",
      date: "12-12-2023",
    },
    {
      id: 3,
      clientName: "Julieta",
      date: "20-12-2023",
    },
    {
      id: 4,
      clientName: "Camila",
      date: "21-12-2023",
    },
    {
      id: 5,
      clientName: "Manuel",
      date: "22-12-2023",
    },
    {
      id: 6,
      clientName: "Aramis",
      date: "23-12-2023",
    },
    {
      id: 7,
      clientName: "Sol",
      date: "24-05-2024",
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
          >
            Add Service
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...globalStyles.button,
            borderWidth: 1,
            borderColor: "#BCB0BF",
            backgroundColor: "#C4E4F8"
          }}
        >
          <Text
            style={{
              ...globalStyles.buttonText,
              fontSize: 18,
              color: "#6E8B9E",
              fontWeight: "bold",
            }}
          >
            Edit Service
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
