import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

import { ClientNavigationStackParamList } from "../../navigation/ClientNavigation";

import { colors } from "../../styles/globalStyles";

type Props = StackScreenProps<ClientNavigationStackParamList, "SelectDate">;

const SelectDate = ({ route, navigation }: Props) => {
  const { service, selectedClient } = route.params;

  const currentDate = new Date();

  let markedDates = {
    "2023-11-16": { marked: true },
    "2023-11-20": { marked: true },
    "2023-11-21": { marked: true },
    "2023-11-27": { marked: true },
    "2023-11-25": { marked: true },
    "2023-11-30": { marked: true },
    "2023-11-17": { marked: true },
    "2023-11-18": { marked: true, activeOpacity: 0 },
    "2023-11-19": { disabled: true, disableTouchEvent: true },
    "2023-11-28": { disabled: true, disableTouchEvent: true },
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          marginVertical: 20,
          color: colors.text,
          fontWeight: "500",
        }}
      >
        You've selected "{service.name}"
      </Text>
      <Calendar
        // avoid that people can get an appointment before today
        minDate={currentDate.toISOString().split("T")[0]}
        onDayPress={(date) => {
          navigation.navigate("SelectHour", { date, selectedClient, service });
          markedDates = { ...markedDates, [date.dateString]: { marked: true } };
        }}
        markingType={"multi-dot"}
        // esto va a ser un kilombo
        markedDates={markedDates}
        style={{
          backgroundColor: colors.backgroundSec,
          borderRadius: 15,
          overflow: "hidden",
          paddingVertical: 10,
        }}
        theme={{
          calendarBackground: colors.backgroundSec,
          agendaDayNumColor: colors.text,
          arrowColor: colors.text,
          monthTextColor: colors.text,
          textDayFontFamily: "",
          textMonthFontWeight: "bold",
          textMonthFontSize: 22,
          todayTextColor: colors.pink,
          textDayFontWeight: "500",
          textDayFontSize: 22,
          textInactiveColor: colors.background,
          selectedDayTextColor: "#4C2B36",
          selectedDayBackgroundColor: "#C6B38E",
          weekVerticalMargin: 20,
          arrowHeight: 30,
          textDayHeaderFontSize: 15,
          textDayHeaderFontWeight: "500",
        }}
      />
    </View>
  );
};

export default SelectDate;
