import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {
  Appbar,
  Divider,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconsData} from '../../icons';

export const IconSelectBottomSheet = ({
  visible,
  setVisible,
  selectedIcon,
  setSelectedIcon,
}) => {
  // hooks
  const sheetRef = useRef(null);
  const theme = useTheme();

  const snapPoints = useMemo(() => ['100%'], []);

  useEffect(() => {
    if (!visible) {
      _handleCloseFilterSheet();
    } else {
      _handleOpenFilterSheet(0);
    }
  }, [visible, sheetRef]);

  // callbacks
  const _handleSheetChange = useCallback(index => {}, []);
  const _handleOpenFilterSheet = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const _handleCloseFilterSheet = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const _renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={1}
      />
    ),
    [],
  );
  const _renderIcons = ({item}) => (
    <TouchableRipple
      style={{
        backgroundColor: theme?.colors.surface,
      }}
      onPress={() => {
        setSelectedIcon(item);
        setVisible(false);
      }}>
      <Surface
        elevation={0}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 12,
          // backgroundColor: '#00000000',
        }}>
        <View
          style={{
            borderRadius: 8,
            padding: 16,
            backgroundColor:
              item === selectedIcon
                ? theme?.colors.primary
                : theme?.colors.surfaceVariant,
          }}>
          <MaterialCommunityIcons
            name={item}
            size={32}
            color={
              item === selectedIcon
                ? theme?.colors.onPrimary
                : theme?.colors.primary
            }
          />
        </View>
        <Text style={[{marginLeft: 20, color: theme?.colors.onSurface}]}>
          {item}
        </Text>
      </Surface>
    </TouchableRipple>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleStyle={{display: 'none'}}
      backdropComponent={_renderBackdrop}
      onClose={() => setVisible(false)}
      onChange={_handleSheetChange}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            setVisible(false);
          }}
        />
        <Appbar.Content
          title="Transaction Icons"
          titleStyle={{fontWeight: '700'}}
        />
      </Appbar.Header>
      <Divider />
      <BottomSheetFlatList
        data={IconsData}
        keyExtractor={i => i}
        renderItem={_renderIcons}
        style={{backgroundColor: theme?.colors.surface}}
        contentContainerStyle={{
          backgroundColor: theme?.colors.surface,
        }}
        ItemSeparatorComponent={() => <Divider />}
      />
    </BottomSheet>
  );
};
