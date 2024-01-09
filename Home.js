import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import {View,Text,TouchableOpacity,TextInput,ScrollView,Image} from "react-native";
import { style } from "../functionComponent/ExternalStyle";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RadioButton } from "react-native-paper";
import { Login } from "./Login";

const Drawer=createDrawerNavigator();
function DrawerList1(props){
    return(
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
            <DrawerItem
            label={
                "LogOut"
            }
            onPress={()=>{
                alert("Log Out Successfully !!")
                // props.navigation.navigate("Profile")
                props.navigation.popToTop()
            }}
            labelStyle={{
                fontSize:15,
                color:"black",
                fontWeight:"bold"
            }}
            icon={({focused})=><Icon
            name={focused ? "exit":"exit-outline"}
            size={30}
            color={"#FF5B22"}
            />}
            />
        
    </DrawerContentScrollView>
    )
}
export function HomeD({navigation}){
    return(
    <Drawer.Navigator
    initialRouteName="Home"
     drawerContent={(props)=><DrawerList1 
        {...props} />}
     screenOptions={{
        drawerContentContainerStyle:{
            alignContent:"center",
            borderCurve:"continuous"
        },
        drawerLabelStyle:{
            fontSize:15,
            color:"black",
            fontWeight:"bold",
        },
        drawerPosition:"left",
        drawerStyle:{
            alignContent:"center",
            width:230,
            height:250,
            marginTop:180,
            borderBottomLeftRadius:100,
            borderTopRightRadius:25
        },

     }}
    >
        <Drawer.Screen
        name="Home Page"
        component={Home}
        options={{
            drawerIcon:({focused})=><Icon
            name={focused ? "home":"home-outline"}
            size={25}
            color={"#FF5B22"}
            />
        }}
        />
        <Drawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
            drawerIcon:({focused})=><MaterialCommunityIcons
            name={focused ? "account-edit":"account-edit-outline"}
            size={25}
            color={"#FF5B22"}
            />
        }}
        />
    </Drawer.Navigator>
    )
}
function Home({navigation}){
    const [name,setName]=useState("")
    useEffect(()=>{
        getData()
    })
    const getData= ()=>{
        navigation.addListener("focus", async()=>{
            try{
                const obj = await AsyncStorage.getItem("person")
                const person=JSON.parse(obj)
                setName(person.name)
            }
            catch(e){
                console.log("Error :",e)
            }
           
        })
    }
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={style.pList}>
            Hello {name} !!
        </Text>
    </View>
    )
}
function EditProfile({navigation}){
        const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [gender,setGender]=useState("")
        const [password,setPassword]=useState("")
        const [address,setAdress]=useState("")
        let person1
        useEffect(()=>{navigation.addListener("focus",()=>{
            getData()
        })},[])
        const getData=async ()=>{
            const getEmail = await AsyncStorage.getItem("email")
            const obj= await AsyncStorage.getItem("person")
            const person = JSON.parse(obj)
            person1=person
             if(getEmail !=null||undefined)
                 setEmail(getEmail)
             else
                setEmail(person.email)
            setName(person.name)
            console.log("data update")
            setPassword(person.password)
            setGender(person.gender)
            setAdress(person.address)
        }
        const updateData=()=>{
            const obj={
                name:name,
                email:email,
                address:address,
                password:password,
                gender:gender
            }
            const person=JSON.stringify(obj)
            try{
                AsyncStorage.setItem("person",person)
            }
            catch(e){
                console.log("Error :",e)
            }
            
        }           
        return(
            <ScrollView>
        <View>
            <Text style={{fontSize:30,backgroundColor:"white",color:"black",fontWeight:"bold",textAlign:"center"}}>Hello Mr. {name} Edit Your profile !</Text>
            <Image
            source={require("../Images/editvector.jpg")}
            style={{
                height:280,
                width:"100%",
                resizeMode:"cover"
                
            }}
            />
                <TextInput
            textAlign="center"
            value={name}
            placeholder="Name :"
            valueTextColor={"black"}
            style={style.inputOrange}
            onChangeText={(value)=>setName(value)}
            />
            <TextInput
            textAlign="center"
            value={email}
            placeholder="Email "
            keyboardType="email-address"
            valueTextColor={"black"}
            editable={false}
            style={{color:"red",...style.inputOrange}}
            onChangeText={(value)=>setEmail(value)}
            />
            {/* <Text style={style.form}>
                {email}
            </Text> */}
            <View style={{justifyContent:"center",flexDirection:"row",height:50,margin:5,alignItems:"center",...style.inputOrange}}>
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
            value={address}
            placeholder="Address"
            valueTextColor={"black"}
            style={style.inputOrange}
            onChangeText={(value)=>setAdress(value)}
            />
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>{
                updateData()
                navigation.navigate("Profile")}}
            >
                <Text style={style.btnSignup}>
                    UPDATE
                </Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        )
}
