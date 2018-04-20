import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class SimpleButton extends React.Component {
    render () {
        const { navigate } = this.props.navigation

        return (
            <View>
                <TouchableOpacity style={styles.container} onPress={ () => navigate("SecondScreen") }>
                    <View>
                        <Text style={styles.simpleButtonText}>New Note</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.noNotesText}>No Notes Found ( Yet! )</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: '#c12bc8',
        borderWidth: 2,

        shadowColor: 'rgb(80, 80, 80)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,

        alignItems: 'center',
        justifyContent: 'center',

        alignSelf: 'flex-end',
        margin: 15,
        backgroundColor: '#5B29C1',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    simpleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    noNotesText: {
        color: '#48209A',
        alignSelf: 'center',
        marginTop: '50%',
    }
})