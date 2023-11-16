import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  const upcomingAppointments = [
    {
      id: 1,
      clientName: "Mariana",
      date: "24-05-2024",
    },
    {
      id: 2,
      clientName: "Mariana",
      date: "24-05-2024",
    },
    {
      id: 3,
      clientName: "Mariana",
      date: "24-05-2024",
    },
    {
      id: 4,
      clientName: "Mariana",
      date: "24-05-2024",
    },
    {
      id: 5,
      clientName: "Mariana",
      date: "24-05-2024",
    },
    {
      id: 6,
      clientName: "Mariana",
      date: "24-05-2024",
    },
    {
      id: 7,
      clientName: "Mariana",
      date: "24-05-2024",
    },
  ];
  return (
    <View style={{ maxHeight: "90%" }}>
      <Text style={globalStyles.title}>Current Appointments</Text>
      <FlatList
        data={upcomingAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={globalStyles.itemSelect} onPress={() => {}}>
            <Text style={globalStyles.descriptionText}>
              {item.clientName} - {item.date}
            </Text>
            <View
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <Icon name="edit" size={20} color="#141115" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="times" size={20} color="#4C2B36" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
