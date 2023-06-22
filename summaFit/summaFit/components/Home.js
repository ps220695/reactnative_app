import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, TouchableOpacity, ImageBackground } from 'react-native';
// import { TextInput } from 'react-native-paper';


export default function App() {

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Username"
      // keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Password"
      // keyboardType="numeric"
      />
      <TouchableOpacity style={styles.bLogin}>
        <Text style={{ fontSize: 20, textAlign: "center", }}>Inloggen</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
<Text >Heb je geen account? </Text>
      <TouchableOpacity     >
        <Text style={{color:"blue"}}>Registreer</Text>
      </TouchableOpacity>
 
</View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FEED9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 10,
    width: '50%',

    textAlign: "center",
  },
  bLogin: {
    backgroundColor: '#59CBE8',
    height: 40,
    width: '50%',
    margin: 12,
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
