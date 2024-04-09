import * as React from 'react';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, Button, View, StyleSheet, ImageBackground } from 'react-native';


import imgdavinci from './assets/imgdavinci.jpg';

function Home({ navigation }){
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgdavinci}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <View style={styles.content}>
            
            <Text style={{ fontSize: 80, color:"#fff" }}>
              The Walking Dead
            </Text>
          </View>
          <View>
            <Button
              title="    Historia    "
              onPress={() => navigation.navigate('PageUm')}
              color="000"
            />
           <Text></Text>
            <Button
              title="      Quadros    "
              onPress={() => navigation.navigate('PageDois')}
              color="000"
            />
      <Text></Text>
            <Button
              title="   Cálculos    "
              onPress={() => navigation.navigate('PageTres')}
              color="000"
            />
         <Text></Text>
          
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
export default function App({ navigation }) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  