import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  sing_in: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: "row",
    gap: 50
  }
})

export default function HomeScreen() {
  return (
    <>
      <View>

        <View style={styles.main}>

          <Text>Welcome</Text>
          <TextInput placeholder='Email'/>
          <TextInput placeholder='Password'/>

          <TouchableOpacity>
            <View>
                <Text>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
                <Text>Forgot Password?</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.sing_in}>

          <TouchableOpacity>
            <View>
              <Text>Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Text>Facebook</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    </>
  );
}
