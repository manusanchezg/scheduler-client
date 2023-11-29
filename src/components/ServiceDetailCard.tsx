import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { EditServiceStackParamList } from "../navigation/EditServiceStack";

import globalStyles, { colors } from "../styles/globalStyles";
import { Service } from "../types/Service";
import { decimalToHoursMinutes } from "../helpers";

interface Props {
  item: Service;
}

export const ServiceDetailCard = ({ item }: Props) => {
  const navigation = useNavigation<StackNavigationProp<EditServiceStackParamList>>();

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
