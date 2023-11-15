import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { RootStackParamList } from "../navigation/ClientNavigation";

type Props = StackScreenProps<RootStackParamList, "SelectHour">;

const availableHours = [
  { id: 1, time: "09:00 AM" },
  { id: 2, time: "10:00 AM" },
  { id: 3, time: "11:00 AM" },
  // Agrega más horas según sea necesario
];

const SelectHour = ({ route }: Props) => {
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const { date } = route.params;

  const handleHourSelection = (hour: string) => {
    setSelectedHour(hour);
  };

  const renderHourItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.hourItem, selectedHour === item.id.toString() && styles.selectedHour]}
      onPress={() => handleHourSelection(item.id.toString())}
    >
      <Text>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginVertical: 20,
          color: "#141115",
          fontWeight: "500",
        }}
      >
        You have selected your appointment for the day{" "}
        <Text
          style={{
            fontWeight: "bold",
            color: "#4C2B36",
          }}
        >
          {date.day}/{date.month}
        </Text>
      </Text>
      <View style={styles.container}>
        <Text style={styles.title}>Available Hours</Text>
        <FlatList
          data={availableHours}
          keyExtractor={(hour) => hour.id.toString()}
          renderItem={renderHourItem}
        />
      </View>
    </View>
  );
};

export default SelectHour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  hourItem: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  selectedHour: {
    backgroundColor: "blue", // Puedes cambiar el color de fondo cuando se selecciona una hora
  },
});
