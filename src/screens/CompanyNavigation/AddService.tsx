import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const AddService = () => {
  return (
    <View>
      <Text>Gestionar Servicios</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <Text>
              {item.serviceName} - ${item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AddService;
