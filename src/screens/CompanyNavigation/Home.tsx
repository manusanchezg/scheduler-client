import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  const upcomingAppointments = [
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
    <View style={{ maxHeight: "80%" }}>
      <Text style={globalStyles.title}>Current Appointments</Text>
      <FlatList
        data={upcomingAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={globalStyles.itemSelect} onPress={() => {}}>
            <Text style={globalStyles.descriptionText}>
              {item.clientName}  {item.date}
            </Text>
            <View
              style={{
                position: "absolute",
                top: 15,
                right: 15,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <Icon name="edit" size={35} color="#141115" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="times" size={35} color="#4C2B36" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
