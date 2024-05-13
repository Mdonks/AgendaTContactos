import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from 'react'


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 350, height: 100 }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/CEUTEC_HONDURAS.png/1024px-CEUTEC_HONDURAS.png",
        }}
      ></Image>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Agenda')}
        >
          Ir
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});