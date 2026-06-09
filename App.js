import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { img } from './assets/coca-cola-icon.png'
import { SafeAreaView } from 'react-native/types_generated/index';
import { TextInput } from 'react-native/types_generated/index';
import { Button } from 'react-native/types_generated/index';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="backgroundColor: #612FFC" ><Text>Login App (Park, Arias)</Text></StatusBar>
        <Image source={{ url: img }} />
        <TextInput style={[styles.text, styles.input]}></TextInput>
        <TextInput style={[styles.text, styles.input]}></TextInput>
        <Button style={"backgroundColor: #8E5DFB, color: #fff"} />
        <Text style={styles.text}>Olvidaste la clave?</Text>
        <Text style={styles.text}>Crear Cuenta</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000'
  },
  input: {
    borderColor: '#8E5DFB',
    borderRadius: '5px'
  }
});
