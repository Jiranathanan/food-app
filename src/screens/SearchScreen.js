import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import { YELP_API_KEY } from '@env';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return <View >
        <Text>{YELP_API_KEY}</Text>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={() => console.log('term was submitted')}
            />
        <Text style={{ marginLeft: 40}}>
                {term.length > 0 
                    ? <>You are searching for <Text style={styles.termStyle}>{term}</Text></>
                    : null
                }
        </Text>
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