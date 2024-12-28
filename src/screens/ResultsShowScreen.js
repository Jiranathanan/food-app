import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        // console.log(response.data);
        setResult(response.data);
        // console.log(result);
    }

    useEffect( () => {
        getResult(id);
    }, [])

    if (!result) {
        return <View><Text>Loading...</Text></View>;
    }

    return <View>
        <Text>ResultsShowScreen id: {id}</Text>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={ ({ item }) => {
                return ( 
                <Image style={styles.image} source={{ uri: item}} /> 
                    )
                } 
            }
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 250, 
        height: 120, 
        marginTop: 1, 
        paddingHorizontal: 1,
        borderRadius: 4,
        marginBottom: 5
    }
});

export default ResultsShowScreen;

