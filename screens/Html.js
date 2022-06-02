import React from 'react';
import {WebView} from 'react-native-webview';

import {myHtmlJust} from '../data/htmlJust';

const Html = () => {
  return (
    <WebView
      source={{
        html: myHtmlJust,
      }}
    />
  );
};

export default Html;
