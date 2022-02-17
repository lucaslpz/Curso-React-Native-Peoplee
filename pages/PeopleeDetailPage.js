import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,

} from 'react-native'

import Line from '../components/Line';
export default class PeopleeDetailPage extends React.Component{
    render(){
        const { peoplee } = this.props.navigation.state.params;

        return(
            <View style = {styles.container}>
                <Image 
                    source={{ uri: peoplee.picture.large}}
                    style={styles.avatar}/>
                <View style={styles.detailContainer}>                   
                    <Line label="Email:" content={ peoplee.email} />
                    <Line label="Cidade:" content={ peoplee.location.city} />
                    <Line label="Estado:" content={peoplee.location.state}/>
                    <Line label="Tel:" content={peoplee.phone}/>
                    <Line label="Cel:" content={peoplee.cell}/>
                    <Line label="Nacionalidade:" content={peoplee.nat}/>                                                            
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,

    },
    avatar:{
        aspectRatio: 1
    },
    detailContainer:{
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation:1,
    },
    

});