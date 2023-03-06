import { React, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
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
import Modal from "react-native-modal";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const TaskDetails = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const list = [
    { icon: <AntDesign name="user" size={32} />, employee: "Harshit Mehta" },
    { icon: <AntDesign name="user" size={32} />, employee: "Ankit Kesariya" },
    { icon: <AntDesign name="user" size={32} />, employee: "Arun Patel" },
    { icon: <AntDesign name="user" size={32} />, employee: "Ankit Banetiya" },
    { icon: <AntDesign name="user" size={32} />, employee: "Rahul" },
    { icon: <AntDesign name="user" size={32} />, employee: "ajay" },
    { icon: <AntDesign name="user" size={32} />, employee: "anmol" },
    { icon: <AntDesign name="user" size={32} />, employee: "razik" },
    { icon: <AntDesign name="user" size={32} />, employee: "Madhur" },
    { icon: <AntDesign name="user" size={32} />, employee: "Harshit Mehta" },
    { icon: <AntDesign name="user" size={32} />, employee: "Arun Patel" },
    { icon: <AntDesign name="user" size={32} />, employee: "Ankit Banetiya" },
    { icon: <AntDesign name="user" size={32} />, employee: "Rahul" },
    { icon: <AntDesign name="user" size={32} />, employee: "ajay" },
    { icon: <AntDesign name="user" size={32} />, employee: "anmol" },
    { icon: <AntDesign name="user" size={32} />, employee: "Harshit Mehta" },
    { icon: <AntDesign name="user" size={32} />, employee: "Arun Patel" },
    { icon: <AntDesign name="user" size={32} />, employee: "Ankit Banetiya" },
    { icon: <AntDesign name="user" size={32} />, employee: "Rahul" },
    { icon: <AntDesign name="user" size={32} />, employee: "ajay" },
    { icon: <AntDesign name="user" size={32} />, employee: "Harshit Mehta" },
    { icon: <AntDesign name="user" size={32} />, employee: "Ankit Kesariya" },
    { icon: <AntDesign name="user" size={32} />, employee: "Arun Patel" },
    { icon: <AntDesign name="user" size={32} />, employee: "Ankit Banetiya" },
    { icon: <AntDesign name="user" size={32} />, employee: "Rahul" },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          style={{ top: 50, left: 10, width: 64 ,}}
          onPress={() => navigation.navigate("ScheduleScreen")}
        >
          <AntDesign name="arrowleft" size={32} style={{}} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, left: 50, top: 20 }}>Tasks</Text>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Feather name="bookmark" size={26} style={{ right: 100 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              name="file-download"
              size={25}
              style={{ right: 64, bottom: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="delete"
              size={32}
              style={{ right: 15, bottom: 55 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", left: 23 }}>
          Test Task
        </Text>
        <Text style={{ fontSize: 15, top: 15, left: 23, marginBottom: 23 }}>
          Created last tuesday at 8:20 pm
        </Text>
      </View>

      <View style={{ borderBottomWidth: 0.5, top: 15 }}></View>

      <View>
        <View
          style={{ flexDirection: "row", top: 40, left: 23, marginBottom: 23 }}
        >
          <Entypo name="circle" size={24} style={{}} />
          <TouchableOpacity style={{ width: "73%" }}>
            <Text style={{ left: 15, top: 3, fontSize: 16 }}>Marked done</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", top: 40, left: 23, marginBottom: 23 }}
        >
          <AntDesign name="calendar" size={26} style={{}} />
          <TouchableOpacity style={{ width: "73%" }}>
            <Text style={{ left: 15, top: 3, fontSize: 16 }}>
              Due was last tuesday
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", top: 40, left: 23, marginBottom: 23 }}
        >
          <FontAwesome name="bell" size={26} style={{}} />
          <TouchableOpacity style={{ width: "73%" }}>
            <Text style={{ left: 15, top: 3, fontSize: 16 }}>Set reminder</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", top: 40, left: 23, marginBottom: 23 }}
        >
          <MaterialCommunityIcons name="image-area" size={26} style={{}} />
          <TouchableOpacity style={{ width: "73%" }}>
            <Text style={{ left: 15, top: 3, fontSize: 16 }}>Add image</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", top: 40, left: 23, marginBottom: 23 }}
        >
          <FontAwesome5 name="tasks" size={26} style={{}} />
          <TouchableOpacity style={{ width: "73%" }} onPress={toggleModal}>
            <Text style={{ left: 15, top: 3, fontSize: 16 }}>Assign To</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TextInput
          placeholder="add description"
          style={{
            borderWidth: 1,
            height: 100,
            width: "95%",
            alignSelf: "center",
            paddingLeft: 15,
            fontSize: 18,
            top: 50,
            marginBottom: 32,
            borderRadius: 10,
          }}
        />
      </View>

      <Modal isVisible={isModalVisible}>
        <View
          style={{ backgroundColor: "white", height: 320, borderRadius: 15 }}
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
              size={23}
              style={{ color: "#147fdc" }}
            />
          </TouchableOpacity>
          <FlatList
            data={list}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 15,
                    left: 10,
                    top: 10,
                  }}
                >
                  <View style={{backgroundColor:'#147fdc',borderRadius:23}}><Text style={{padding:5,color:'white'}}>{item.icon}</Text></View>
                  <TouchableOpacity
                    style={{ width: 190 }}
                    onPress={toggleModal}
                  >
                    <Text style={{ top: 10, left: 15, fontSize: 16 }}>
                      {item.employee}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TaskDetails;
