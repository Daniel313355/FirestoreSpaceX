// src/componentes/Registro.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebaseConfig'; // ✅ asegúrate de importar db

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrar = async () => {
    try {
      // 🔐 Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🗃 Guardar datos del usuario en Firestore
      await setDoc(doc(db, 'usuarios', user.uid), {
        correo: email,
        creado: new Date()
      });

      Alert.alert('¡Registro exitoso!');
    } catch (error) {
      console.error('Error al registrar:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" style={{ borderWidth: 1, marginBottom: 10 }} />
      
      <Text>Contraseña:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
      
      <Button title="Registrarse" onPress={registrar} />
    </View>
  );
}
