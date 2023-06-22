import 'react-native-gesture-handler';
import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, TouchableOpacity, ImageBackground } from 'react-native';
// import { TextInput } from 'react-native-paper';
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import ExerciseDetails from "./components/ExerciseDetails";
import Profile from "./components/Profile";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackAllExercises = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Exercises" component={Exercises} 
          options={{title: 'Exercises'}} />
           <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} 
          options={{title: 'ExerciseDetails'}} />
    </Stack.Navigator>
  )
}


const OverigStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
          options={{title: 'Home'}} />
<Stack.Screen name="Profile" component={Profile} 
          options={{title: 'Profile'}} />
    </Stack.Navigator>
  )
}


function MyTabs() {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name="Home" component={Home} /> */}
            <Tab.Screen name="StackAllExercises" component={StackAllExercises}
                options={{tabBarLabel: 'oefeningen'}} />

            {/* <Tab.Screen name="Profile" component={Profile} /> */}
            <Tab.Screen name="OverigStack" component={OverigStack} 
               options={{tabBarLabel: 'home'}} />
        </Tab.Navigator>
    );
}
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
     <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',  
    alignItems:'center',
    justifyContent:'center',
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
  textsem: {
    height: "70%",
  },
});
