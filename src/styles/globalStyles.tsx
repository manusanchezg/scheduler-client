import { StyleSheet } from "react-native";

export const colors = {
  approved: "#34BB8B",
  pending: "#34BB8B",
  canceled: "#34BB8B",
  postponed: "#ADD8E6",
  default: "#CFBFA0",
  completed: "#EAE8FF",
  text: "#F2EFE6",
  background: "#131C0E",
  pink: "#FC83D2",
  backgroundSec: "#42493E"
};

const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: colors.text
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
    borderRadius: 40,
  },
  serviceItem: {
    height: 120,
    padding: 25,
    margin: 10,
    backgroundColor: colors.text,
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
  mainContainer: {
    backgroundColor: colors.backgroundSec,
    borderRadius: 40,
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 10,
    overflow: "hidden",
    padding: 10,
    marginBottom: 60
  },
  titleServiceItem: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.background,
  },
  priceServiceItem: {
    fontSize: 20,
    paddingLeft: 10,
    color: colors.background
  },
  descriptionContainer: {
    backgroundColor: colors.backgroundSec,
    borderRadius: 30,
    padding: 30,
    marginVertical: 10,
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.text,
  },
  imageScrollContainer: {
    flexDirection: "row",
  },
  businessImage: {
    width: 250,
    height: 350,
    borderRadius: 5,
  },
  footerContainer: {
    height: 200,
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundSec,
    padding: 20,
    borderRadius: 30
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
  itemSelect: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: colors.backgroundSec,
  },
  globalPadding: {
    flex: 1,
    padding: 16,
  },
  statusButton: {
    width: "70%",
    borderRadius: 10,
    borderColor: "#141115",
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 15,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    margin: 1.5,
    fontSize: 55,
    color: colors.text,
  },
  activeDot: {
    color: colors.approved,
  },
  shadow: {
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default globalStyles;
