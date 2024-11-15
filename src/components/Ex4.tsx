import { StyleSheet, View } from "react-native";

export const Ex4= () => {
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
        justifyContent: "center",
        flexDirection: "row",


    },

    box1: {
        width: 100,
        height: 100,
        backgroundColor: "powderblue"
    
      },
      box2: {
    
        width: 100,
        height: 100,
        backgroundColor: "steelblue",
        
      },
      box3: {
    
    
        width: 100,
        height: 100,
        backgroundColor: "skyblue"
    
      }
})

