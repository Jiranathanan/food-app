import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import { YELP_API_KEY } from '@env';
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        } catch (error) {
        console.log(error);
        }
    }

    return <View >
        <Text> API KEY IS: {YELP_API_KEY}</Text>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={searchApi}
            />
        <Text style={{ marginLeft: 40}}>
                {term.length > 0 
                    ? <>You are searching for <Text style={styles.termStyle}>{term}</Text></>
                    : null
                }
        </Text>
        <Text style={{ marginLeft: 20 }}>We have found {results.length} results</Text>
    </View>
}

const styles = StyleSheet.create({
    termStyle: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default SearchScreen;