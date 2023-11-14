import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { RootStackParamList } from "../navigation/ClientNavigation";

type Props = StackScreenProps<RootStackParamList, "SelectDate">;

const SelectDate = ({ route }: Props) => {
  //? const [selectedDate, setSelectedDate] = useState<DateData | undefined>(
  //?   undefined
  //? );

  const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  const workout = { key: "workout", color: "green" };

  const { service } = route.params;

  const currentDate = new Date();

  // get dates until next year
  const nextYearDate = new Date();
  nextYearDate.setFullYear(currentDate.getFullYear() + 1);

  // get all dates until next year
  const dateRange: any = {};
  let currentDateIterator = new Date(currentDate);

  while (currentDateIterator <= nextYearDate) {
    const dateKey = currentDateIterator.toISOString().split("T")[0];
    dateRange[dateKey] = { marked: true };
    currentDateIterator.setMonth(currentDateIterator.getMonth() + 1);
  }

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
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        markingType={'multi-dot'}
        // esto va a ser un kilombo
        markedDates={{
          "2023-11-16": {dots: [vacation, massage, workout], selected: true, marked: true },
          "2023-11-20": { selected: true, marked: true },
          "2023-11-21": {dots: [vacation, massage], selected: true, marked: true },
          "2023-11-27": { selected: true, marked: true },
          "2023-11-25": {dots: [vacation, workout], selected: true, marked: true },
          "2023-11-30": { selected: true, marked: true },
          "2023-11-17": { marked: true },
          "2023-11-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2023-11-19": { disabled: true, disableTouchEvent: true },
          "2023-11-28": { disabled: true, disableTouchEvent: true },
        }}
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
        }}
      />
    </View>
  );
};

export default SelectDate;
