import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const SearchBar = () => {
    return <View style={styles.background}>
        <View style={{ marginVertical: 4, marginLeft: 4}}>
            <EvilIcons name="search" size={40} color="black" />
        </View>
        <View style={{ marginVertical: 'auto', marginLeft: 14}}> 
            <TextInput placeholder="Search"/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        // justifyContent: 'center',
        backgroundColor: 'rgba(231, 228, 228, 0.95)',
        height: 50,
        width: '88%', 
        borderRadius: 5,
        marginHorizontal:'auto',
        marginTop: 18 
    }
});

export default SearchBar;