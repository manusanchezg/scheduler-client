import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> {}

const SelectService = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Select Service</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SelectDate")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectService;
