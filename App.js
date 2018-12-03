import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import MomentList from './src/components/MomentList/MomentList';
import MomentInput from './src/components/MomentInput/MomentInput';

export default class App extends Component {
  state = {
    moments: []
  };

  momentAddedHandler = (momentName) => {
    this.setState(prevState => {
      return {
        moments: prevState.moments.concat(momentName)
      };
    });
  };

  
  render() {
       return (
      <View style={styles.container}>
        <MomentInput onMomentAdded={this.momentAddedHandler} />
        <MomentList moments={this.state.moments} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
  
});
