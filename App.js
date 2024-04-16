import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button, View, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';


import imgdavinci from './assets/imgdavinci.jpg';
import imgmona from "./assets/mona.jpg";
import imgvinci from "./assets/vinci.jpg";
import imgmaquina from "./assets/maquina.jpg";
import imgpara from "./assets/paraquedas.jpg";
import imgagua from "./assets/agua.jpg";
import imgeu from "./assets/eu.jpg";
import imgmarrom from "./assets/marrom.jpg";
import imgceia from "./assets/ceia.jpg";
import imgdama from "./assets/dama.jpg";
import imgsao from "./assets/sao.jpg";
import imgvirgem from "./assets/virgem.jpg";
import imgcalculo from "./assets/calculo.jpg";


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
        source={imgmarrom}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>

        <View style={styles.container}>
          <View style={styles.content}>

            <ScrollView>
              <Text style={{ fontSize: 40, color: "white", alignSelf: "center", marginTop: 50 }}>
                QUEM FOI
              </Text>

              <Text style={{ marginBottom: 10, color: "white", marginTop: 10 }}>Leonardo da Vinci foi um dos maiores gênios do Renascimento italiano, nascido em Vinci, perto de Florença, em 15 de abril de 1452, e falecido em Amboise, França, em 2 de maio de 1519. Ele foi um polímata extraordinário, destacando-se como pintor, escultor, cientista, matemático, engenheiro, inventor, anatomista, arquiteto, botânico e escritor.

                Como artista, Leonardo revolucionou a pintura, introduzindo técnicas como o sfumato (suaves transições entre tons), o chiaroscuro (contrastes entre luz e sombra) e a perspectiva atmosférica (criação de profundidade em paisagens). Suas obras-primas incluem a "Mona Lisa" e "A Última Ceia", que continuam a ser estudadas e admiradas até hoje.

                Além de suas contribuições para a arte, Leonardo foi um cientista e inventor prolífico. Ele realizou estudos pioneiros em anatomia humana, projetou máquinas voadoras, submarinos, tanques de guerra, paraquedas e diversas outras invenções que estavam muito à frente de seu tempo.

                Leonardo da Vinci foi uma figura incrivelmente curiosa e observadora, dedicada ao estudo do mundo natural e à compreensão do funcionamento do universo. Seu legado como um dos maiores gênios da história continua a inspirar e fascinar as pessoas em todo o mundo até os dias de hoje.

              </Text>
              <Image source={imgvinci} style={{ borderRadius: 900, justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />
              <Text></Text>

              <Text style={{ fontSize: 40, color: "white", alignSelf: "center", marginBottom: 25 }}>
                INVENÇÕES
              </Text>

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}>Leonardo da Vinci foi um gênio polímata que se destacou em diversas áreas, incluindo arte, ciência, engenharia e anatomia. Suas invenções e projetos visionários revelam uma mente muito à frente de seu tempo. Aqui estão algumas de suas invenções mais notáveis:

                Máquina Voadora: Leonardo projetou várias máquinas voadoras, inspiradas no voo dos pássaros. Seus esboços incluem designs de asas batentes e ornitópteros.</Text>

              <Image source={imgmaquina} style={{ justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}>Paraquedas: Da Vinci desenhou um tipo de paraquedas, com uma estrutura piramidal feita de tecido e varas de madeira. Embora não haja evidências de que tenha sido testado em sua época, seu design demonstra compreensão dos princípios aerodinâmicos necessários para a descida segura.</Text>
              <Image source={imgpara} style={{ justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}>Máquina Subaquática: Leonardo concebeu uma espécie de escafandro com um suprimento de ar que permitiria a respiração subaquática. Seu projeto incluía tubos que conectavam o dispositivo à superfície.</Text>
              <Image source={imgagua} style={{ justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />
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
        source={imgmarrom}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
        <View style={styles.container}>
          <View style={styles.content}>

            <ScrollView>

              <Text style={{ fontSize: 40, color: "white", alignSelf: "center", marginTop: 50 }}>
                QUADROS
              </Text>

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}>Leonardo da Vinci é conhecido principalmente por suas obras de arte, algumas das quais são consideradas entre as mais famosas e influentes da história da arte. Aqui estão alguns dos quadros mais renomados atribuídos a ele:

                Mona Lisa: Provavelmente o quadro mais famoso de todos os tempos, a "Mona Lisa" retrata uma mulher com um sorriso enigmático. Ela é exibida no Museu do Louvre, em Paris, e é um dos ícones mais reconhecíveis da arte ocidental.</Text>
              <Image source={imgmona} style={{ borderRadius: 900,justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />


              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}> A Última Ceia: Esta obra-prima é uma representação da última ceia de Jesus com seus discípulos antes de sua crucificação. Encomendada para decorar o refeitório do Convento de Santa Maria delle Grazie, em Milão, é uma das pinturas mais importantes do Renascimento italiano.</Text>
              <Image source={imgceia} style={{ justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}> A Virgem dos Rochedos: Da Vinci pintou duas versões deste tema religioso. Uma delas está atualmente na National Gallery, em Londres, enquanto a outra está no Louvre. Ambas as pinturas retratam a Virgem Maria com o Menino Jesus, São João Batista e um anjo em uma paisagem rochosa.</Text>
              <Image source={imgvirgem} style={{ borderRadius: 900,justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}>Dama com Arminho: Esta pintura retrata Cecilia Gallerani, uma amante de Ludovico Sforza, Duque de Milão, segurando um arminho, um tipo de animal semelhante a uma doninha. É uma das pinturas mais conhecidas de Da Vinci e está atualmente no Museu Czartoryski, em Cracóvia, na Polônia.</Text>
              <Image source={imgdama} style={{ borderRadius: 900,justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white" }}> São João Batista: Esta pintura retrata São João Batista, primo de Jesus Cristo, em uma pose contemplativa, apontando para o céu. É conhecida por sua técnica de sfumato, uma técnica de pintura que produz transições suaves entre as cores e sombras.</Text>
              <Image source={imgsao} style={{ borderRadius: 900,justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />

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
        source={imgmarrom}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
        <View style={styles.container}>
          <View style={styles.content}>

            <ScrollView>

              <Text style={{ fontSize: 40, color: "white", alignSelf: "center", marginTop: 50 }}>
                CÁLCULOS
              </Text>

              <Text style={{ marginBottom: 10, marginTop: 25, color: "white", alignItems: "center"}}> Os "cálculos de Da Vinci" referem-se às anotações e esboços matemáticos encontrados nos cadernos de Leonardo da Vinci. Embora seja mais conhecido por suas contribuições nas áreas de arte e engenharia, Da Vinci também demonstrou um grande interesse pela matemática e pela aplicação dos princípios matemáticos em suas obras de engenharia e arquitetura.

                Seus cadernos contêm uma variedade de cálculos e fórmulas, muitos dos quais se relacionam com sua investigação da proporção áurea e a aplicação dela na arte e na natureza. Ele também explorou questões de geometria, como a divisão do círculo e a trissecção do ângulo, desafios que eram importantes na época para resolver certos problemas de design e construção.

                Além disso, Da Vinci estava interessado em problemas práticos de matemática, como a medição de áreas e volumes para fins arquitetônicos e hidráulicos. Seus estudos matemáticos contribuíram significativamente para o desenvolvimento de suas habilidades como engenheiro e inventor.

                Embora seus cálculos e anotações matemáticas não tenham sido tão extensivamente estudados ou reconhecidos quanto suas obras de arte, eles fornecem uma visão fascinante do pensamento de um dos maiores gênios da história e sua abordagem interdisciplinar para compreender o mundo ao seu redor.</Text>

              <Image source={imgcalculo} style={{ justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 50 }} />
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
        source={imgmarrom}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          width: "100%"
        }}>
        <View style={styles.container}>
          <View style={styles.content}>


            <ScrollView>

              <Image source={imgeu} style={{ borderRadius: 900, justifyContent: 'center', width: 300, height: 350, alignSelf: "center", marginTop: 100 }} />
              <Text></Text>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Ana Laura de Souza Fernandes
              </Text>
              <Text style={{
                fontSize: 18,
                textAlign: 'center',
              }}>Tel: (18) 93618-9244</Text>
              <Text style={{
                fontSize: 18,
                textAlign: 'center',
              }}>Numero: 01</Text>
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
