import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { RootStackParamList } from "../navigation/ClientNavigation";

type Props = StackScreenProps<RootStackParamList, "SelectDate">;

const SelectDate = ({ route, navigation }: Props) => {
  const { service, selectedClient } = route.params;

  const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  const workout = { key: "workout", color: "green" };


  const currentDate = new Date();

  const markedDates = {
    "2023-11-16": {
      dots: [vacation, massage, workout],
      marked: true,
    },
    "2023-11-20": { selected: true, marked: true },
    "2023-11-21": {
      dots: [vacation, massage],
      marked: true,
    },
    "2023-11-27": { selected: true, marked: true },
    "2023-11-25": {
      dots: [vacation, workout],
      marked: true,
    },
    "2023-11-30": { selected: true, marked: true },
    "2023-11-17": { marked: true },
    "2023-11-18": { marked: true, dotColor: "red", activeOpacity: 0 },
    "2023-11-19": { disabled: true, disableTouchEvent: true },
    "2023-11-28": { disabled: true, disableTouchEvent: true },
  };

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
        You've selected "{service.name}"
      </Text>
      <Calendar
        // avoid that people can get an appointment before today
        minDate={currentDate.toISOString().split("T")[0]}
        onDayPress={(date) => {
          navigation.navigate("SelectHour", {date, selectedClient, service});
        }}
        markingType={"multi-dot"}
        // esto va a ser un kilombo
        markedDates={markedDates}
        theme={{
          agendaDayNumColor: "#141115",
          agendaKnobColor: "#4C2B36",
          arrowColor: "#4C2B36",
          monthTextColor: "#4C2B36",
          textDayFontFamily: "",
          textMonthFontWeight: "bold",
          textMonthFontSize: 22,
          dotColor: "#7C70FF",
          todayTextColor: "#7C70FF",
          textDayFontWeight: "500",
          textInactiveColor: "#BCB0BF",
          selectedDayTextColor: "#4C2B36",
          selectedDayBackgroundColor: "#C6B38E",
          textDayFontSize: 18,
          weekVerticalMargin: 15,
        }}
      />
    </View>
  );
};

export default SelectDate;
