/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RTNMyDate from 'rtn-my-date/js/NativeMyDate';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const date = new Date('27 Jul 2023 06:02 +07:00UTC');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={{fontSize: 20, color: 'red'}}>{date.toString()}</Text>
      <Text style={{fontSize: 20, color: 'red'}}>
        {RTNMyDate?.getNativeDate('27 Jul 2023 06:02 +07:00UTC')}
      </Text>
    </SafeAreaView>
  );
}

// yarn add ./RTNMyDate

// node rnapp/node_modules/react-native/scripts/generate-codegen-artifacts.js \
//   --path rnapp/ \
//   --outputPath rnapp/RTNMyDate/generated/

// ./gradlew generateCodegenArtifactsFromSchema

//RCT_NEW_ARCH_ENABLED=1 bundle exec pod install

export default App;

// import Foundation

// let dateString = "27 Jul 2023 06:02 +07:00UTC"
// let dateFormatter = DateFormatter()
// dateFormatter.dateFormat = "dd MMM yyyy HH:mm ZZZZZ"

// if let date = dateFormatter.date(from: dateString) {
//     print("Parsed date:", date)
// } else {
//     print("Failed to parse date")
// }
