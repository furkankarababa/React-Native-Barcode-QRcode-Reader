import React, {useState} from 'react';
import {TouchableOpacity, Text, Dimensions, View} from 'react-native';
import Camera from './camera/camera';

export default function App() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [cameraOpen, setCameraOpen] = useState(false);

  function camera() {
    return <Camera setCameraOpen={setCameraOpen} />;
  }
  function body() {
    return (
      <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 20,
            borderRadius: 10,
            width: width * 0.9,
            backgroundColor: 'darkblue',
          }}
          onPress={() => setCameraOpen(true)}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            Click For Camera
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {!cameraOpen && body()}
      {cameraOpen && camera()}
    </View>
  );
}
