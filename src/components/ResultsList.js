import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    return <View>
        <Text style={styles.title}>{ title }</Text>
        <Text>Results: {results.length}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={ ({ item }) => {
                return (
                <View style={{marginTop: 4, marginBlock: 24, borderWidth: 1, borderColor: 'black', backgroundColor: 'salmon', width: 162, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <View>
                        <ResultsDetail result={item}/>
                    </View>
                </View>
            ) } }
         />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;

