import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import globalStyles, { colors } from "../styles/globalStyles";
import { Service } from "../types/Service";
import { decimalToHoursMinutes } from "../helpers/changeDecimalToHour";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/EditServiceStack";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  item: Service;
}

export const ServiceDetailCard = ({ item }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={{
        ...globalStyles.itemSelect,
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}
      onPress={() =>
        navigation.navigate("EditServiceDetails", { service: item })
      }
    >
      <Text
        style={{
          fontSize: 20,
          color: colors.text,
          marginBottom: 15,
        }}
      >
        {item.serviceName}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontSize: 16 }}>
          Duration: {decimalToHoursMinutes(item.duration)}
        </Text>
        <Text style={{ fontSize: 16 }}>Price: ${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
