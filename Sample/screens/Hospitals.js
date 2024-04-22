import React, { useState } from 'react';
import { Text, TextInput, View, Button, FlatList ,TouchableOpacity,Linking, ImageBackground} from 'react-native';
import { useRoute } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

export default function Hospitals({ route }) {
    const { selectedCity } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    const[isHovered, setIsHovered]=useState('');

    function map(item){
        const mapurl=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;
         Linking.openURL(mapurl);
     }
   
    const cityData = require('./data.json');
    const Hospitals = cityData[selectedCity.name].Hospitals;
    

    const filterHospitals = (Hospitals) => {
        return Hospitals.name.toLowerCase().includes(searchQuery.toLowerCase());
    };

    return (
        <ImageBackground source={require('./Hospital.jpeg')} >
        <View style={{backgroundColor:"transparent"}}>
            <View style={{ top: 15, width: 350, left: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <TextInput
                    style={{
                        flex: 1,
                        borderWidth: 2,
                        borderColor: 'black',
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        height: 40,
                    }}
                    placeholder='Search Attractions'
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <Button title='Search' onPress={() => {}} />
            </View>
            <View style ={{top:10, height: 40, alignContent:"center",backgroundColor:"aqua", borderColor:"gray", borderWidth:1, borderRadius: 25}}>
            <Text style ={{top: 10, alignSelf:"center", fontWeight:"bold", color:"teal"}}>{selectedCity.name}</Text>
            </View>
            <View style={{top:20,borderBlockColor:"gray", height:500}}>
            <FlatList
                 data={Hospitals.filter(filterHospitals)}
                keyExtractor={(item) => item.name}
                 renderItem={({ item, index }) => (
                // <View style={{ marginBottom: 20 }}>
                <TouchableOpacity onPressIn={()=>setIsHovered(true)}
                onPressOut={()=> setIsHovered(false)}
                onPress={()=>map(item)}>
                <View style={{ backgroundColor: index%2==0?"white":"#D6EDFF",padding:10,marginBottom:20, borderRadius: 10, elevation: 3 }}>
                <Text style={{ color: "#0077CC", fontSize: 20, marginBottom: 5 }}>{item.name}</Text>
                <Text>Address:</Text>
                <Text style={{ color: "black",fontSize:16 }}>{item.address}</Text>
                </View>
                </TouchableOpacity>
                )}
            />

           </View>
        </View>
        </ImageBackground>
    );
}

