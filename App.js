import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button, View, StyleSheet, ImageBackground,ScrollView,Image } from 'react-native';


import imgdavinci from './assets/imgdavinci.jpg';
import imgmona from "./assets/mona.jpg";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgdavinci}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
          
        <Text style={{ fontSize: 80, color: "black" }}>
          Leonardo Da Vinci
        </Text>
        <Button
          title="    Historia    "
          onPress={() => navigation.navigate('Historia')}
          color="000"
        />
        <Text></Text>
        <Button
          title="      Quadros    "
          onPress={() => navigation.navigate('Quadros')}
          color="000"
        />
        <Text></Text>
        <Button
          title="   Cálculos    "
          onPress={() => navigation.navigate('Cálculos')}
          color="000"
        />
        <Text></Text>
        <Button
          title="   Sobre    "
          onPress={() => navigation.navigate('Sobre')}
          color="000"
        />
      </ImageBackground>
    </View>
  )
}

function Hitoria({ navigation }) {
  return (

    <View style={styles.container}>
      <ImageBackground
        source={imgdavinci}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
        <View style={styles.container}>
          <View style={styles.content}>

            <Text style={{ fontSize: 80, color: "#fff" }}>
              NÃO
            </Text>
            <ScrollView>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et consectetur erat. Phasellus consectetur nisl non magna aliquam, at feugiat turpis scelerisque. Sed quis tempor leo. Morbi quis iaculis lorem. Sed vel nisl eget lectus dapibus consectetur eget condimentum felis. Nam accumsan sollicitudin leo sed blandit. Quisque vitae libero nibh. Nam semper felis odio, nec elementum dui ultricies ac. Donec nec convallis nulla, id condimentum lorem. Nulla laoreet purus id porta maximus.

Mauris sit amet fermentum lorem, vel imperdiet ligula. Fusce metus sem, facilisis in sem eget, egestas tristique enim. Suspendisse et rutrum erat. Phasellus id nunc semper, fringilla enim vitae, rutrum libero. Cras ac commodo arcu. Nulla vulputate lorem in porta tempor. Sed nec fringilla magna, et pellentesque lectus. Nunc faucibus metus turpis, vel viverra ligula dapibus id. Etiam gravida porta leo, vitae laoreet magna.

Sed sodales enim eu facilisis faucibus. Duis facilisis nunc et nunc maximus rhoncus. Maecenas id vestibulum lectus, vitae aliquet lectus. Sed vel tellus tristique, congue ex eget, tristique turpis. Morbi aliquam vel urna tincidunt interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer lacinia mauris sit amet commodo dictum. Ut tempor lorem eu arcu mollis tristique. Aliquam imperdiet ex tortor, in auctor ante elementum quis. Integer laoreet purus eu consectetur mattis. Sed mattis est lorem, a euismod libero semper eu.

Phasellus bibendum ex in hendrerit posuere. Donec a felis odio. Suspendisse ipsum magna, vehicula ac mollis et, vulputate id risus. Pellentesque condimentum euismod ornare. Vestibulum maximus, risus sit amet interdum fermentum, massa justo tristique ligula, a luctus tortor leo in nunc. Donec lacinia a enim vel rutrum. Vivamus nisl tellus, dignissim non quam lobortis, luctus finibus enim. Praesent ultricies lacinia feugiat. Praesent sit amet neque eu mauris venenatis egestas in a risus. Morbi luctus, elit at molestie condimentum, sapien orci bibendum augue, id malesuada ipsum nibh ac turpis. Mauris posuere justo et augue vestibulum, ac dictum ligula accumsan. Fusce et tempor metus.</Text>
            </ScrollView>
          </View>
          <View>
            <Button
              title="    Voltar    "
              onPress={() => navigation.goBack()}
              color="000"
            />
            <Text></Text>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

function Quadros({ navigation }) {
  return (

    <View style={styles.container}>
      <ImageBackground
        source={imgdavinci}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
        <View style={styles.container}>
          <View style={styles.content}>

            <Text style={{ fontSize: 80, color: "#fff" }}>
              NÃO
            </Text>

            <ScrollView>

            <Image source={imgmona} style={{borderRadius:900}}/>

            </ScrollView>
          </View>
          <View>
            <Button
              title="    Voltar    "
              onPress={() => navigation.goBack()}
              color="000"
            />
            <Text></Text>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

function Cálculos({ navigation }) {
  return (

    <View style={styles.container}>
      <ImageBackground
        source={imgdavinci}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
        <View style={styles.container}>
          <View style={styles.content}>

            <Text style={{ fontSize: 80, color: "#fff" }}>
              NÃO
            </Text>

            <ScrollView>

            <Image source={imgmona} style={{borderRadius:900}}/>

            </ScrollView>
          </View>
          <View>
            <Button
              title="    Voltar    "
              onPress={() => navigation.goBack()}
              color="000"
            />
            <Text></Text>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

function Sobre({ navigation }) {
  return (

    <View style={styles.container}>
      <ImageBackground
        source={imgdavinci}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
        <View style={styles.container}>
          <View style={styles.content}>

            <Text style={{ fontSize: 80, color: "#fff" }}>
              NÃO
            </Text>

            <ScrollView>

            <Image source={imgmona} style={{borderRadius:900, justifyContent: 'center',}}/>
            <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Ana Laura de Souza Fernandes
          </Text>
            </ScrollView>
          </View>
          <View>
            <Button
              title="    Voltar    "
              onPress={() => navigation.goBack()}
              color="000"
            />
            <Text></Text>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Historia" component={Hitoria} />
        <Stack.Screen name="Quadros" component={Quadros} />
        <Stack.Screen name="Cálculos" component={Cálculos} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})
