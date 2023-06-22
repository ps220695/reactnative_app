
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
// import { TextInput } from 'react-native-paper';





export default function App({ navigation }) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const resp = await fetch("https://project5api.herokuapp.com/api/oefenings");
        const data = await resp.json();
        console.log(data);
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
    
        <Text
            style={styles.text}
            onPress={() => navigation.navigate("ExerciseDetails", { id: item.id, oefenings: item.oefenings, beschrijving: item.beschrijving, foto: item.foto  })}
        >
            {item.oefenings}
        </Text>


    );


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgroundexercise.png')} resizeMode="cover" style={styles.image} >
                <Text style={{ fontSize: 32 }} >oefeningenlijst</Text>

                <FlatList style={styles.FlatList}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                ></FlatList>
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'top',
        paddingTop: 0,
        paddingBottom: 0
    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    FlatList: {
        marginTop: 50,
        alignContent: 'center',
    },
    text: {
        fontSize: 30,
         fontWeight: '300' , // Light
    },
});
