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

import globalStyles, { colors } from "../../styles/globalStyles";

interface Client {
  id: number;
  name: string;
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
  const [selectedClient, setSelectedClient] = useState<string>("");

  const renderClientItem = ({ item }: { item: Client }) => (
    <TouchableOpacity
      style={globalStyles.itemSelect}
      onPress={() => {
        setSelectedClient(item.name);
        navigation.navigate("SelectDate", { service, selectedClient });
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: colors.text,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: 16,
          fontSize: 24,
          marginVertical: 20,
          color: colors.text,
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
