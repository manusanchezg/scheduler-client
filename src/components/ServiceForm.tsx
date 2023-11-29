import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Service } from "../types/Service";
import globalStyles, { colors } from "../styles/globalStyles";

import MyText from "./MyText";

interface Props {
  item: Service;
  handleService: () => void;
  buttonName: string;
}

const ServiceForm = ({ item, handleService, buttonName }: Props) => {
  const [service, setService] = useState({
    serviceName: item.serviceName,
    price: item.price,
    duration: item.duration,
  });

  const { duration, price, serviceName } = service;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        <MyText fontWeight="600SemiBold">Service Name:</MyText>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter service name"
        value={serviceName}
        onChangeText={(text) => setService({ ...service, serviceName: text })}
        placeholderTextColor={colors.text}
      />

      <Text style={styles.label}>
        <MyText fontWeight="600SemiBold">Duration:</MyText>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter duration"
        value={duration.toString()}
        onChangeText={(text) =>
          setService({ ...service, duration: Number(text) })
        }
        keyboardType="decimal-pad"
        placeholderTextColor={colors.text}
      />

      <Text style={styles.label}>
        <MyText fontWeight="600SemiBold">Price:</MyText>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price.toString()}
        onChangeText={(text) => setService({ ...service, price: Number(text) })}
        keyboardType="numeric"
        placeholderTextColor={colors.text}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleService}>
        <Text style={styles.buttonText}>
          <MyText fontWeight="700Bold">{buttonName}</MyText>
        </Text>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingVertical: 18,
    color: colors.text,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: colors.approved,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ServiceForm;
