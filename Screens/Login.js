import {React,useState,useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as GlobalVariables from "../Storage/globalData";
import { Formik } from "formik";
import * as yup from "yup";
import * as API from '../Api/Constants';

const Login = () => {
  const navigation = useNavigation();

  const [data, setData] = useState();
  const Constants = GlobalVariables.useValues();
  const setGlobalVariableValue = GlobalVariables.useSetValue();


  const loginData = async (values) => {
    try {
      let formData = new FormData();
      formData.append("email",'harshit@samyotech.com');
      formData.append("password", '123456');
      formData.append("device_type", "ios");
      formData.append("device_token", "dfsdfsdf56456sf");
      formData.append("user_id", "PQ315e");

      const response = await fetch(API.LOGIN, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
          Authorization: "device_token",
        },
        body: formData,
      });

      const myData = await response.json();
      myData;
      console.log("ios Test", myData);
      const logRess =
        (Constants,
        {
          // email: Constants.email,
          // password: Constants.password,
          user_id: Constants.user_id,
          device_type: Constants.device_type,
          // name: Constants.name,
          // device_token: Constants.device_token,
        });
        console.log('123445123455123455',logRess.user_id )

      if (logRess.user_id === myData.data.user_id) {
        console.log("ios testing check mobile", myData.data.user_id);
        console.log("ios testing check local storage", logRess.user_id);
        navigation.navigate("BottomTab");
      } else {
        console.log("ios testing check mobile", myData.data.user_id);
        console.log("ios testing check local storage", logRess.user_id);
        Alert.alert("ERROR");
      }

      const updatedmyData = myData.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loginData();
  }, []);


  const nav=()=>{
    navigation.navigate("VerifyScreen")
  };

  const mob =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const registerValidationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(mob, "Phone number is not valid")
      .required("Please enter your Phone no."),
  });

  return (
    <Formik
    validateOnChange={true}
    onSubmit={loginData}
       validationSchema={registerValidationSchema}
      initialValues={{
        mobile: "",
      }}
      // onSubmit={handleSignupUser}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        onSubmit,
        errors,
        isValid,
      }) => (
        <View style={styles.boxOne}>
          <Text style={styles.bttx}>Welcome to To-Do</Text>
          <Text style={styles.bttx5}>List Reminder.</Text>
          <Image source={require("../assets/list.jpeg")} style={styles.img} />
          <View style={styles.InputBox}>
            <TextInput
              style={styles.Input}
              placeholder={"Enter phone number"}
              onChangeText={handleChange("mobile")}
              onBlur={handleBlur("mobile")}
              value={values.mobile}
            />
             {touched.mobile && errors.mobile && (
              <Text style={{  color: "red" ,top:32,position:'absolute',width:'100%',left:10}}>
                {errors.mobile}
              </Text>
            )}

          </View>

          <TouchableOpacity
             onPress={()=>{nav(),handleSubmit}}
            style={styles.TouchableContainer}
          >
            <Text style={styles.tx}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.bttx6}>Sign in with TODO list account.</Text>
          <TouchableOpacity style={styles.btmtxt}>
            <Text style={styles.bttxt}>Don't have a account?</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  boxOne: {
    backgroundColor: "#F6F3EE",
    height: "100%",
    justifyContent: "center",
  },
  InputBox: {
    alignSelf: "center",
    color: "red",
    bottom: 30,
    backgroundColor: "white",
    elevation: 4,
    width: Dimensions.get("window").width * 0.84,
    height:50,
    marginBottom: 23,
    padding: 5,
    justifyContent: "center",
  },
  TouchableContainer: {
    bottom: 40,
    height: 40,
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.84,
    left: 32,
    backgroundColor: "#147fdc",
  },
  Input: {
    bottom:5,
    fontSize: 18,
    padding:1,
    color: "#8B7765",

  
  },
  btmtxt: {
    top: 350,
    alignSelf: "center",
  },
  bttxt: {
    fontSize: 18,
    color: "#8B7765",
    fontWeight: "bold",
    bottom: 150,
  },
  tx: {
    fontSize: 23,
    alignSelf: "center",
    color: "#F6F3EE",
  },
  bttx: {
    fontSize: 23,
    color: "#8B7765",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.64,
    bottom: 150,
    left: 23,
  },
  bttx5: {
    fontSize: 23,
    color: "#8B7765",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.64,
    bottom: 150,
    left: 50,
  },
  bttx6: {
    fontSize: 16,
    color: "#8B7765",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.64,
    bottom: 15,
    right: 39,
    fontWeight: "bold",
  },
  img: {
    width: "50%",
    alignSelf: "center",
    height: 190,
    bottom: 90,
    borderRadius: 300,
    resizeMode: "contain",
  },
});

export default Login;
