import 'react-native-gesture-handler';
import Product from './controller/functionComponent/ProductProps';
import { Employee } from './controller/ClassComponent/Employee';
import { Manager } from './controller/ClassComponent/Employee';
import { ConstructorDemo } from './controller/Constructor/FConstructor';
import { Constructor2 } from './controller/Constructor/SConstructor';
import { style } from './controller/functionComponent/ExternalStyle';
import { Bank } from './controller/BankAssignment/Bank';
import { TextInput1 } from './controller/TextInput/WithOutButton';
import { TextInput2 } from './controller/TextInput/WithButton';
import { Arguement } from './controller/TextInput/Arguement';
import { Mounting } from './controller/LifeCycleOfClassComponent.js/Mounting';
import { Update } from './controller/LifeCycleOfClassComponent.js/Updating';
import { Unmount } from './controller/LifeCycleOfClassComponent.js/Unmount';
import mount from './controller/LifeCycleOfFunctionComponent/Mounting';
import UpdateF from './controller/LifeCycleOfFunctionComponent/Updating';
import { EmpolyeeDetails } from './controller/LifeCycleOfFunctionComponent/Assignment';
import { Radio1 } from './controller/RadioButton1/RadioButton1';
import { Radio2 } from './controller/RadioButton1/RadioButton2';
import {Slider1} from './controller/Slider1/Slider1';
import { Slider2 } from './controller/Slider1/SliderFunction';
import { Segment1 } from './controller/Segment/Segment1';
import SegmentControlDemo from './controller/Segment/SegmentControlDemo';
import { Picker1 } from './controller/Picker/Picker1';
import { DatePicker1 } from './controller/DatePicker1/DatePicker1';
import { Form } from './controller/Form/Form1';
import Flex1 from './controller/Flex/Flex1';
import Flex2 from './controller/Flex/Flex2';
import Flex3 from './controller/Flex/Flex3';
import Flex4 from './controller/Flex/Flex4';
import Flex5 from './controller/Flex/Flex5';
import GeneralStarExample from './controller/Star/Star1';
import Star2 from './controller/Star/Star2';
import Form2 from './controller/Form/Form2';
import { FlatList1 } from './controller/FlatList/FlatList1';
import { FlatList2 } from './controller/FlatList/FlatList2';
import { FlatListUpdate } from './controller/FlatList/FlatListUpdate';
import SectionList1 from './controller/SectionList1/SectionList1';
import SectionListReduce from './controller/SectionList1/SectionListReduce';
import Navigation1 from './controller/Navigation/Navigation1';
import { Destructure1 } from './controller/Destructure/Destructure1';
import { Destructure2 } from './controller/Destructure/Destructure2';
import { PassRoute } from './controller/Navigation/NavigatePass';
import { PassRoute2Screens } from './controller/Navigation/NavigatePass2Screens';
import { NavigationPrac1 } from './controller/Navigation/NavigationPrac1';
import { NavHeader1 } from './controller/Navigation/Header/Header';
import { NavHeader2 } from './controller/Navigation/Header/Header2';
import { HeaderImg } from './controller/Navigation/Header/Header3';
import { NavigationAssignment } from './controller/Navigation/Assignment';
import NavigateAssignment2 from './controller/Navigation/Assignment2/NavigateAssignment2';
import Drawer1 from './controller/Navigation/Drawer/Drawer1';
import DrawerDemo1 from './controller/Navigation/Drawer/Drawer1';
import { HeaderBtn1 } from './controller/Navigation/Header/HeaderBtn';
import { Drawer2 } from './controller/Navigation/Drawer/Drawer2';
import HeaderNavigate from './controller/Navigation/Header/HeaderNavigate';
import { HeaderNavigationFunc } from './controller/Navigation/Header/HeadernavigateFunc';
import { CustomDrawer } from './controller/Navigation/Drawer/DrawerCustom';
import DrawerIconPrac2 from './controller/Navigation/Drawer/DrawerIconPrac2';
import { BackGroundDrawer } from './controller/Navigation/Drawer/DrawerBackground';
import { TabNavigate1 } from './controller/Navigation/TabBar/TabNavigate1';
import { TabNavigateCustomize1 } from './controller/Navigation/TabBar/TabNavigateCustomize1';
import { DrawerNavigateClass, TabNavigateClass } from './controller/Navigation/TabBar/TabNavigateClass';
import { AsyncStorageEmail } from './controller/AsyncStorage/GetEmail';
import { AsyncStorageRemoveEmail } from './controller/AsyncStorage/RemoveData';
import { AsyncStorageSendObject } from './controller/AsyncStorage/SendObject';
import { TabBar } from './controller/Project1/TabBar';
import { AppMain } from './controller/Project1/Main';
import { GeoLatituteLong } from './controller/GeoLocation/GeoLatLong';
import MapDemo from './controller/MapDemo/MapDemo';
import { ActivityIndicator, View } from 'react-native';
import MapMarker from './controller/MapDemo/MapMarker';
import Video1 from './controller/Video';
import { PhoneAuthenticationDemo } from './controller/PhoneAuth/PhoneAuthenticationDemo';
import Student1 from './controller/High Order Component/Student1';
import Student2 from './controller/High Order Component/Student2';
import Student3 from './controller/High Order Component/Student3';
import { Parent } from './controller/ParentToChildData/Parent';
import Medical1 from './controller/Redux/ReduxClass/Medical1';
import { Provider } from 'react-redux';
import { Store } from './controller/Redux/ReduxClass/Store';
import { MedicalHooks } from './controller/Redux/ReduxClass/MedicalHooks';
import { Store1 } from './controller/Redux/ReduxClass/StoreCombine';
import CombineMedical from './controller/Redux/ReduxClass/CombineMedical';
import MedicalUi from './controller/Redux/ReducerUserInput/MedicalUi';
import { Store4 } from './controller/Redux/ReducerUserInput/AsyncStorageStore';
import UserUI from './controller/ReduxThunk/UserUI';
import { Store5, persistor } from './controller/ReduxThunk/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './controller/ReduxAssignment/Home';
import { StoreAssign, persistedStore } from './controller/ReduxAssignment/Store';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { MainApp } from './CustomerManagement/MainApp';
import { UI } from './CustomerManagement/GetApi';
import { Welcome } from './src/screens/welcome';
import { AppMovie } from './src/screens/rootScreen';



