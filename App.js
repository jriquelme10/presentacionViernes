import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import Data from './src/Data';
import { useState } from 'react';

export default function App() {
  // La función renderItem define cómo se renderiza cada ítem en el FlatList
  const renderItem = ({ item }) => {
    const alert = () => {
      // Al presionar el TouchableOpacity, se muestra una alerta con el nombre y el precio del auto seleccionado
      Alert.alert(item.name, "Precio: " + item.price, "OK");
    };
  
    return (
      <TouchableOpacity style={styles.button} onPress={alert}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* FlatList renderiza una lista de ítems */}
        <FlatList
          data={Data} // Los datos se obtienen del archivo Data.js importado
          renderItem={renderItem} // La función renderItem se utiliza para renderizar cada ítem
          keyExtractor={(item) => item.id} // Se utiliza el atributo "id" de cada ítem como clave
          //horizontal={true} // Se renderiza la lista de forma horizontal
          
        />
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
  button: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingBottom: 40,
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});