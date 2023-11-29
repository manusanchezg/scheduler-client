import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  ImageSourcePropType,
  GestureResponderEvent,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import globalStyles from "../styles/globalStyles";

const { width: windowWidth } = Dimensions.get("window");

export const ImageView = () => {
  const [selectedImage, setSelectedImage] =
    useState<ImageSourcePropType | null>(null);
  const handleImagePress = (image: ImageSourcePropType) => {
    setSelectedImage(image);
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const closeModal = (event: GestureResponderEvent) => {
    // I want to make that if you touch outside the image it closes
    setSelectedImage(null);
  };

  const businessImages = [
    require("../assets/images/nails-1.jpg"),
    require("../assets/images/nails-2.jpg"),
    require("../assets/images/nails-3.jpeg"),
    require("../assets/images/nails-4.jpeg"),
    require("../assets/images/nails-5.jpeg"),
    require("../assets/images/nails-6.jpeg"),
    require("../assets/images/nails-7.jpeg"),
    require("../assets/images/nails-8.jpeg"),
    require("../assets/images/nails-9.jpeg"),
    require("../assets/images/nails-10.jpeg"),
  ];

  return (
    <View>
      <Carousel
        data={businessImages}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={{...globalStyles.shadow, paddingVertical: 5}}
            key={item}
            onPress={() => handleImagePress(item)}
          >
            <Image source={item} style={globalStyles.businessImage} />
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
        onSnapToItem={(slideIndex) => setActiveIndex(slideIndex)}
      />
      <View style={globalStyles.paginationContainer}>
        {businessImages.map((_, index) => (
          <Text
            key={index}
            style={[
              globalStyles.paginationDot,
              index === activeIndex && globalStyles.activeDot,
            ]}
          >
            .
          </Text>
        ))}
      </View>

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
