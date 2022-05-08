import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Modal, View } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Widget } from './src/components/Widget';
import { theme } from './src/theme';

import 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />

      <Modal>
        <GestureHandlerRootView
          style={{
            flex: 1,
            marginBottom: -2,
            backgroundColor: theme.colors.background
          }}>
          <Widget />
        </GestureHandlerRootView>
      </Modal>
    </View>
  );
}