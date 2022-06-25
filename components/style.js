import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

export const colors = {
  lightPrimary: '#5E72E4',
  blueBackground: '#e9ebf2',
  darkblueBackground: '#c9cedf',
  darkBackground: '#b9bfd6',
  // base colors
  DarkBlue: '#010038', // orange
  Blue: '#293A80', // gray
  LightBlue: '#537ec5',
  LightBlue1: '#4c669f',
  MiddleBlue: '#3b5998',
  Blue1: '#192f6a',
  Warm: '#f34c16',
  lightWarm: '#f56f44',
  BackGround: '#f2f2f0',
  green: '#5BB275',
  darkGreen: '#006400',
  DarkWhite: '#f6f7f7',
  rgbBackGround: 'rgba(0,0,0,0.1)',
  LightRed: '#df454d',
  Pink: '#F2ACB9',
  lightPink: '#ffdfd4',

  linearRed: '#FF6764',
  linearOrange: '#FF844C',
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  newBlue: '#4f4de8',
  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  lightGray5: '#e1e1e5',
  lightGray6: '#efeff1',
  transparent: 'transparent',
  darkgray: '#898C95',
  slateGray: '#708090',

  yellow: '#FFC664',
  purple: '#6B3CE9',
  red: '#FF4134',
  pink: '#FFCBDB',
  green2: '#66D59A',
  lightyellow: '#FFF9EC',
  lightRed: '#FFF1F0',
  lightRed1: '#ff7462',
  lightpurple: '#F3EFFF',
  lightGreen: '#E6FEF0',

  resultPrimary: '#7F5DF0',
  resultSecondary: '#5D2DFD',

  darkModeBlack: '#121212',
  darkModeLightBlack: '#181818',
  darkModeGray: '#404040',
  darkModeDarkGray: '#282828',
  darkModeLightGray: '#B3B3B3',

  success: '#00E096',
  info: '#0095FF',
  warning: '#FFAA00',
  danger: '#FF3D71',
  evaPrimary: '#3366FF',
  evaSecondary: '#f15025',
};

export const responsive = {
  fontSize: size => moderateScale(size),
  number: n => moderateScale(n, height < 600 ? 0.5 : 1),
  width,
  height,
  padding: 10,
};
