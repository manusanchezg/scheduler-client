import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { ClientNavigationStackParamList } from "../../navigation/ClientNavigation";

import globalStyles, { colors } from "../../styles/globalStyles";

type Props = StackScreenProps<ClientNavigationStackParamList, "SendInfoForm">;

const SendInfoForm = ({ route, navigation }: Props) => {
  const { date, hour, selectedClient, service } = route.params;

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = () => {
    if (!name || !phoneNumber) {
      Alert.alert("Error", "Please complete al fields");
      return;
    }
    Alert.alert("Success", "Appointment Sent Correctly");
  };

  return (
    <View>
      <View style={globalStyles.descriptionContainer}>
        <Text style={globalStyles.title}>Summary:</Text>
        <Text
          style={{
            ...globalStyles.descriptionText,
            textAlign: "left",
            padding: 10,
          }}
        >
          You are doing "{service.name}" with {selectedClient} on the day{" "}
          {date.day}/{date.month}/{date.year} at {hour}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Complete your appointment</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name..."
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor={colors.text}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone number:</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. +5491234567898"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
            placeholderTextColor={colors.text}
          />
        </View>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={handleFormSubmit}
        >
          <Text style={globalStyles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendInfoForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.text
  },
  formGroup: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: colors.text
  },
  input: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: colors.text
  },
  button: {
    backgroundColor: "#4C2B36",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
