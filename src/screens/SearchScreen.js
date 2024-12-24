import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
// import { YELP_API_KEY } from '@env';
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    // console.log(results[0].price);
    // results.forEach(result => console.log(result.price) )
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter( result => {
            return result.price === price;
        })
    }

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
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big spender" results={filterResultsByPrice('$$$')} />
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