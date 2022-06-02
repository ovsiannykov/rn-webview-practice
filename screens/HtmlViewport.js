import React from 'react';
import {WebView} from 'react-native-webview';

import {myHtml} from '../data/htmlWithViewport';

const HtmlViewport = () => {
  return (
    <WebView
      source={{
        html: myHtml,
      }}
    />
  );
};

export default HtmlViewport;
