import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ClientNavigationStackParamList } from "../../navigation/ClientNavigation";
import globalStyles from "../../styles/globalStyles";

interface Client {
  id: number;
  name: string;
}

interface Service {
  id: number;
  name: string;
  price: number;
}

const clients: Client[] = [
  { id: 1, name: "Milagros" },
  { id: 2, name: "Julieta" },
  { id: 3, name: "Sol" },
  { id: 4, name: "Sofia" },
  // Agrega más clientes según sea necesario
];

type Props = StackScreenProps<ClientNavigationStackParamList, "SelectClient">;

const SelectClient = ({ navigation, route }: Props) => {
  const { service } = route.params;

  const renderClientItem = ({ item }: { item: Client }) => (
    <TouchableOpacity
      style={globalStyles.itemSelect}
      onPress={() =>
        navigation.navigate("SelectDate", { service, selectedClient: "hola" })
      }
    >
      <Text style={{
        fontSize: 25,
        fontWeight: "bold",
        color: "#4C2B36",

      }}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: 16,
          fontSize: 20,
          marginVertical: 20,
          color: "#141115",
          fontWeight: "500",
        }}
      >
        Select a Client:
      </Text>
      <FlatList
        data={clients}
        keyExtractor={(client) => client.id.toString()}
        renderItem={renderClientItem}
      />
    </View>
  );
};
export default SelectClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
