/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import Background from '../components/Background';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import BackButton from '../components/BackButton';

export default function ServiceScreen({navigation}) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Text>Thanks for choosing Services</Text>
    </Background>
  );
}
