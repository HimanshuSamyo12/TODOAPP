import { React, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  Entypo,
  Octicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const SetPin = () => {

    const navigation=useNavigation();

  return (
    <View>
   <Image source={require('../assets/f5c.jpg')} style={{width:'100%',borderBottomLeftRadius:50,borderBottomRightRadius:50,resizeMode:'contain',height:320}}/>
 
<View style={{bottom:50}}>
<Text style={{fontSize:23,alignSelf:'center',color:'white'}}>Set Pin</Text>
</View>

<View style={{flexDirection:'row',alignSelf:'center',left:12,top:23}}>

<TextInput
  maxLength={1}
style={{fontSize:21,height:50,elevation:4,width:50,borderRadius:10,backgroundColor:'white',marginRight:31,alignSelf:'center',paddingLeft:15,borderWidth:0.5,borderColor:'#84e1d4'}}
/>

<TextInput
  maxLength={1}
style={{fontSize:21,height:50,elevation:4,width:50,borderRadius:10,backgroundColor:'white',marginRight:31,alignSelf:'center',paddingLeft:15,borderWidth:0.5,borderColor:'#84e1d4'}}
/>

<TextInput
  maxLength={1}
style={{fontSize:21,height:50,elevation:4,width:50,borderRadius:10,backgroundColor:'white',marginRight:31,alignSelf:'center',paddingLeft:15,borderWidth:0.5,borderColor:'#84e1d4'}}
/>

<TextInput
  maxLength={1}
style={{fontSize:21,height:50,elevation:4,width:50,borderRadius:10,backgroundColor:'white',marginRight:31,alignSelf:'center',paddingLeft:15,borderWidth:0.5,borderColor:'#84e1d4'}}
/>
</View>

<TouchableOpacity style={{alignSelf:'center',top:60,backgroundColor:'#84e1d4',width:'64%',height:50,justifyContent:'center',alignItems:'center',borderRadius:32,}} onPress={()=>navigation.navigate('AppDrawer')}>
   <Text style={{fontSize:20}}>Submit</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({});

export default SetPin;





{/* <View style={{alignSelf:'center',borderWidth:1,marginRight:32, backgroundColor: "#B9D9EB",justifyContent:'center',height:50,width:50,borderRadius:15}}>
<TextInput
  maxLength={1}
style={{fontSize:21,alignSelf:'center'}}
/>
</View> */}

