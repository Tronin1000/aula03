import { StyleSheet, View } from "react-native";

export const DimensaoPorcetagem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems:"center"

  },

  box1: {
    width: "100%",
    height: "20%",
    backgroundColor: "powderblue"

  },
  box2: {

    width: "50%",
    height: "20%",
    backgroundColor: "steelblue",
    
  },
  box3: {


    width: "80%",
    height: "20%",
    backgroundColor: "skyblue"

  }

});
