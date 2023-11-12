import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyles";

interface Props extends StackScreenProps<any, any> {}

const SelectService = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Select Service</Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("SelectDate")}
      >
        <Text style={globalStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectService;
