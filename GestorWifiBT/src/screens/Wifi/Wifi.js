import React, {useState, useEffect} from 'react';
import { PermissionsAndroid, Button, Platform} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
} from 'react-native';

import WifiManager from 'react-native-wifi-reborn';
import { List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setData, resetData } from '../../app/common/store';

const Wifi = () => {
	const dispatch = useDispatch();
	const ssid = useSelector((store) => store.generales.ssid)
	const rssi = useSelector((store) => store.generales.rssi)

  const initWifi = async () => {
    try {
      const temp_ssid = await WifiManager.getCurrentWifiSSID();
      const temp_rssi = await WifiManager.getCurrentSignalStrength();
      dispatch(setData({ ssid: temp_ssid, rssi: temp_rssi }));

      console.log('Your current connected wifi SSID is ' + ssid);
    } catch (error) {
    	dispatch(setData({ ssid: '', rssi: '' }));
      console.log('Cannot get current SSID!', {error});
    }
  }

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Solicitud de permisos de ubicación",
          message:
            "Se requieren permisos de ubicación para acceder a las redes Wifi. ",
          buttonNeutral: "Preguntar luego",
          buttonNegative: "Cancelar",
          buttonPositive: "Aceptar"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        initWifi();
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };


  useEffect(() => {
  	if(Platform.OS == "android")
    requestLocationPermission();
  }, []);

  return (
    <View style={{"backgroundColor": "#ffffff", flex: 1}}>
      <List.Section>
	    <List.Subheader>Datos de la red</List.Subheader>
	    <List.Item title={JSON.stringify(ssid)} left={() => <List.Icon icon="wifi" />} />
	    <List.Item
	      title={JSON.stringify(rssi)}
	      left={() => <List.Icon icon="wifi-strength-3" />}
	    />
	  </List.Section>
    </View>
  );
};

export default Wifi;