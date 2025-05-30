import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

export default function Logout({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cerrarSesion = async () => {
      try {
        await signOut(auth);
        setLoading(false);
        // Opcional: redirigir después de cerrar sesión, si usas navigation
        // navigation.replace('Login');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    };
    cerrarSesion();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null; // O mostrar algo si quieres después del logout
}
