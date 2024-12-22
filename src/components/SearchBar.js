import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const SearchBar = () => {
    return <View style={styles.background}>
            <EvilIcons name="search" style={styles.iconStyle} />
            <TextInput placeholder="Search" style={styles.inputStyle} />
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
    },
    iconStyle: {
        fontSize: 40,
        color: 'grey',
        // alignSelf: 'center',
        marginVertical: 4, 
        marginLeft: 4 
    },
    inputStyle: {
        marginVertical: 'auto',
        marginLeft: 14,
        fontSize: 18,
        flex: 1
    }
});

export default SearchBar;