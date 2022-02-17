import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PeopleeListItem from './PeopleeListItem.js'
//import PeopleeListItem from './PeopleeListItem.js';

const PeopleeList = props => {
    const { peoplees, onPressItem } = props;

    return(
    <FlatList 
        style={styles.container}
        data={peoplees}
        renderItem={({ item }) => (
            <PeopleeListItem
                peoplee={item} 
                navigateToPleopeeDetail={onPressItem} />        
        )}  
        keyExtractor={item=> item.name.first} />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
});
export default PeopleeList;