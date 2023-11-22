import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { Service } from "../types/Service";

interface Props {
    item: Service,
    handleService: () => void,
    buttonName: string,
}

const Form = ({ item, handleService, buttonName }: Props) => {
  const [service, setService] = useState({
    serviceName: item.serviceName,
    price: item.price,
    duration: item.duration,
  });

  const { duration, price, serviceName } = service;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Service Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter service name"
        value={serviceName}
        onChangeText={(text) => setService({ ...service, serviceName: text })}
      />

      <Text style={styles.label}>Duration:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter duration"
        value={duration.toString()}
        onChangeText={(text) => setService({ ...service, duration: Number(text) })}
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price.toString()}
        onChangeText={(text) => setService({ ...service, price: Number(text) })}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleService}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.globalPadding,
    margin: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;
