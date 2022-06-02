import React from 'react';
import {WebView} from 'react-native-webview';

const landing = require('../data/langing/index.html');

const LocalFile = () => {
  return <WebView source={landing} style={{flex: 1}} originWhitelist={['*']} />;
};

export default LocalFile;
