/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import Background from '../components/Background';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

export default function Dashboard({navigation}) {
  const [items, setItems] = React.useState([
    {name: 'Periodic Service', code: '#DD5F4D'},
    {name: 'Battery', code: '#2ecc71'},
    {name: 'Car Spa', code: '#3498db'},
    {name: 'Ac Service', code: '#9b59b6'},
    {name: 'Denting & Painting', code: '#34495e'},
    {name: 'Tyres', code: '#16a085'},
    {name: 'Custom services', code: '#27ae60'},
    {name: 'Interios', code: '#2980b9'},
  ]);
  return (
    <Background>
      <Text style={styles.text}>Our Services</Text>
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.itemContainer, {backgroundColor: item.code}]}
            onPress={() => navigation.navigate('ServiceScreen')}>
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          })
        }>
        Logout
      </Button> */}
    </Background>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  text: {
    marginTop: 50,
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    opacity: 0.7,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
