import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "./Login";
import { Signup } from "./SignUp";
import { TabBar } from "./TabBar";
import { HomeD } from "./Home";
const Stack = createNativeStackNavigator();
export const AppMain =()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        >
            <Stack.Screen
            name="Login"
            component={Login}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name="Signup"
            component={Signup}
            />
            <Stack.Screen
            name="Tab1"
            component={TabBar}
            options={{
                headerShown:false
            }}
            />
            {/* <Stack.Screen
            name="Drawer"
            component={HomeD}
            options={{
                headerShown:false
            }}
            /> */}

        </Stack.Navigator>
    </NavigationContainer>
    )
}