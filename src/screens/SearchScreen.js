import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
// import { YELP_API_KEY } from '@env';
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage('Ops ! Something went wrong');
        }
    }

    useEffect( () => {
        searchApi('pasta');
        console.log('Searching...')
    }, [])

    return <View >
        {/* <Text> API KEY IS: {YELP_API_KEY}</Text> */}
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={() => searchApi(term)}
            />
        <Text style={{ marginLeft: 40}}>
                {term.length > 0 
                    ? <>You are searching for <Text style={styles.termStyle}>{term}</Text></>
                    : null
                }
        </Text>
        {errorMessage ? <Text style={{color: 'purple', marginLeft: 20}}>{errorMessage}</Text> : null}
        {results.length > 0 ? <Text style={{ marginLeft: 40 }}>We have found {results.length} results</Text> : null}
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