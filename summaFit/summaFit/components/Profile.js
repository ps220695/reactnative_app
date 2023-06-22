
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, TouchableOpacity, ImageBackground, FlatList    } from 'react-native';
// import { TextInput } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


export default function App() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const resp = await fetch("https://nameless-stream-28529.herokuapp.com/api/prestaties");
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
            onPress={() => navigation.navigate("ExerciseDetails", { id: item.id })}
        >
            {item.prestaties}
        </Text>


    );


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgroundexercise.png')} resizeMode="cover" style={styles.image} >
                <Text style={{ height: '85%', fontSize: 32 }} >Profile</Text>

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
        paddingBottom: 0,
    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
