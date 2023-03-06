import { React, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
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
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Task = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 23,
        height: 50,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        <AntDesign
          name="delete"
          size={32}
          style={{ color: "red", left: 320, top: 10 }}
        />
      </TouchableOpacity>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ color: "#8B7765", right: 23, fontWeight: "bold" }}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};

const Home = () => {
  const navigation = useNavigation();

  const [task, setTask] = useState();
  const [list, setlist] = useState([]);
  const handeladd = () => {
    setlist([...list, task]);
    setTask(null);
  };

  const handledelete = (index) => {
    let newlist = [...list];
    newlist.splice(index, 1);
    setlist(newlist);
  };

  return (
    <ScrollView style={styles.boxOne}>
      <View style={styles.profile}>
        <Text style={styles.txt1}>HV</Text>
      </View>

      <View style={{}}>
        <TouchableOpacity onPress={() => navigation.navigate("AppDrawer")}>
          <Text style={styles.txt2}>Himanshu Verma</Text>

          <Text style={styles.txt3}>himanshu@samyotech.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box2}>
        <TouchableOpacity style={styles.opacity}>
          <View>
            <FontAwesome5 name="tasks" size={32} style={styles.icon2} />
            <Text style={styles.txt4}>Tasks</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opacity}>
          <View>
            <AntDesign name="calendar" size={32} style={styles.icon3} />
            <Text style={styles.txt4}>Planned</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.opacity}>
          <View>
            <AntDesign name="user" size={32} style={styles.icon4} />
            <Text style={styles.txt4}>Assingned to me</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.opacity}>
          <View>
            <Entypo name="add-to-list" size={32} style={styles.icon5} />
            <Text style={styles.txt4}>Important tasks</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.line}></View>

      <View style={{ top: 82 }}>
        <View style={styles.task}>
          <View style={styles.InputBox}>
            <TextInput
              style={styles.Input}
              placeholder={"Add New tasks"}
              onChangeText={(text) => setTask(text)}
            />
          </View>

          <TouchableOpacity onPress={handeladd} style={styles.list}>
            <AntDesign name="pluscircle" size={28} style={styles.icon12} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.list1}>
            <FontAwesome5
              name="calendar-check"
              size={25}
              style={styles.icon12}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.list2}>
            <Entypo name="star" size={27} style={styles.icon12} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          bottom: 10,
          borderRadius: 15,
          marginBottom: 23,
          height: Dimensions.get("window").height * 0.7,
          width: Dimensions.get("window").width * 0.93,
          alignSelf: "center",
        }}
      >
        <ScrollView>
          {list.map((value, index) => (
            <Task key={index} name={value} onPress={handledelete} />
          ))}
        </ScrollView>
      </View>

      {/* <View style={styles.task}>
        <TouchableOpacity style={styles.list}>
          <Entypo name="plus" size={40} style={styles.icon12} />
          <Text style={styles.txt6}>Add New tasks</Text>
        </TouchableOpacity>
        <MaterialIcons name="add-task" size={30} style={styles.icon15} />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxOne: {
    backgroundColor: "#F6F3EE",
    height: "100%",
  },
  Input: {
    fontSize: 16,
    left: 5,
    color: "#8B7765",
    marginBottom: 4,
  },
  InputBox: {
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 4,
    width: Dimensions.get("window").width * 0.94,
    height: Dimensions.get("window").height * 0.075,
    borderRadius: 10,
    paddingLeft: 10,
    padding: 5,
    justifyContent: "center",
  },
  profile: {
    backgroundColor: "#147fdc",
    height: Dimensions.get("window").height * 0.064,
    width: Dimensions.get("window").width * 0.13,
    justifyContent: "center",
    borderRadius: 100,
    left: 15,
    top: 50,
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
    left: 79,
  },
  icon1: {
    alignSelf: "center",
    left: 40,
    bottom: 23,
    color: "#147fdc",
  },
  txt3: {
    left: 79,
    bottom: 5,
    fontWeight: "bold",
    color: "#8B7765",
  },
  box2: {
    top: 23,
  },

  icon2: {
    color: "#147fdc",
    left: 23,
  },
  txt4: {
    fontWeight: "bold",
    color: "#8B7765",
    fontSize: 16,
    left: 82,
    bottom: 28,
  },
  txt6: {
    fontWeight: "bold",
    color: "#8B7765",
    fontSize: 16,
    left: 82,
    bottom: 32,
  },
  icon3: {
    color: "#147fdc",
    left: 20,
  },
  txt5: {
    fontWeight: "bold",
    color: "#8B7765",
    fontSize: 16,
    left: 50,
    top: 5,
  },

  icon4: {
    color: "#147fdc",
    left: 20,
  },

  icon5: {
    color: "#147fdc",
    left: 25,
  },
  line: {
    borderWidth: 1,
    borderColor: "#8B7765",
    top: 64,
  },
  icon12: {
    color: "#147fdc",
  },

  opacity: {
    height: Dimensions.get("window").height * 0.05,
    width: Dimensions.get("window").width * 0.5,
    marginBottom: 10,
  },
  list: {
    bottom: 45,
    alignSelf: "flex-end",
    height: Dimensions.get("window").height * 0.069,
    width: Dimensions.get("window").width * 0.15,
  },
  list1: {
    bottom: 102,
    right: 64,
    alignSelf: "flex-end",
    // backgroundColor: "blue",
    height: Dimensions.get("window").height * 0.05,
    width: Dimensions.get("window").width * 0.1,
  },
  list2: {
    bottom: 145,
    right: 112,
    alignSelf: "flex-end",
    // backgroundColor: "red",
    height: Dimensions.get("window").height * 0.04,
    width: Dimensions.get("window").width * 0.09,
  },
  task: {},
});

export default Home;
