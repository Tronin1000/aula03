import { StyleSheet, View } from "react-native";

export const DimensaoFlex = () => {
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

  },

  box1: {

    flex: 1,
    backgroundColor: "powderblue"

  },
  box2: {

    flex: 1,

    backgroundColor: "steelblue"

  },
  box3: {

    flex: 1,

    backgroundColor: "skyblue"

  }

});
