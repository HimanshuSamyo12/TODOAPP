import { React, useState ,useRef} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
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
import OTPInputView from '@twotalltotems/react-native-otp-input'
// import { useNavigation } from "@react-navigation/native";

const OtpScreen = () => {
//   const navigation = useNavigation();
  const [btn, setBtn] = useState(true);
  const [load, setLoad] = useState(false);

  const otpInput = useRef(null);

  const clearText = () => {
      otpInput.current.clear();
  }

  const setText = () => {
      otpInput.current.setValue("1234");
  }



const a=()=>{
  setLoad(!load);
};

const b=()=>{
  setBtn(!btn);
}


  return (
    <View>
      <Image
        source={require("../assets/f5c.jpg")}
        style={{
          width: "100%",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          resizeMode: "contain",
          height: 360,
        }}
      />
      <View style={{ position: "absolute", alignSelf: "center", top: 282 }}>
        <Text
          style={{ fontSize: 18, alignSelf: "center", top: 15, color: "white",fontWeight:'bold' }}
        >
          Verification
        </Text>
        <Text
          style={{ fontSize: 18, alignSelf: "center", top: 15, color: "white" ,fontWeight:'bold'}}
        >
          You Will Get Otp Via Sms
        </Text>
      </View>



  

      {/* {btn ? (
        <View>
          <View>
            <Text style={{ fontSize: 23, top: 82, alignSelf: "center" ,color:'#84e1d4',fontWeight:'bold'}}>
              Enter Otp
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              left: 12,
              top: 100,
            }}
          >
            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                top: 32,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",
              }}
            />

            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                top: 32,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",
              }}
            />

            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                top: 32,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",
              }}
            />

            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                top: 32,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              top: 190,
              backgroundColor: "#84e1d4",
              width: "64%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 32,
            }}
            onPress={() => {a(),b()}}
          >
            <Text style={{ fontSize: 20 }}>Verify</Text>
          </TouchableOpacity>
        </View>
      ) : null} */}

      {/* <View
        style={{ borderWidth: 0.5, top: 120, borderColor: "#84e1d4" }}
      ></View> */}

      {/* {load ? (
        <View>
          <View style={{ top: 82}}>
            <Text style={{ fontSize: 23, alignSelf: "center",fontWeight:'bold' }}>Set Pin</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              left: 12,
              top: 132,
            }}
          >
            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",
              }}
            />

            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",

              }}
            />

            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",
              }}
            />

            <TextInput
              maxLength={1}
              style={{
                fontSize: 21,
                height: 50,
                elevation: 4,
                width: 50,
                borderRadius: 10,
                backgroundColor: "white",
                marginRight: 31,
                alignSelf: "center",
                paddingLeft: 15,
                borderWidth: 0.5,
                borderColor: "#84e1d4",
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              top: 190,
              backgroundColor: "#84e1d4",
              width: "64%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 32,
            }}
            onPress={() => navigation.navigate("AppDrawer")}
          >
            <Text style={{ fontSize: 20 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      ) : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  });

export default OtpScreen;

{
  /* <View style={{alignSelf:'center',borderWidth:1,marginRight:32, backgroundColor: "#B9D9EB",justifyContent:'center',height:50,width:50,borderRadius:15}}>
<TextInput
  maxLength={1}
style={{fontSize:21,alignSelf:'center'}}
/>
</View> */
}
