import { StyleSheet, View } from "react-native";

export const Ex2 = () => {
    return(
        <View style={styles.container}>
        <View style={styles.box1} />
        
        
      </View>
    );
  };
    
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",

    },

    box1:{

    
    flex: 1,
    backgroundColor: "powderblue",
    height: 100,
    width: 100,
    alignSelf: "center"


    }
})

