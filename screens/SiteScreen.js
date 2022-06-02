import React from 'react';
import {WebView} from 'react-native-webview';

const SiteScreen = () => {
  return <WebView source={{uri: 'https://memcrab.com/'}} />;
};

export default SiteScreen;
