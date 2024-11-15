
import { StyleSheet, View } from "react-native";

export const Ex6= () => {
    return(
        <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box5} />
        <View style={styles.box6} />
        <View style={styles.box7} />
        <View style={styles.box8} />
        <View style={styles.box9} />
        <View style={styles.box10} />
        <View style={styles.box11} />
        <View style={styles.box12} />
        
        
      </View>
    );
  };
    
const styles = StyleSheet.create({
  container: {
    alignItems:"flex-end",
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: "center"
                      
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
    
      }, 
      box4: {
        width: 100,
        height: 100,
        backgroundColor: "blue"
    
      },
      box5: {
    
        width: 100,
        height: 100,
        backgroundColor: "yellow",
        
      },
      box6: {
    
    
        width: 100,
        height: 100,
        backgroundColor: "pink"
    
      }, 
      box7: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    
      },
      box8: {
    
        width: 100,
        height: 100,
        backgroundColor: "black",
        
      },
      box9: {
    
    
        width: 100,
        height: 100,
        backgroundColor: "green"
    
      },
      box10: {
        width: 100,
        height: 100,
        backgroundColor: "darkgreen"
    
      },
      box11: {
    
        width: 100,
        height: 100,
        backgroundColor: "gray",
        
      },
      box12: {
    
    
        width: 100,
        height: 100,
        backgroundColor: "darkgray"
    
      }
})

