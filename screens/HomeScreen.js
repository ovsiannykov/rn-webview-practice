import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SiteScreen')}>
          <Text style={styles.buttonTitle}>memCrab site</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20, ...styles.button}}
          onPress={() => navigation.navigate('Html')}>
          <Text style={styles.buttonTitle}>HTML</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#FFF66B',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: '#a60028',
    borderRadius: 2,
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default HomeScreen;
