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
import {MaterialCommunityIcons} from './styles/icons';

export default function App() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [cameraOpen, setCameraOpen] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [url, setUrl] = useState('');
  const [isResult, setIsResult] = useState(false);

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
          }}
          onPress={() => setCameraOpen(true)}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color={'white'}
            size={50}
          />
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
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: width,
            height: height,
          }}>
          <View
            style={{
              backgroundColor: 'gray',
              borderRadius: 10,
              width: width * 0.9,
              height: height * 0.4,
            }}>
            <View
              style={{
                flex: 2,
                alignSelf: 'center',
                justifyContent: 'flex-start',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 9,
                    padding: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 20,
                      flex: 4,
                    }}>
                    {deviceLanguage.split('-')[0] == 'tr'
                      ? 'Barkod/QR No'
                      : 'Barcode/QR No'}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setErrorModal(false)}
                  style={{
                    flex: 1,
                    alignSelf: 'flex-end',
                    padding: 10,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 8,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: 'gray',
                borderRadius: 10,
                width: width * 0.75,
                padding: 10,
                marginBottom: 40,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                {url}
              </Text>
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
