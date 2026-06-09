import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image  
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <StatusBar style="light" />

        <Text style={styles.title}>
          Login App (Park, Arias)
        </Text>

        <Image
          source={require('./assets/coca-cola-icon.png')}
          style={{ width: 120, height: 120 }}
        />

        <TextInput
          placeholder="Usuario"
          style={styles.input}
        />

        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
        />

        <Button
          title="Ingresar"
          color="#8E5DFB"
          onPress={() => {}}
        />

        <Text style={styles.text}>
          ¿Olvidaste la clave?
        </Text>

        <Text style={styles.text}>
          Crear cuenta
        </Text>

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

  title: {
    fontSize: 22,
    marginBottom: 20,
  },

  text: {
    color: '#000',
    marginTop: 10,
  },

  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#8E5DFB',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="backgroundColor: #612FFC" ><Text>Login App (Park, Arias)</Text></StatusBar>
        <Image
  source={require('./assets/coca-cola-icon.png')}
  style={{ width: 100, height: 100 }}
/>
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
    borderRadius: '5'
  }
});
*/