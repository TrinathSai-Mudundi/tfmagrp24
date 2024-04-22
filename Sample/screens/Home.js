import React, { useState ,useEffect} from "react";
import { BackHandler,ImageBackground, View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal, Alert, Dimensions } from 'react-native';
import Attractions from "./Attractions";
import { useRoute } from "@react-navigation/native"

export default function Home({navigation}){
   
  const data = require('./Cities.json');
    
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [showCityModal, setShowCityModal]=useState(false);


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  function allcities(){
    const allcity = data.filter(item=> item.name.toLowerCase())
    setFilteredCities(allcity);
    setShowCityModal(true);
  };


  const handleSearch = () => {
    if (searchInput.length >= 1) {
      const filteredData = data.filter(item =>
        item.name.toLowerCase().startsWith(searchInput.toLowerCase())
      );
      filteredData.sort((a, b) => {
        const aIndex = a.name.toLowerCase().indexOf(searchInput.toLowerCase());
        const bIndex = b.name.toLowerCase().indexOf(searchInput.toLowerCase());
        return aIndex - bIndex;
      });
      setFilteredResults(filteredData);
      setShowResultsModal(true); 
    } else {
      setFilteredResults([]);
      setShowResultsModal(false); 
    }
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setSearchInput('');
    setFilteredResults([]);
    setShowResultsModal(false); 
    setShowCityModal(false);
  };

  const handleCloseModal = () => {
    setShowResultsModal(false);
    setFilteredResults([]);
    setShowCityModal(false);
  };

  const handleRemoveCity = () => {
    setSelectedCity(null);
  };

  const confirmRemoveCity = () => {
    Alert.alert(
      'Remove City',
      `Are you sure you want to remove ${selectedCity?.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: handleRemoveCity,
          style: 'destructive',
        },
      ]
    );
  };
  function navigate() {
        
    navigation.navigate('Attractions',{selectedCity});
  };
  return (
    <ImageBackground source={require('./location2.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Local Findings</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search....'
            value={searchInput}
            onChangeText={text => setSearchInput(text)}
          />
          <Button
            title='Search'
            onPress={handleSearch}
          />
        </View>
        <View style={styles.textContainer}>
          {selectedCity == null ? (
            <View style={styles.selectcitycont}>
              <Button style={styles.selectcitytext} title="Select the Cities"
              onPress={allcities}/>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.attractionButtoncontain}
              onPress={navigate}
            >
              <Text style={{fontWeight:"bold"}}>Attractions</Text>
            </TouchableOpacity>
          )}

          {selectedCity == null ? (
            <Text style={styles.textStyle}></Text>
          ) : (
            <TouchableOpacity
              style={styles.hospitalbuttoncontain}
              onPress={()=>navigation.navigate('Hospitals',{selectedCity})}
            >
              <Text style={{fontWeight:"bold"}}>Hospitals</Text>
            </TouchableOpacity>
          )}

          {selectedCity == null ? (
            <Text style={styles.textStyle}></Text>
          ) : (
            <TouchableOpacity
              style={styles.Businessbuttoncontain}
              onPress={()=>navigation.navigate('Business',{selectedCity})}
            >
              <Text style={{fontWeight:"bold"}}>Business</Text>
            </TouchableOpacity>
          )}

          {selectedCity == null ? (
            <Text style={styles.textStyle}></Text>
          ) : (
            <TouchableOpacity
              style={styles.Restaurantbuttoncontain}
              onPress={()=> navigation.navigate('Restaurants',{selectedCity})}
            >
              <Text style={{fontWeight:"bold"}}>Restaurants</Text>
            </TouchableOpacity>
          )}

          {selectedCity !== null && (
            <View style={styles.CityMainContainer}>
              <Text style={styles.cityMaintext}>Main Attraction of {selectedCity.name}</Text>

              <Text style={{fontWeight: "bold",fontSize: 16, top:20, color:"#07979c"}}>Speciality :{selectedCity.speciality}</Text>
            </View>
          )}
        </View>
        
        <Modal
          visible={showResultsModal}
          animationType="fade"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={filteredResults}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelectCity(item)}>
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id.toString()}
            />
            <Button title="Cancel" onPress={handleCloseModal} />
          </View>
        </Modal>

        <Modal
          visible={showCityModal}
          animationType="fade"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer1}>
            <FlatList
              data={filteredCities}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelectCity(item)}>
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id.toString()}
            />
            <Button title="Cancel" onPress={handleCloseModal} />
          </View>
        </Modal>
        {selectedCity && (
          <TouchableOpacity
            style={styles.selectedCityContainer}
            onPress={confirmRemoveCity}
          >
            <Text style={styles.selectedCityText}>{selectedCity.description}</Text>
            
          </TouchableOpacity>
        )}
      </View>
      {/* <Button title="Exit" onPress={handleExitButtonPress} /> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    top: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgb(208, 219, 184)',
    borderColor: "gray",
    borderWidth:0.5,
    height: 40,
    borderRadius:100,
  },
  title: {
    fontSize: 24,
    color: '#07979c',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  searchContainer: {
    top: 15,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black'
  },
  selectedCityContainer: {
    position: 'absolute',
    top: 30,
    right: 10,
    backgroundColor: 'yellow',
    borderColor: "Gray",
    borderWidth:0.5,
    padding: 9,
    borderRadius: 1000,
  },
  selectedCityText: {
    fontWeight:"bold",
    fontSize: 18,
    color: "#07979c",
  },
  modalContainer: {
    position: "absolute",
    top: '40%',
    left: '13%',
    width: 300,
    height: 200,
    borderRadius: 30,
    backgroundColor: '#F3FBFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  modalContainer1: {
    position: "absolute",
    top: '40%',
    left: '13%',
    width: 300,
    height: 400,
    borderRadius: 30,
    backgroundColor: '#F3FBFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  textContainer: {
    backgroundColor: "White",
  },
  textStyle: {
    color: "black",
  },
  attractionButtoncontain:{
    top: 20,
    padding: 20,
    borderColor:"Black",
    backgroundColor:"rgb(186, 224, 225)",
    alignItems:"center",
    borderRadius: 100,
    width: '100%',
  },
  hospitalbuttoncontain:{
    top: 30,
    padding: 20,
    borderColor:"Black",
    backgroundColor:"rgb(186, 224, 225)",
    alignItems:"center",
    borderRadius: 100,
    width: '100%',
  },
  Businessbuttoncontain:{
    top: 40,
    padding: 20,
    borderColor:"Black",
    backgroundColor:"rgb(186, 224, 225)",
    alignItems:"center",
    borderRadius: 100,
    width: '100%',
  },
  Restaurantbuttoncontain:{
    top: 50,
    padding: 20,
    borderColor:"Black",
    backgroundColor:"rgb(186, 224, 225)",
    alignItems:"center",
    borderRadius: 100,
    width: '100%',
  },
  CityMainContainer: {
    top: 80,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgb(208, 219, 184)',
    borderColor: "gray",
    borderWidth:0.5,
    height: 100,
    borderRadius:20,
  },
  cityMaintext:{
    top: 10,
    fontSize: 20,
    fontFamily:'cursive',
    // fontWeight:"bold",
    color: 'black',
    fontFamily: 'calibre',
  },
  selectcitytext:{
    top:10,
    fontSize: 24,
    alignItems: "center",
    color: '#07979c',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  selectcitycont:{
    top: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:"white",
    height: 50,
    borderRadius:20,
  }
});
