import { useState } from 'react';
import { Image, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
    },
    image: {

    }
})

export default function HomeScreen() {
    const [text, setText] = useState("")

    return (
        <>
            <View style={styles.div}>
                <Text style={styles.colorBlue}>Hello World!</Text>
                <View style={styles.square}></View>
                <TextInput placeholder='Digite aqui...' onChangeText={text => setText(text)}></TextInput>
                <TouchableOpacity>
                    <View>
                        <Text>Press me</Text>
                    </View>
                </TouchableOpacity>

                <Button title="press me" onPress={() => console.log('oi')}></Button>

                <Image style={{width: 300, height: 300}} source={require("../assets/images/cat.jpg")}/>
            </View>
        </>
    );
}