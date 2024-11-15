import { StyleSheet, View } from "react-native";

export const Ex3 = () => {
    return(
        <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        
        
      </View>
    );
  };
    
const styles = StyleSheet.create({
    container:{

        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",

    },

    box1: {
        width: 150,
        height: 150,
        backgroundColor: "powderblue"
    
      },
      box2: {
    
        width: 150,
        height: 150,
        backgroundColor: "steelblue",
        
      },
      box3: {
    
    
        width: 150,
        height: 150,
        backgroundColor: "skyblue"
    
      }
})

