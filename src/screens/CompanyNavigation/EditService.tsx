import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import ServiceForm from "../../components/ServiceForm";
import { EditServiceStackParamList } from "../../navigation/EditServiceStack";

import { colors } from "../../styles/globalStyles";

interface Props
  extends StackScreenProps<EditServiceStackParamList, "EditServiceDetails"> {}

const EditService = ({ route }: Props) => {
  const { service } = route.params;
  const navigation =
    useNavigation<StackNavigationProp<EditServiceStackParamList>>();

  return (
    <>
      <View style={{ margin: 15 }}>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Icon name="arrow-back-outline" size={40} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ServiceForm
        buttonName="Edit Service"
        handleService={() => {}}
        item={service}
      />
    </>
  );
};

export default EditService;
