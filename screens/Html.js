import React from 'react';
import {WebView} from 'react-native-webview';

const Html = () => {
  return (
    <WebView
      source={{
        html: '<h1>Hello!</h1> <style>h1 {color: #a60028; font-size: 100px; margin-top: 120px; text-align: center;}</style>',
      }}
      scalesPageToFit={false}
    />
  );
};

export default Html;
