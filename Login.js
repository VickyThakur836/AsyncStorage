import React, { useEffect, useState } from "react";
import { View,Text, TextInput,TouchableOpacity, Image,ScrollView } from "react-native";
import { style } from "../functionComponent/ExternalStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function Login({navigation,onPress}){
    const[inpEmail,setInpEmail]=useState("");
    const [name,setName]=useState("");
    const[inpPassword,setInpPassword]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    // useEffect(()=>{
    //     sendData(email,password)
    // },[email,password])
    // sendData=async (email,password)=>{
    //     try{
    //         await AsyncStorage.setItem("email",email)
    //         await AsyncStorage.setItem("password",password)
    //         // console.log("Data Send Successfylly !!")
    //     }
    //     catch(e){
    //         console.log("Failed To Send Data !!",e)
    //     }
    // }
    useEffect(()=>{
        getData()
    })
    const getData=async ()=>{
        try{
            const obj = await AsyncStorage.getItem("person")
            const person= JSON.parse(obj)
            if(person !=null||undefined){
                setEmail(person.email)
                setName(person.name)
                setPassword(person.password)
            }   
            else{
                setName("")
                setEmail("A")
                setPassword("")
            }
        }
        catch(e){
            console.log("Fail To Get login data ")
        }
    }
    return(
        <ScrollView>
        <View>
            <Text style={{fontSize:30,backgroundColor:"white",color:"black",fontWeight:"bold",textAlign:"center"}}>Welcome Back !</Text>
            <Image
            source={require("../Images/loginVector.jpg")}
            style={{
                height:300,
                width:"100%",
                resizeMode:"cover"
                
            }}
            />
            <TextInput
            
            placeholder="Enter Email"
            placeholderTextColor={"black"}
            style={style.inputOrange}
            onChangeText={(value)=>setInpEmail(value)}
            />
            <TextInput
            placeholderTextColor={"black"}
            style={style.inputOrange}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={(value)=>setInpPassword(value)}
            />
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>{
                getData()
                if(inpEmail==email){
                    if(password==inpPassword){
                        alert("User "+name+" Login Successfully!!")
                        navigation.navigate("Tab1")
                    }
                    else{
                        alert("Wrong Password !!")
                    }
                }
                else{
                        alert("Invalid Email")
                }
                
            }}
            >
                <Text style={style.btnSignup}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>navigation.navigate("Signup")}
            >
                <Text style={style.btnSignup}>
                    Create Account 
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
