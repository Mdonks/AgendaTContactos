// Agenda.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface AgendaComponent {
  contactoID: number;
  contacto: string;
  nombre: string;
}

const Agenda = () => {
  const [contacto, setContacto] = useState<AgendaComponent[]>([]);
  const [contInputText, setConInputText] = useState('');
  const [nomInputText, setNomInputText] = useState('');
  const navigation: any = useNavigation();

  const agregaContacto = () => {
    if (nomInputText.length < 3) {
      Alert.alert('Ups', 'El nombre debe tener al menos 3 caracteres');
      return;
    }

    if (contInputText.length < 8) {
      Alert.alert('Ups', 'El número de contacto debe tener al menos 8 caracteres');
      return;
    }

    const newContacto: AgendaComponent = {
      contactoID: contacto.length + 1,
      contacto: contInputText,
      nombre: nomInputText,
    };

    setContacto([...contacto, newContacto]);
    setConInputText('');
    setNomInputText('');
  };

  const handleContactoPress = (elemento: AgendaComponent) => {
    navigation.navigate("DetalleContacto", {
      contacto: elemento.contacto,
      nombre: elemento.nombre
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setConInputText}
        value={contInputText}
        placeholder="Ingrese número de contacto"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNomInputText}
        value={nomInputText}
        placeholder="Ingrese nombre de contacto"
      />
      <Button title="Agregar" onPress={agregaContacto} />

      <ScrollView contentContainerStyle={styles.contactList}>
        {contacto.map((elemento) => (
          <TouchableOpacity
            key={elemento.contactoID}
            style={styles.contactItem}
            onPress={() => handleContactoPress(elemento)}
          >
            <View>
              <Text style={styles.contactName}>{elemento.nombre}</Text>
              <Text style={styles.contactNumber}>{elemento.contacto}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  contactList: {
    marginTop: 20,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    elevation: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contactNumber: {
    fontSize: 14,
    color: '#666',
  },
});

export default Agenda;
