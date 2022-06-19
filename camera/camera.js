import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function Camera({setCameraOpen}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  let i = 0;
  const barcodeReadHandler = ({data}) => {
    i++;
    if (i == 1) {
      setCameraOpen(false);
      console.log('Barcode Data: ', data);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <RNCamera
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={barcodeReadHandler}
        captureAudio={false}
        style={{
          flex: 1,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setCameraOpen(false)}
          style={{
            position: 'absolute',
            top: height * 0.07,
            right: width * 0.08,
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
            width: width * 0.1,
          }}>
          <Text style={{color: 'white', fontSize: 30}}> X </Text>
        </TouchableOpacity>
        <View
          style={{
            width: width * 0.9,
            height: height * 0.2,
            alignSelf: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: 'red',
          }}
        />
      </RNCamera>
    </View>
  );
}