const Appq = ()=>{
   return(
   <View>
    <Product/>
    </View>
    )
}
const Appy = ()=>{
    return (
        <View>
            <Product
            p_Name ="Shoes"
            p_Brand ="Puma"
            p_Price ="Rs.2999"
            img ="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Product
            p_Name ="Watch"
            p_Brand ="Mi"
            p_Price ="Rs.799"
            img ="https://i01.appmifile.com/webfile/globalimg/7/05C870D9-8E6B-1FCE-1EE8-C988901DC1D1.png"
            />
        </View>
    )
}
const AppEmployee = ()=>{
    return (
        <View>
            <Employee
            // image="/controller/Images/user1.jpeg"
            name="Arvind Sharma"
            id={101}
            salary="Rs. 1999"
            />
            <Employee
            // image="/controller/Images/user.pneg"
            name="Ankit gupta"
            id={102}
            salary="Rs. 2999"
            />
        </View>
    )
}
const Appt =()=>{
    return(
        <View  style={{backgroundColor:"#032343"}}>
            <Manager
            position="Manager"
            name="Ashok Sharma"
            id="502"
            salary={10000}
            />
            <Employee 
            position="Employee"
            name="Ashish Rawat"
            id="615"
            salary="6999"
            />
        </View>
    )
}
const AppCons=()=>{
    return(
        <View>
            <ConstructorDemo
            setAge ={20}
            />
        </View>
    )
}
const AppCons1 = ()=>{
    return(
        <View style={style.backgroundColor}>
            <Constructor2
            age={20}
            />
        </View>
    )
}
const AppBank=()=>{
    return(
        <View>
            <Bank
            getBalance={5000}
            getAmount={2000}
            />
        </View>
    )
}
const AppTextInput =()=>{
    return(
    <View>
        <TextInput1/>
    </View>)
}
const AppWithBtn=()=>{
    return(
        <View>
            <TextInput2/>
        </View>
    )
}
const AppArguement=()=>{
    return(
        <View>
            <Arguement/>
        </View>
    )
}
const AppMounting =()=>{
    return(
        <View>
            <Mounting/>
        </View>
    )
}
const AppUpdate =()=>{
    return(
        <View>
            <Update/>
        </View>
    )
}
const AppUnmount =()=>{
    return(
        <View>
            <Unmount/>
        </View>
    )
}
 const AppMount =()=>{
    return(
        <View>
           {mount()}
        </View>
    )
 }
 const Appupadte1=()=>{
    return(
        <View>
            {UpdateF()}
        </View>
    )
 }
 const Appqwe =()=>{
    return(
        <View>
            {EmpolyeeDetails()}
        </View>
    )
 }
 const AppRadio=()=>{
    return(
        <View>
            {Radio1()}
        </View>
    )
 }
 const AppRadio2 =()=>{
    return(
        <View>
            <Radio2/>
        </View>
    )
 }
 const AppAs =()=>{
    return(
        <View>
            <Slider1/>
        </View>
    )
 }
