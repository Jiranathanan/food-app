import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return <View>
                <Image 
                    style={{ width: 160, height: 90, marginTop: 1, paddingHorizontal: 1}}
                    source={{ uri: result.image_url}} />
                <Text>{result.name}</Text>
                <Text>Rating: {result.rating}</Text>
            </View>
}

const  styles = StyleSheet.create({});

export default ResultsDetail;