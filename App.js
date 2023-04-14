import React, { Component } from 'react';
import { StyleSheet, View, Text,Image, SafeAreaView, Button } from 'react-native';
import MapView,  { PROVIDER_GOOGLE } from 'react-native-maps';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const PanicButton = () => {
  
};





class MapScreen extends Component {
  render() {
    return (

    <ScrollView>

      <View style={styles.container}>


            <MapView
            
            
            provider={PROVIDER_GOOGLE}
            style={styles.mapDois}
            initialRegion={{
            latitude: -8.05428,
            longitude: -34.8813,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
            showsCompass={true}
            showsScale={true}
            showsTraffic={true}
            showsBuildings={true}
            showsIndoors={true}>
            </MapView>


            <View style={styles.caixa}>
            <View style={styles.partida}>
            <MaterialIcons name="my-location" size={24} color="black" />
              <Text style={styles.partText}>Av.Gov.Agamenon Magalhães</Text>
            </View>
            <View style={styles.destino}>
            <Ionicons name="location" size={24} color="black" />
              <Text style={styles.desText}>Shopping Rio Mar</Text>
            </View>


            <View style={styles.car}></View>
            <Text style={styles.carro}>Chevrolet Onix - PLC1546</Text> 

            <View style={{ display: 'flex', flexDirection: 'row', borderTopWidth: 2, borderTopEndRadius: 20, borderTopStartRadius: 20, borderBottomWidth: 1 }}>
            <Text style={styles.Text}>  Preço</Text>
            <Text style={styles.Text}>Distância</Text>
            <Text style={styles.Text}>Tempo</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' , borderBottomWidth: 2, borderRadius: 20}}>
            <Text style={styles.Text}> $10.00</Text>
            <Text style={styles.Text}> 6.4 KM</Text>
            <Text style={styles.Text}> 16 MIN</Text>
            </View>
            
            <Button style={styles.button} title="Botão do Pânico" onPress={PanicButton} color={'red'} />


              <SafeAreaView >
              <Image style={styles.img} source={require('./assets/motorista.png')}></Image>
              </SafeAreaView>

               <View>
                <Text style={styles.nome}>Aline Souza</Text>
                <Text style={styles.carro}>Chevrolet Onix - PLC1546</Text>
                <Text style={styles.num}>(81) 99962-4585</Text>
               </View>


              <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style ={styles.info}> 4.96 <Entypo name="star" size={24} color="#FFD700" /></Text> 
              <Text style ={styles.info}> 1 ano </Text>
              <Text style ={styles.info}> 462 corridas </Text>
              </View>
              
              
            </View>

      </View>
      
    </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 200
  },

  mapDois:{
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 670

  },
  partida:{
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 0
  },
  destino:{
    padding: 20,
    borderBottomWidth: 2,
    borderRadius: 9
  },
  
  caixa:{
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 8,
    margin: 10,
    width: 390,
    borderRadius: 20,
    backgroundColor: '#EAEFFF',
      
  },
  img:{
   width: 180,
   height: 115,
   marginLeft: 95,
   marginTop: 120,

  },
  nome:{
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 110

    
  },
  carro:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom:10 ,
    marginLeft: 85,
    

  },
  info:{
   fontSize: 18,
   fontWeight: 'bold',
   marginRight: 20,
   paddingRight: 40
  
  
  },
  car:{
    padding: 20
  },

  Text:{
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 55,
    
  },
  num:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom:15 ,
    marginLeft: 115,
  },
  
  

   
});





export default MapScreen;