import React from "react";
import { Text, View, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";

export const Description = () => {
  return (
    <View style={globalStyles.descriptionContainer}>
      <Text style={globalStyles.descriptionText}>
        This is going to be a little description about the business, what does
        it do, when it opened, who is the owner, if he likes the job, i don't
        know I'm just putting words in here so I don't put a lorem ipsum.
      </Text>
    </View>
  );
};
