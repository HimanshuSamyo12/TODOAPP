import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
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
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Popover, { PopoverMode } from "react-native-popover-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import { FadeIn } from "react-native-reanimated";


const Task = (props) => {
  const [line, setLine] = useState(false);
  const [changecolor, setChangecolor] = useState(false);
  const navigation = useNavigation();

  const colorChange=()=>{
  setChangecolor(!changecolor);
  };

  const lines=()=>{
    setLine(!line);
  };
  

  return (
    <View
      style={{
        // borderWidth:0.3,
        // borderColor:'#147fdc',
        backgroundColor: "#B9D9EB",
        borderRadius: 15,
        marginBottom:14,
        paddingTop: 10,
        flexDirection: "row",
        width: Dimensions.get("window").width * 0.94,
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        style={{ left: 9, justifyContent: "center", paddingBottom: 5 }}
        onPress={() => {lines(),colorChange()}}
      >
        <Entypo name="circle" size={26} color={changecolor ?   '#DE5347':'black'}/>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={{  justifyContent: "center", paddingBottom: 5 ,left:264}}
        onPress={() => setLine(!line)}
      >
        <FontAwesome name="bookmark" size={26} style={{ color: "black" }} />
      </TouchableOpacity> */}


      <TouchableOpacity
        onPress={props.onPress}
        style={{
          left: 282,
          width: 50,
          alignItems: "center",
          justifyContent: "center",
          bottom: 5,
        }}
      >
        <FontAwesome5
          name="file-upload"
          size={29}
          style={{ color: "black", margin: 5 }}
        />
      </TouchableOpacity>
      <View style={{ alignSelf: "center" }}>
        {line?(<View style={{borderBottomWidth:1,top:13,right:32,justifyContent:'center',width:230}}></View>):null}
        <TouchableOpacity
          style={{
            right: 23,
            fontWeight: "bold",
            width: 240,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("TaskDetails")}
        >
          <Text style={{ color: "black", fontSize: 15.9 }}>{props.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ImportantScreen = () => {
  const navigation = useNavigation();

  const [estado, setEstado] = useState(false);
  const [task, setTask] = useState();
  const [list, setlist] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [load,setLoad]=useState();
  const [btnload,setBtnload]=useState(true);


  const buttonLoad=()=>{
    setBtnload(!btnload);
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const handeladd = () => {
    setlist([...list, task]);
    setTask(null);
  };

  const handledelete = (index) => {
    let newlist = [...list];
    newlist.splice(index, 1);
    setlist(newlist);
  };


  const datalist = [
    { icon: <FontAwesome5 name="tasks" size={27} />, employee: "Sort by" },
    {
      icon: (
        <MaterialCommunityIcons name="arrow-up-down-bold-outline" size={27} />
      ),
      employee: "Reorder tasks",
    },
    { icon: <AntDesign name="user" size={27} />, employee: "Send a copy" },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const loadTextField=()=>{
    setLoad(!load);
  }

  return (
    <View style={styles.boxOne}>
      <View>
        <TouchableOpacity
          style={{
            width: Dimensions.get("window").width * 0.59,
            flexDirection: "row",
            alignItems: "center",
            top: 30,
            left: 11,
          }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <View style={styles.profile}>
            <Text style={styles.txt1}>HV</Text>
          </View>

          <Text style={styles.txt2}>Himanshu Verma</Text>
        </TouchableOpacity>

      
      </View>

      <Menu style={{width:45,height:32,alignSelf:'flex-end'}}>
      <MenuTrigger>
  
          <Entypo name="dots-three-vertical" size={23} style={styles.icon3} />


      </MenuTrigger>
      <MenuOptions>
       
        <MenuOption onSelect={() => alert(`Delete`)} >
        <FlatList
            data={datalist}
            style={{marginBottom:15}}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
               
                    style={{
                      flexDirection: "row",
                      marginBottom: 15,
                      left: 10,
                      top: 10,
                    }}
                  >
                    <Text style={{ top: 5,color:'#147fdc' }}>{item.icon}</Text>
                    <Text style={{ top: 9, left: 10, fontSize: 16 }}>
                      {item.employee}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </MenuOption>
        
      </MenuOptions>
    </Menu>
    


      <Text style={styles.txt3}>Add Tasks-</Text>

      {/* <Modal
        animationType={"fade"}
        transparent={true}
        isVisible={isModalVisible}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 230,
            bottom: 260,
            borderRadius:15,
            width: 190,
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              right: 10,
              top: 15,
              height: 32,
              width: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={toggleModal}
          >
            <Entypo
              name="circle-with-cross"
              size={21}
              style={{ color: "#147fdc" }}
            />
          </TouchableOpacity>
          <FlatList
            data={datalist}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={toggleModal}
                    style={{
                      flexDirection: "row",
                      marginBottom: 15,
                      left: 10,
                      top: 10,
                    }}
                  >
                    <Text style={{ top: 5,color:'#147fdc' }}>{item.icon}</Text>
                    <Text style={{ top: 9, left: 10, fontSize: 16 }}>
                      {item.employee}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </Modal> */}

      {/* <TouchableOpacity style={styles.list} onPress={() => setLoad(!load)}>
          <AntDesign name="pluscircle" size={52} style={styles.icon12} />
        </TouchableOpacity> */}

      <ScrollView style={{ height: "50%", marginBottom: 145, top: 35 }}>
        {list.map((value, index) => (
          <Task key={index} name={value} onPress={handledelete} />
        ))}
      </ScrollView>

      {load?(<KeyboardAvoidingView
        behavior="position"
        style={{
          top: 739,
          flex: 1,
          height: 90,
          width: "100%",
          position: "absolute",
        }}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
          
            top: Platform.OS == "android" ? 4 : 4,
          }}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", height: 40 }}
          >
            <Entypo
              name="circle"
              size={26}
              style={{ color: "#A0A0A0", left: 9, top: 5 }}
            />
            <TextInput
              autoFocus={true}
              defaultValue={task}
              placeholder="Add a task"
              onChangeText={(text) => setTask(text)}
              style={{
                height: Dimensions.get("window").height * 0.059,
                left: 15,
                height: 40,
                top: 5,
                width: Dimensions.get("window").width * 0.7,
                fontSize: 16,
              }}
            />

            <TouchableOpacity onPress={()=>{handeladd(),loadTextField(false),buttonLoad(true)}}>
              <MaterialCommunityIcons
                name="arrow-up-bold-box"
                size={32}
                style={{
                  left: 23,
                  top: 5,
                  color: "#A0A0A0",
                }}
              />
            </TouchableOpacity>
          </View>

<View style={{borderBottomWidth:1,top:5,borderBottomColor:'#147fdc',marginBottom:5}}></View>
          <ScrollView
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ top: 9 }}
          >
            <TouchableOpacity
              style={{
                left: 5,
                backgroundColor: "#147fdc",
                width: 132,
                justifyContent: "center",
                paddingLeft: 23,
                paddingTop: 15,
                borderRadius: 32,
                marginRight: 15,
                marginBottom: 23,
                height: 40,
              }}
              onPress={showDatePicker}
            >
              <FontAwesome5
                name="calendar-alt"
                size={24}
                style={{ color: "white" }}
              />
              <Text style={{ left: 32, bottom: 23, color: "white" }}>
                Set Due
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                left: 5,
                backgroundColor: "#147fdc",
                width: 132,
                justifyContent: "center",
                paddingLeft: 5,
                paddingTop: 15,
                borderRadius: 32,
                marginRight: 15,
                marginBottom: 23,
                height: 40,
              }}
            
            >
              <Ionicons
                name="notifications"
                size={24}
                style={{ color: "white" }}
              />
              <Text style={{ left: 32, bottom: 23, color: "white" }}>
                Set Reminder
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
      ):null}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

{btnload?(<TouchableOpacity style={styles.list} onPress={()=>{loadTextField(),buttonLoad()}}>
        <AntDesign name="pluscircle" size={50} style={styles.icon12} />
      </TouchableOpacity>):null}

    </View>
  );
};

const styles = StyleSheet.create({
  boxOne: {
    flex: 1,
    backgroundColor: "#F9F6EE",
  },

  profile: {
    backgroundColor: "#147fdc",
    height: 50,
    width: 50,
    justifyContent: "center",
    borderRadius: 100,
  },
  txt1: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
  },

  txt2: {
    color: "#147fdc",
    fontWeight: "bold",
    fontSize: 18,
    left: 5,
  },
  txt3: {
    color: "#147fdc",
    fontWeight: "bold",
    fontSize: 18,
    left: 23,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#147fdc",
    top: 15,
  },

  box2: {
    top: 5,
    backgroundColor: "red",
  },

  txt4: {
    fontWeight: "bold",
    color: "#8B7765",
    fontSize: 16,
  },

  txt9: {
    fontWeight: "bold",
    color: "#8B7765",
    fontSize: 16,
    left: 5,
  },

  icon3: {
    color: "#147fdc",
  },
  opacity: {
    alignSelf: "flex-end",
    top: 12,
    right: 5,
  },
  opacityOne: {
 
 left:140,
    bottom: 5,
    alignSelf: "flex-end",
    height: Dimensions.get("window").height * 0.05,
    width: Dimensions.get("window").width * 0.5,
  },

  icon12: {
    color: "#147fdc",
    alignSelf: "center",
  },

  list: {
  bottom:64,
    alignSelf: "flex-end",
    right: 30,
    
  },
});

export default ImportantScreen;
