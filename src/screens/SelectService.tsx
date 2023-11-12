import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageSourcePropType,
  Modal,
  GestureResponderEvent,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyles";

interface Props extends StackScreenProps<any, any> {}

const SelectService = ({ navigation }: Props) => {
  const [selectedImage, setSelectedImage] =
    useState<ImageSourcePropType | null>(null);

  const handleImagePress = (image: ImageSourcePropType) => {
    setSelectedImage(image);
  };

  const closeModal = (event: GestureResponderEvent) => {
    // I want to make that if you touch outside the image it closes
    setSelectedImage(null);
  };
  const businessImages = [
    require("../assets/nails-1.jpg"),
    require("../assets/nails-2.jpg"),
    require("../assets/nails-3.jpeg"),
    require("../assets/nails-4.jpeg"),
    require("../assets/nails-5.jpeg"),
    require("../assets/nails-6.jpeg"),
    require("../assets/nails-7.jpeg"),
    require("../assets/nails-8.jpeg"),
    require("../assets/nails-9.jpeg"),
    require("../assets/nails-10.jpeg"),
  ];

  const services = [
    { id: 1, name: "Semi-Permanente", price: 2000 },
    { id: 2, name: "Esculpidas PolyGel", price: 6000 },
    { id: 3, name: "Manicura Comun", price: 3500 },
    { id: 4, name: "Remover Servicio", price: 1000 },
    { id: 5, name: "Pedicura Completa", price: 80000 },
    { id: 6, name: "Manos y Pies Semi", price: 32000 },
    { id: 7, name: "Esculpidas Manos Semi Pies", price: 9000 },
  ];
  return (
    <ScrollView>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={globalStyles.imageScrollContainer}
        >
          {businessImages.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImagePress(image)}
            >
              <Image source={image} style={globalStyles.businessImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal
          visible={!!selectedImage}
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={globalStyles.modalContainer}>
            <Image
              source={selectedImage!}
              style={globalStyles.fullscreenImage}
              resizeMode="contain"
            />
            <TouchableOpacity
              onPress={closeModal}
              activeOpacity={1}
              style={globalStyles.closeButton}
            >
              <Text style={globalStyles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View style={globalStyles.descriptionContainer}>
        <Text style={globalStyles.descriptionText}>
          This is going to be a little description about the business, what does
          it do, when it opened, who is the owner, if he likes the job, i don't
          know I'm just putting words in here so I don't put a lorem ipsum.
        </Text>
      </View>
      <View style={globalStyles.mainContainer}>
        <Text style={globalStyles.title}>Select Service</Text>

        <ScrollView style={globalStyles.scrollContainer}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={globalStyles.serviceItem}
              onPress={() => navigation.navigate("SelectDate")}
            >
              <Text style={globalStyles.titleServiceItem}>{service.name}</Text>
              <Text style={globalStyles.priceServiceItem}>
                ${service.price}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={globalStyles.footerContainer}>
        <Text style={globalStyles.descriptionText}>
          This would be a footer with somethings inside, like social media and
          stuff
        </Text>
      </View>
    </ScrollView>
  );
};

export default SelectService;
