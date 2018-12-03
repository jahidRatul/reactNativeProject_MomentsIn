import React,{Component} from 'react';
import { TextInput, StyleSheet, View, Button} from 'react-native';

class MomentInput extends Component { 
    state = {
        momentName:""
    };

    momentNameChangeHandler = val => {
        this.setState({
            momentName: val
        });
    };
    momentSubmitHandler = () => {
        if (this.state.momentName.trim() === "") {
            return;
        }

        this.props.onMomentAdded(this.state.momentName);
       
    };



    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.momentInput}

                    placeholder="name your Moment "
                    value={this.state.momentName}
                    onChangeText={this.momentNameChangeHandler}
                />
                <Button title="Add" style={styles.momentButton} onPress={this.momentSubmitHandler}
                />
            </View>
        );
            
    }

}
const styles = StyleSheet.create({
      inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    momentInput: {
        width: "70%"
    },
    momentButton: {
        width: "30%"
    },



}); 

export default MomentInput;