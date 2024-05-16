// DetalleContacto.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalleContacto = ({ route }) => {
  const { contacto, nombre } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.contactName}>{nombre}</Text>
      <Text style={styles.contactNumber}>{contacto}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/CEUTEC_HONDURAS.png/1024px-CEUTEC_HONDURAS.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  contactName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  contactNumber: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
});

export default DetalleContacto;
