import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";
import globalStyles from "../styles/globalStyles";

export const ImageView = () => {
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

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={globalStyles.imageScrollContainer}
      >
        {businessImages.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
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
  );
};
