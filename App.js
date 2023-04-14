import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

  export default function App(){

    const[pay, setpay] = useState([
      {forma: 'Cartão', key: 1, icon: 'card-outline'},
      {forma: 'Pix', key: 2, icon: 'cash-outline'},
      {forma: 'Dinheiro', key: 3, icon: 'wallet-outline'},
    ]);
    const[add, setAdd] = useState([
      {adicionar: 'Adicionar forma de pagamento', key: 4},
      

    ])
    const handlePaymentOption = (option) => {
      console.log(option.name + ' selecionado');
    };
   
    return(
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Opções de Pagamento</Text>
      </View>
      
    
        <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={pay}
        renderItem= {({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePaymentOption(item)}>
            <View style={styles.option}>
            <Ionicons name={item.icon} size={24} color="#8c43ff" />
            <Text style={styles.optionText}>{item.forma}</Text>
            </View>
          </TouchableOpacity>
          

        )}
        />
        <FlatList
        numColumns = {1}
        keyExtractor = {(item) => item.key}
        data={add}
        renderItem={({item}) =>(

          <TouchableOpacity style={styles.item} onPress={() => handlePaymentOption(item)}>
            <View style={styles.addOption}>
            <Ionicons name="add-circle" size={30} color="#8c43ff" />
            <Text style={styles.addOptionText}>Adicionar Forma de Pagamento</Text>
            </View>
          </TouchableOpacity>
        ) } ></FlatList>
         
      </View>
       
                

    );



  }

  

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    height: 100,
    backgroundColor: '#5E17EB',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#9D94FF',
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 20,
  },
  addOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:500,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#9D94FF',
    width: '100%',
    
  },
  addOptionText: {
    fontSize: 16,
    marginLeft: 20,
    color: '#5E17EB',
  },
  

   
});