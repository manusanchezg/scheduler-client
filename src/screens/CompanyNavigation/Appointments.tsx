import React from "react";
import { View, FlatList } from "react-native";

import { ServiceStatus } from "../../enums/serviceStatus";
import { Appointment } from "../../interfaces/appointmentInterface";

import { AppointmentCard } from "../../components/AppointmentCard";
import { colors } from "../../styles/globalStyles";

const Appointments = () => {
  //TODO buscador de appointents, Voy a mostrar todas?
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
    <View style={{flex:1, backgroundColor: colors.background}}>
      <FlatList
        data={upcomingAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AppointmentCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Appointments;
