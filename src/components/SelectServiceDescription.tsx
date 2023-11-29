import React from "react";
import { Text, View } from "react-native";

import globalStyles from "../styles/globalStyles";
import MyText from "./MyText";

export const Description = () => {
  return (
    <View style={globalStyles.descriptionContainer}>
      <Text style={globalStyles.descriptionText}>
        <MyText fontWeight="400Regular">
          This is going to be a little description about the business, what does
          it do, when it opened, who is the owner, if he likes the job, i don't
          know I'm just putting words in here so I don't put a lorem ipsum.
        </MyText>
      </Text>
    </View>
  );
};
