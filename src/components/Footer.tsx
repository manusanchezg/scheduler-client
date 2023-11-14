import React from "react";
import { Text, View, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";

export const Footer = () => {
  return (
    <View style={globalStyles.footerContainer}>
      <Text style={globalStyles.descriptionText}>
        This would be a footer with somethings inside, like social media and
        stuff
      </Text>
    </View>
  );
};
