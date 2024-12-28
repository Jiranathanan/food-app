import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
// import { YELP_API_KEY } from '@env';
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ( { navigation } ) => {
    // console.log(navigation);
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
    // Add Flex: 1 into Container View to fix ScrollView issue on Android
    return (
    <>
        {/* <Text> API KEY IS: {YELP_API_KEY}</Text> */}
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={() => searchApi(term)}
            />
        {errorMessage ? <Text style={{color: 'purple', marginLeft: 20}}>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} navigation={navigation} />
            <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} navigation={navigation} />
            <ResultsList title="Big spender" results={filterResultsByPrice('$$$')} navigation={navigation} />
            <ResultsList title="Supreme" results={filterResultsByPrice('$$')} navigation={navigation} />
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    termStyle: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default SearchScreen;