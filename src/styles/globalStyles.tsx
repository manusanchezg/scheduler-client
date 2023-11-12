import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#EAE8FF",
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 5,
    width: 150,
  },
  buttonText: {
    color: "#141115",
    fontSize: 16,
    textAlign: "center",
  },
  background: {
    backgroundColor: "white",
  },
  scrollContainer: {
    maxHeight: 500,
    overflow: "hidden",
  },
  serviceItem: {
    height: 120,
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E1E5F2",
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
  mainContainer: {
    borderColor: "#E1E5F2",
    borderRadius: 5,
    borderWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titleServiceItem: {
    fontSize: 25,
    fontWeight: "bold",
  },
  priceServiceItem: {
    fontSize: 20,
    paddingLeft: 10,
  },
  descriptionContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  imageScrollContainer: {
    flexDirection: "row",
  },
  businessImage: {
    width: 200,
    height: 300,
    marginRight: 10,
    borderRadius: 5,
  },
  footerContainer: {
    height: 200,
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // fondo semitransparente oscuro
  },

  fullscreenImage: {
    width: "95%",
    height: "95%",
  },

  closeButton: {
    position: "absolute",
    top: 55,
    right: 20,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  closeButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default globalStyles;
