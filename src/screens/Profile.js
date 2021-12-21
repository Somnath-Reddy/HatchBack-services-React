/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import Background from '../components/Background';
import {StyleSheet, View} from 'react-native';
import {Text, Avatar, Divider, Headline} from 'react-native-paper';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import {auth} from '../../firebase';
import {onAuthStateChanged, signOut} from 'firebase/auth';

export default function ServiceScreen({navigation}) {
  const [user, setUser] = React.useState({
    displayName: '',
    email: '',
  });
  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
  });
  console.log('user', user);

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Avatar.Text
        size={130}
        labelStyle={styles.avatarLabel}
        label={user && user.displayName[0]}
      />
      <Headline>{user && user.displayName}</Headline>
      <Text>{user && user.email}</Text>

      <Divider />

      <Button
        mode="outlined"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          });
          signOut(auth);
        }}>
        Logout
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  avatarLabel: {
    color: '#fff',
  },
});
