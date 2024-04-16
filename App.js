import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button, View, StyleSheet, ImageBackground,ScrollView,Image } from 'react-native';


import imgdavinci from './assets/imgdavinci.jpg';
import imgmona from "./assets/mona.jpg";
import imgvinci from "./assets/vinci.png";

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
      
        <View style={styles.container}>
          <View style={styles.content}>

            <ScrollView>
            <Text style={{ fontSize: 40, color: "black" , alignItems:"center"}}>
              QUEM FOI
            </Text>

              <Text>Leonardo Da Vinci foi um pintor e inventor nascido nos anos 1452.Em quanto os Eupeus estavam mais preocupados em colocarem seus pés na mais descoberta América
                Leonardo Da Vinci queria saber como funcionavam os músculos do corpo humano, projetar Tanques de Guerra e cidades avançadas .

              </Text>
              <Image source={imgvinci} style={{borderRadius:50, width: "50%", height:"100%",justifyContent: 'center',}}/>
              <Text></Text>
            
<Text style={{ fontSize: 40, color: "black" }}>
              INVENÇÕES
            </Text>

            <Text style={{ fontSize: 40, color: "black" }}>
              QUADROS
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
