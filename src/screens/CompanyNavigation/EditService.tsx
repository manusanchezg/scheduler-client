import React from "react";
import { Text, View } from "react-native";
import Form from "../../components/Form";
import { Service } from "../../types/Service";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/EditServiceStack";

interface Props
  extends StackScreenProps<RootStackParamList, "EditServiceDetails"> {}

const EditService = ({ route }: Props) => {
  const { service } = route.params;

  return (
    <View>
      <Text>Gestionar Servicios</Text>
      <Form buttonName="Edit" handleService={() => {}} item={service} />
    </View>
  );
};

export default EditService;
