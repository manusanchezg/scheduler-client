import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../../styles/globalStyles";
import { ClientNavigationStackParamList } from "../../navigation/ClientNavigation";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<ClientNavigationStackParamList, "SendInfoForm">;

const SendInfoForm = ({ route, navigation }: Props) => {
  const { date, hour, selectedClient, service } = route.params;

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = () => {
    // Validar que se haya ingresado nombre y número de teléfono
    if (!name || !phoneNumber) {
      Alert.alert("Error", "Por favor, complete todos los campos.");
      return;
    }

    // Aquí puedes enviar el mensaje con la información del turno
    const message = `Hola ${name}, tu turno está confirmado para el día X a las Y. Gracias por elegir nuestros servicios.`;

    // Puedes agregar aquí la lógica para enviar el mensaje
    // Puedes usar servicios como Twilio, Firebase Cloud Messaging, etc.

    // Mostrar un mensaje de éxito
    Alert.alert("Éxito", "Mensaje enviado correctamente.");
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
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
