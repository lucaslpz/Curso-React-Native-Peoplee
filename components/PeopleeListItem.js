import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { capitalizeFirstLetter } from '../util';

const PeopleeListItem = props => {
    const { peoplee, navigateToPleopeeDetail } = props;
    const { title, first, last } = peoplee.name;
    return (
        <TouchableOpacity onPress={() => {
            console.log('Clicou em mim!!!', first);
            navigateToPleopeeDetail({peoplee});
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: peoplee.picture.thumbnail 
                }} />
                <Text style={styles.lineText}>
                    {`${capitalizeFirstLetter(title)
                    } ${capitalizeFirstLetter(first)
                    } ${capitalizeFirstLetter(last)
                    }`}
                </Text>
            </View>
        </TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7

    },
    avatar: {
        aspectRatio: 1,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50
    }
});
export default PeopleeListItem;