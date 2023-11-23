import React from "react";
import { View, TouchableOpacity } from "react-native";
import Form from "../../components/Form";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { EditServiceStackParamList } from "../../navigation/EditServiceStack";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

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
          <Icon name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
      <Form buttonName="Edit Service" handleService={() => {}} item={service} />
    </>
  );
};

export default EditService;
