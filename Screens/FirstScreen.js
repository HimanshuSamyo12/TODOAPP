// import {Q} from '@nozbe/watermelondb';
// import withObservables from '@nozbe/with-observables';
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View ,Dimensions,TouchableOpacity} from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

import { Appbar, FAB, Menu, useTheme } from "react-native-paper";
// import {connect} from 'react-redux';
// import {CONSTANTS} from '../../constants';
// import {DeleteConfirmationDialog} from '../components/DeleteConfirmationDiyalog';
// import {EmptyTasks} from '../components/EmptyTasks';
import TaskInput from "../Helpers.js/TaskInput";
import TaskItem from '../components/TaskItem';
import { useNavigation } from "@react-navigation/native";
// import TaskSortBottomSheet from '../components/TaskSortBottomSheet';
// import {database} from '../db/db';
// import Note from '../db/models/Note';
// import Task from '../db/models/Task';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {
//   deleteNote,
//   duplicateNote,
//   editNoteIsArchived,
//   editNoteIsPinned,
//   resetDeleteNoteState,
// } from '../redux/actions';
// import {Logger} from '../utils/logger';
// import {SharedElement} from 'react-navigation-shared-element';
// import Animated, {SlideInRight} from 'react-native-reanimated';

/**
 *
 * @param {object} param0
 * @param {Note} param0.note
 * @returns
 */
const NoteScreen = ({

  route,
  note,

  deleteNoteSuccess,
  dispatch,
}) => {

  const navigation = useNavigation();


  const tasks = [
    {
      isDone:false,title:"task1",isArchived:false,isMarkedDeleted:false,isBookmarked:true
    },
    {
      isDone:true,title:"task1",isArchived:true,isMarkedDeleted:false,isBookmarked:true
    },
    {
      isDone:true,title:"task1",isArchived:true,isMarkedDeleted:false,isBookmarked:true
    },
    {
      isDone:true,title:"task1",isArchived:true,isMarkedDeleted:false,isBookmarked:true
    },
  ];
  // ref

  // variables
  const theme = useTheme();

  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTaskInputOpen, setIsTaskInputOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isSortBottomSheetVisible, setIsSortBottomSheetVisible] =
    useState(false);

  // effects
  // useFocusEffect(
  //   useCallback(() => {
  //     _init();
  //     return _onDestroy;
  //   }, []),
  // );

  useEffect(() => {
    if (deleteNoteSuccess) {
      _navigateBack();
    }
  }, [deleteNoteSuccess]);

  // callbacks

  // render functions
  /**
   *
   * @param {object} param0
   * @param {Task} param0.item
   * @returns
   */
  const _renderTaskItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
       <TaskItem
          task={item}/>
      </ScaleDecorator>
    );
  };

  // handle functions
  const _handleOpenDeleteNoteDialog = () => {
    setIsMenuOpen(false);
    setIsDeleteDialogOpen(true);
  };
  const _handleArchiveNote = () => {
    setIsMenuOpen(false);
    dispatch(editNoteIsArchived({ id: note.id, isArchived: true }));
    navigation?.pop();
  };
  const _handleUnarchiveNote = () => {
    setIsMenuOpen(false);
    dispatch(editNoteIsArchived({ id: note.id, isArchived: false }));
  };
  const _handleCloseDeleteNoteDialog = () => {
    setIsDeleteDialogOpen(false);
  };
  const _handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const _handleDeleteNote = () => {
    dispatch(deleteNote({ id: note.id }));
    setIsMenuOpen(false);
    setIsDeleteDialogOpen(false);
  };
  const _handleDuplicateNote = () => {
    dispatch(duplicateNote({ id: note.id }));
    setIsMenuOpen(false);
  };
  const _handlePinNote = () => {
    dispatch(editNoteIsPinned({ id: note.id, isPinned: true }));
    setIsMenuOpen(false);
  };
  const _handleUnpinNote = () => {
    dispatch(editNoteIsPinned({ id: note.id, isPinned: false }));
    setIsMenuOpen(false);
  };
  const _handleOpenTaskInput = () => {
    setIsTaskInputOpen(true);
  };
  const _handleCloseTaskInput = () => {
    setIsTaskInputOpen(false);
  };
  const _handleOpenSortTaskBottomSheet = () => {
    setIsMenuOpen(false);
    setIsSortBottomSheetVisible(true);
  };

  // navigation functions
  const _navigateBack = () => {
    navigation?.pop();
  };

  // misc functions
  const _init = () => {};
  const _onDestroy = () => {
    dispatch(resetDeleteNoteState());
    setIsSortBottomSheetVisible(false);
    setIsMenuOpen(false);
  };

  // return
  return (
    <SafeAreaView
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme?.colors.surface,
      }}
    >
      {/* <DeleteConfirmationDialog
        visible={isDeleteDialogOpen}
        message="note"
        handleCancel={_handleCloseDeleteNoteDialog}
        handleDelete={_handleDeleteNote}
      /> */}
     
     
<View style={{flexDirection:'row',marginBottom:15,height:90,paddingTop:23}}>
      <TouchableOpacity style={{bottom:40,marginRight:200,}} 
       onPress={() => navigation.toggleDrawer()} >
        
        <View style={styles.profile}>
          <Text style={styles.txt1}>HV</Text>
        </View>

        <View style={{}}>
          <Text style={styles.txt2}>Himanshu Verma</Text>
        </View>
      </TouchableOpacity>

        <Menu
          visible={isMenuOpen}
          onDismiss={_handleToggleMenu}
          anchor={
            <Appbar.Action icon={"dots-vertical"} onPress={_handleToggleMenu} style={{top:10}}/>
          }
        >
          <Menu.Item onPress={() => {}} title="Edit" leadingIcon={"pencil"} />
          <Menu.Item
            onPress={() => {}}
            title={"Pin note"}
            leadingIcon={"pin"}
          />
          <Menu.Item onPress={() => {}} title="Sort by" leadingIcon={"sort"} />

          <Menu.Item
            onPress={() => {}}
            title="Duplicate note"
            leadingIcon={"content-duplicate"}
          />
          <Menu.Item
            onPress={() => {}}
            title={"Archive"}
            leadingIcon={"package-down"}
          />
          <Menu.Item
            onPress={() => {}}
            title="Delete note"
            leadingIcon={"delete"}
          />
        </Menu>
        </View>
 <DraggableFlatList
        contentContainerStyle={{padding: 12}}
        data={tasks}
        onDragEnd={value =>
          Logger.pageLogger('NoteScreen.js:DraggableFlatList:onDragEnd')
        }
        keyExtractor={item => item.id}
        renderItem={_renderTaskItem}
        ListEmptyComponent={() => (
          <EmptyTasks message={'Try adding your first task'} />
        )}
      />
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
          // backgroundColor: theme?.colors.surface,
          backgroundColor:
            note && note.colorString ? note.colorString : theme?.colors.error,
        }}
        color={theme?.colors.surface}
        onPress={_handleOpenTaskInput}
      />
      <TaskInput visible={isTaskInputOpen} setVisible={setIsTaskInputOpen} />
    </SafeAreaView>
  );
};


const styles=StyleSheet.create({

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
    top: 10,
  },


});


export default NoteScreen;
