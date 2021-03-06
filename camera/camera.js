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
  Linking,
  Alert,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {colors, responsive} from '../components/style';

export default function Camera({
  setCameraOpen,
  errorModal,
  setErrorModal,
  url,
  setUrl,
}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  let i = 0;
  const barcodeReadHandler = ({data}) => {
    i++;
    if (i == 1) {
      setCameraOpen(false);
      openUrl(data);
      setUrl(data);
      console.log('Barcode Data: ', data);
    }
  };

  function openUrl(url) {
    try {
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          setErrorModal(true);
          console.log("Don't know how to open URI: " + url);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <RNCamera
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={barcodeReadHandler}
        captureAudio={false}
        style={{
          flex: 1,
          width: responsive.width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setCameraOpen(false)}
          style={{
            position: 'absolute',
            top: responsive.height * 0.07,
            right: responsive.width * 0.08,
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
            width: responsive.width * 0.1,
          }}>
          <Text style={{color: colors.white, fontSize: responsive.number(30)}}>
            {' '}
            X{' '}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: responsive.width * 0.9,
            height: responsive.height * 0.4,
            alignSelf: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: colors.red,
          }}
        />
      </RNCamera>
    </View>
  );
}
