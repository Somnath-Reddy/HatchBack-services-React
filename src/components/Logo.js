/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function Logo() {
  return <Image source={require('../assets/logo.png')} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
    marginBottom: 8,
  },
});
