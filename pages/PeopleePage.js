import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import PeopleeList from '../components/PeopleeList';

import axios from 'axios';

export default class PeopleePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoplees: [],
      loading: false,
      error: false,

    };  
  }
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
          .get('https://randomuser.me/api/?nat=br&results=150'
              )
          .then(response=>{
            const { results } = response.data;
            this.setState({
              peoplees: results,
              loading: false,
            });
          }).catch(error => {
            this.setState({
              loading: false,
              error: true,
            })
          });
    }, 3500)
  }

  renderPage(){    
    if (this.state.loading){
      return <ActivityIndicator size="large" color="#6ca2f7"/>;
    }
    if(this.state.error){
      return <Text style={styles.error}> Ops.. Algo deu errado =( </Text>;
    }

      return (
        <PeopleeList
          peoplees={this.state.peoplees}
          onPressItem={pageParams => {
            this.props.navigation.navigate('PeopleeDetail', pageParams);
          }}/>  
      );
  }
   
  render() {
    return(
      <View style={styles.container}>
        { this.renderPage() }
        {/*
          this.state.loading
            ? <ActivityIndicator size="large" color="#6ca2f7"/>
            : this.state.error
              ? <Text style={styles.error}> Ops.. Algo deu errado =( </Text>
              :<PeopleeList
                  peoplees={this.state.peoplees}
                  onPressItem={pageParams => {
                    this.props.navigation.navigate('PeopleeDetail',
                     pageParams);
                  }}/>
          */}         
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error:{
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
    
  }
});
