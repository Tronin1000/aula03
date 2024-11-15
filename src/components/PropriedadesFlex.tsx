import { StyleSheet, View } from "react-native";


export const PropriedadeFlex = () => {
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    box1: {

    },
    box2: {
        backgroundColor: "skyblue",
        height: 100,
        width: 100,
        flex: 1
    },
    box3: {
        backgroundColor: "steelblue",
        height: 100,
        width: 100,
        flex: 1
    },
});