import React, { useEffect, useState } from "react";
import {View,Text,TextInput,TouchableOpacity,ScrollView,Image} from "react-native";
import { style } from "../functionComponent/ExternalStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RadioButton } from "react-native-paper";
export function Signup({navigation}){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [gender,setGender]=useState("Male")
    const [address,setAdress]=useState("")
    
    useEffect(()=>{
        const person ={
            name:name,
            email:email,
            password:password,
            gender:gender,
            address:address
        }
        sendData(person)
    },[name,email,password,gender,address])
    const sendData=async (person)=>{
        try{
            const obj=JSON.stringify(person)
            await AsyncStorage.setItem("person",obj)
            // console.log("Obj Data Successfully Sent")
        }
        catch(e){
            console.log("Failed To send Obj dAta !!")
        }
    }
    return(
        <ScrollView>
        <View>
            <Text style={{fontSize:30,backgroundColor:"white",color:"black",fontWeight:"bold",textAlign:"center"}}>Register !</Text>
            <Image
            source={require("../Images/signupVector.jpg")}
            style={{
                height:280,
                width:"100%",
                resizeMode:"cover"
                
            }}
            />
            <TextInput
            textAlign="center"
            placeholder="Enter Name "
            placeholderTextColor={"black"}
            style={style.inputOrange}
            onChangeText={(value)=>setName(value)}
            />
            <View style={{justifyContent:"center",flexDirection:"row",height:50,alignItems:"center",...style.inputOrange}}>
            <RadioButton
                status={gender=="Male"?"checked":"unchecked"}
                onPress={()=>setGender("Male")}
                color="red"
            />
            <Text style={{fontSize:20,color:"black",fontWeight:"bold",alignSelf:"center"}}>Male</Text>
            <RadioButton
                status={gender=="Female"?"checked":"unchecked"}
                onPress={()=>setGender("Female")}
                color="red"
            />
            <Text style={{fontSize:20,color:"black",fontWeight:"bold",alignSelf:"center"}}>Female</Text>
            <RadioButton
                status={gender=="Others"?"checked":"unchecked"}
                onPress={()=>setGender("Others")}
                color="red"
            />
            <Text style={{fontSize:20,color:"black",fontWeight:"bold",alignSelf:"center"}}>Others</Text>
            </View>
            
            <TextInput
            textAlign="center"
            placeholder="Email "
            keyboardType="email-address"
            placeholderTextColor={"black"}
            style={style.inputOrange}
            onChangeText={(value)=>setEmail(value)}
            />
            <TextInput
            textAlign="center"
            placeholder="Password "
            placeholderTextColor={"black"}
            style={style.inputOrange}
            secureTextEntry={true}
            onChangeText={(value)=>setPassword(value)}
            />
            <TextInput
            textAlign="center"
            placeholder="Address "
            placeholderTextColor={"black"}
            style={style.inputOrange}
            onChangeText={(value)=>setAdress(value)}
            />
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>{
                alert("Register Successfully !!")
                alert("You Can Login Now !!")
                navigation.navigate("Login")
            }}
            >
                <Text style={style.btnSignup}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}