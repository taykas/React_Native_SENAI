import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    colorBlue: {
        color: "purple",
        fontSize: 32
    },
    div: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },  
    square: {
        width: 150,
        height: 150,
        backgroundColor: "purple"
    }
})

export default function HomeScreen() {
    return (
        <>
            <View>
                <Text style={styles.colorBlue}>Hello World!</Text>
            </View>
            <View style={styles.div}>
                <View style={styles.square}></View>
            </View>
        </>
    );
}