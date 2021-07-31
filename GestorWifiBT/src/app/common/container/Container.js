import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image, useColorScheme, SafeAreaView, useWindowDimensions, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Appbar, List, FAB} from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';
import Wifi from "../../../screens/Wifi/Wifi";
import BT from "../../../screens/Bluetooth/Bluetooth";
import { setData, sendData } from '../store';

function CustomNavigationBar() {
  return (
    <Appbar.Header>
      <Appbar.Content title="Gestor de conexiones" />
    </Appbar.Header>
  );
}

const renderScene = SceneMap({
  first: Wifi,
  second: BT,
});

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
})

export default function Container() {
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.generales.isLoading)
    const ssid = useSelector((store) => store.generales.ssid)
    const rssi = useSelector((store) => store.generales.rssi)
    const bluetooth = useSelector((store) => store.generales.bluetooth)
    const layout = useWindowDimensions();


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Wifi' },
        { key: 'second', title: 'Bluetooth' },
    ]);
    return (
        <>
            <CustomNavigationBar/>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
            />
             <FAB
                style={styles.fab}
                label={isLoading ? "" : "Enviar Información"}
                icon="send"
                loading={isLoading}
                onPress={() => {dispatch(setData({isLoading: true}));dispatch(sendData({ssid: ssid, rssi: rssi, bluetooth: bluetooth}));}}
              />
        </>
  );
}