const AppSlid=()=>{
    return(
        <View>
            {Slider2()}
        </View>
    )
 }
 const AppSegmen =()=>{
    return(
        <View>
            <Segment1/>
        </View>
    )
 }
 const AppPicker=()=>{
    return(
        <View>
            <Picker1/>
        </View>
    )
 }
 const AppDate=()=>{
    return(
        <View>
            {DatePicker1()}
        </View>
    )
 }
 const AppForm1 =()=>{
    return(
        <View>
            {Form()}
        </View>
    )
 }
 const Appaa =()=>{
    return(
        <View style={{flex:1}}>
            <Flex5/>
        </View>
    )
 }
 const Appstar =()=>{
    return(
        <View>
            <Star2/>
        </View>
    )
 }
 const AppForm2=()=>{
    return(
        <View>
            <Form2/>
        </View>
    )
 }
 const AppDelete =()=>{
    return(
        <View style={{flex:1}}>
            <FlatList2/>
        </View>
    )
 }
 const AppUpdate1 =()=>{
    return(
        <View style={{flex:1}}>
            <FlatListUpdate/>
        </View>
    )
 }
 const AppSection =()=>{
    return(
        <View>
            <SectionList1/>
        </View>
    )
 }
 const AppSectionListReduce =()=>{
    return(
        <View>
            <SectionListReduce/>
        </View>
    )
 }
 const AppNav=()=>{
    return(
       <Navigation1/> 
    )
 }

 const data ={
    name: "Neha Sharma",
  rollno: 121,
  course: "BCA",
  fees: 34567.34,
  address: {
    city: "Indore",
    pincode: 452001
    }
 }
 const AppDestructure =()=>{
    return(
        <View>
            {/* <Destructure1
            userData={data}
            /> */}
            <Destructure2
            {...data}
            />
        </View>
    )
 }
 const AppRoute =()=>{
    return(
            <PassRoute/>   
    )
 }
 const AppHeader =()=>{
    return(
        // <PassRoute2Screens/>
        // <NavigationPrac1/>
        <NavHeader2/>
    )
 }
 const AppHeaderImg =()=>{
    return(
        <HeaderImg/>
    )
 }
 const AppAssignment1 =()=>{
    return(
        <NavigationAssignment/>
    )
 }
 const AppAssign2 =()=>{
    return(
        <NavigateAssignment2/>
    )
 }
 const AppDrawer1 =()=>{
    return(
        // <DrawerDemo1/>
        // <Drawer2/>
        <DrawerIconPrac2/>
    )
 }


 const AppHeaderBtn =()=>{
    return(
        // <HeaderBtn1/>
        <HeaderNavigate/>
        // <HeaderNavigationFunc/>
    )
 }
 const AppDrawer2 =()=>{
    return(
        // <CustomDrawer/>
        <BackGroundDrawer/>
    )
 }
 const AppPassStack =()=>{
    return(
        // <TabNavigate1/>
        // <TabNavigateCustomize1/>
        // <>
        <TabNavigateClass/>
        // <DrawerNavigateClass/></>
        // <PassStackScreen/>
    )
 }
 const AppAsync =()=>{
    return(
        // <AsyncStorageEmail/>
        // <AsyncStorageRemoveEmail/>
        <AsyncStorageSendObject/>
    )
 }
 const App =()=>{
    return(
        // <TabBar/>
        <AppMain/>
    )
 }

 
const AppPhone =()=>{
    return(
        <View>
            <PhoneAuthenticationDemo />
        </View>
    )
}
const AppHighOrdercom=()=>{
    return(
        <View>
        {/* <Student1
        address="Indore M.P"
        /> */}
        <Student2
        age={22}
        />
        <Student3
        age={46}
        />
    </View>
    )
}
const AppparentTochild =()=>{
    return(
        <View>
            <Parent/>
        </View>
    )
}
const AppMedical =()=>{
    return(
        <Provider store={Store1}>
        <View>
            {/* <Medical1/>
            <MedicalHooks/> */}
            <CombineMedical/>
        </View>
        </Provider>
    )
}
const AppMedical2 =()=>{
    return(
        <Provider store={Store1}>
            <View>
                <MedicalUi/>
            </View>
        </Provider>
    )
}
const AppRedux5 =()=>{
    return(
        <Provider store={Store5}>
            <PersistGate loading={<ActivityIndicator
            size={'large'}
            color={"blue"}
            />}
            persistor={persistor}
            >
            <View>
                <UserUI/>
            </View>
            </PersistGate>
        </Provider>
    )
}
const AppReducer =()=>{
    return(
    <Provider store={StoreAssign}>
        <PersistGate loading={<ActivityIndicator
        size={'large'}
        color={"red"}
        />}
        persistor={persistedStore}
        >
        <View style={{flex:1}}>
            <Home/>
        </View>
        </PersistGate>
    </Provider>
    )
}
const AppTabDrawer =()=>{
    return(
        <AppMain/>
    )
}
const AppApp78 =()=>{
    return(
        <MainApp/>
    )
}
const AppAPITest =()=>{
    return(
        <View>
            <UI/>
        </View>
    )
}

const AppMovie1 =()=>{
    return(
        <AppMovie/>
    )
}
export default App;
