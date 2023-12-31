import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { ClientNavigationStackParamList } from "../../navigation/ClientNavigation";

import globalStyles, { colors } from "../../styles/globalStyles";

type Props = StackScreenProps<ClientNavigationStackParamList, "SelectHour">;

const availableHours = [
  { id: 1, time: "06:30" },
  { id: 2, time: "08:30" },
  { id: 3, time: "09:00" },
  { id: 4, time: "10:00" },
  { id: 5, time: "10:30" },
  { id: 6, time: "11:00" },
  { id: 7, time: "12:20" },
  { id: 8, time: "17:15" },
  { id: 9, time: "17:45" },
  { id: 10, time: "18:30" },
  { id: 11, time: "19:30" },
  { id: 12, time: "20:30" },
  { id: 13, time: "21:30" },
  { id: 14, time: "13:15" },
];

const SelectHour = ({ route, navigation }: Props) => {
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const { date, selectedClient, service } = route.params;

  const handleHourSelection = (hour: string) => {
    setSelectedHour(hour);
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginVertical: 20,
          color: colors.text,
          fontWeight: "500",
        }}
      >
        You have selected your appointment for the day{" "}
        <Text
          style={{
            fontWeight: "bold",
            color: colors.text,
          }}
        >
          {date.day}/{date.month}
        </Text>
      </Text>
      <View style={styles.container}>
        <Text style={styles.title}>Available Hours</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            maxHeight: 450,
            overflow: "scroll",
          }}
        >
          {availableHours.map((hour) => (
            <TouchableOpacity
              style={[
                styles.hourItem,
                selectedHour === hour.time.toString() && styles.selectedHour,
              ]}
              onPress={() => handleHourSelection(hour.time.toString())}
            >
              <Text
                style={{
                  color: colors.text,
                  fontSize: 16,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {hour.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (selectedHour)
            navigation.navigate("SendInfoForm", {
              hour: selectedHour!,
              date,
              selectedClient,
              service,
            });
          else Alert.alert("Error", "You need to select an hour");
        }}
        style={{
          ...globalStyles.button,
          alignSelf: "flex-end",
          marginRight: 30,
          marginTop: 20,
          backgroundColor: selectedHour ? colors.approved : "gray",
          opacity: selectedHour ? 1 : 0.6,
        }}
      >
        <Text style={globalStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectHour;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.text,
  },
  hourItem: {
    paddingVertical: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 8,
    width: 90,
  },
  selectedHour: {
    backgroundColor: colors.approved,
  },
});
