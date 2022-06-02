import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SiteScreen')}>
          <Text style={styles.buttonTitle}>Visit Site</Text>
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
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default HomeScreen;
