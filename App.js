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
import {MaterialCommunityIcons} from './components/icons';
import {colors, responsive} from './components/style';

export default function App() {
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
          width: responsive.width,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: colors.red,
        }}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            padding: responsive.number(20),
            borderRadius: 100,
            width: responsive.width * 0.44,
            height: responsive.height * 0.4,
          }}
          onPress={() => setCameraOpen(true)}>
          <View style={{alignSelf: 'center', justifyContent: 'center'}}>
            <MaterialCommunityIcons
              name={'barcode-scan'}
              color={colors.white}
              size={responsive.number(100)}
            />
          </View>
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
            width: responsive.width,
            height: responsive.height,
          }}>
          <View
            style={{
              backgroundColor: 'gray',
              borderRadius: responsive.number(10),
              width: responsive.width * 0.9,
              height: responsive.height * 0.4,
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
                    padding: responsive.number(10),
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: responsive.number(20),
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
                    padding: responsive.number(10),
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: responsive.number(20),
                      fontWeight: 'bold',
                    }}>
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
                borderRadius: responsive.number(10),
                width: responsive.width * 0.75,
                padding: responsive.number(10),
                marginBottom: responsive.number(40),
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: colors.white,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: responsive.number(30),
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
