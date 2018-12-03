import React from 'react';
import { View,StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem'

const momentList = (props) => {
    const momentsOutput = props.moments.map((moment, i) => (
        <ListItem key={i} momentName={moment} />
    ));
    return (
        <View style={styles.listContainer}>{momentsOutput}</View>
    );

};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }

});

export default momentList;
