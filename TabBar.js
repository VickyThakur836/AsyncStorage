import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {View,Text, Image,ScrollView} from "react-native";
import { HomeD } from "./Home";
import Icon from "react-native-vector-icons/Ionicons"
import { style } from "../functionComponent/ExternalStyle";
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage";
function Settings(){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={style.pList}>
            Settings !!
        </Text>
    </View>
    )
}
function Profile({navigation}){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [gender,setGender]=useState("")
    const [address,setAdress]=useState("")

    useEffect(()=>{
        navigation.addListener("focus",()=>{
            getData()
        })
    },[])
    getData=async ()=>{
        try{
            const getEmail = await AsyncStorage.getItem("email")
            const getPassword = await AsyncStorage.getItem("password")
            const obj = await AsyncStorage.getItem("person")
            const person=JSON.parse(obj)
            if(getEmail !=null||undefined)
                setEmail(getEmail);
            else
                setEmail(person.email)
            
            setPassword(getPassword)
            console.log("Data Recieved Successfully !!")
            setName(person.name)
            setPassword(person.password)
            setGender(person.gender)
            setAdress(person.address)
        }
        catch(e){
            console.log("Failed To Recieve Data !!")
        }
    }
    return(
        <ScrollView>
            <View style={{alignItems:"center",justifyContent:"center"}}>

            {/* <Text style={{fontSize:30,backgroundColor:"white",color:"black",fontWeight:"bold",textAlign:"center"}}>Details !</Text> */}
            {/* <Icon
            name={"details"}
            size={25}
            color="red"
            /> */}
            <Image
            source={require("../Images/user.png")}
            style={style.img}
            />
            <Text style={style.width100}>Name :{name}</Text>
            <Text style={style.width100}>Email : {email}</Text>
            <Text style={style.width100}>Gender :{gender}  </Text>
            <Text style={style.width100}>Address :{address}</Text>
        </View>
        </ScrollView>
    )
}
const Tab = createBottomTabNavigator();
export function TabBar (){
    return(
            <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle:{
                    fontSize:15,
                    fontWeight:"bold",
                    color:"black"
                }
            }}
            >
                <Tab.Screen
                name="Home"
                component={HomeD}
                options={{
                    headerShown:false,
                    tabBarIcon:({focused})=><Icon
                    name={focused ? "home":"home-outline"}
                    size={28}
                    color="#FF5B22"
                    />
                }}
                />
                <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon:({focused})=><Icon
                    name={focused ? "settings":"settings-outline"}
                    size={28}
                    color="#FF5B22"
                    />
                }}
                />
                <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon:({focused})=><Ionicons
                    name={focused ?"person-circle":"person-circle-outline"}
                    size={28}
                    color="#FF5B22"
                    />
                }}
                />
            </Tab.Navigator>

    )
}