import React, {Component} from 'react'
import {TextInput, Text, View, StyleSheet} from 'react-native'

export default class NoteScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create a new note</Text>
                <TextInput ref="title" autoFocus={true} onEndEditing={() => this.refs.body.focus()} placeholder="Title" style={styles.title}/>
                <TextInput ref="body" placeholder="Details" multiline={true} style={styles.body}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    title: {
        backgroundColor: 'white',
        width: '80%',
        height: 40,
        borderRadius: 10,
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        width: '80%',
        margin: 20,
        borderRadius: 10,
    },
    header: {
        marginBottom: 10
    }
})