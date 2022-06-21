import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  View,
  NativeModules,
  Modal,
  Platform,
} from 'react-native';

import Camera from './camera/camera';

export default function App() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [cameraOpen, setCameraOpen] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [url, setUrl] = useState('');

  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  console.log(deviceLanguage);

  function camera() {
    return (
      <Camera
        setCameraOpen={setCameraOpen}
        errorModal={errorModal}
        setErrorModal={setErrorModal}
        url={url}
        setUrl={newVal => setUrl(newVal)}
      />
    );
  }
  function body() {
    return (
      <View
        style={{
          flex: 1,
          width: width,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 20,
            borderRadius: 100,
            width: width * 0.44,
            height: height * 0.2,
            backgroundColor: 'white',
          }}
          onPress={() => setCameraOpen(true)}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            {deviceLanguage.split('-')[0] == 'tr' ? 'Tara' : 'Scan'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function modal() {
    return (
      <Modal
        style={{alignItems: 'center', justifyContent: 'center'}}
        transparent={true}
        visible={errorModal}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: width,
            height: height,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              width: width,
              height: height * 0.4,
            }}>
            <View style={{}}>
              <TouchableOpacity onPress={() => setErrorModal(false)}>
                <Text style={{color: 'red'}}>X</Text>
              </TouchableOpacity>
              <View>
                <Text style={{color: 'red'}}>
                  {deviceLanguage.split('-')[0] == 'tr'
                    ? 'Adres Hatalı'
                    : 'Wrong Url'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={{flex: 1}}>
      {!cameraOpen && body()}
      {cameraOpen && camera()}
      {modal()}
    </View>
  );
}
