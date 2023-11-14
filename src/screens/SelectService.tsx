import React from "react";
import { ScrollView } from "react-native";

import { ImageView } from "../components/ImageView";
import { Description } from "../components/SelectServiceDescription";
import { Footer } from "../components/Footer";

const SelectService = () => {
  return (
    <ScrollView>
      <ImageView />
      <Description />
      <SelectService />
      <Footer />
    </ScrollView>
  );
};

export default SelectService;
