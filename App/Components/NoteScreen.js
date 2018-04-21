import React, {Component} from 'react'
import {TextInput, Text, View, StyleSheet} from 'react-native'

export default class NoteScreen extends Component {
    constructor(props) {
        super(props)

        const navState = this.props.navigation.state
        this.state = navState.params ? navState.params.note : {}
    }

    updateNote = (title, body) => {
        this.setState({
            title,
            body
        })

        //this.props.saveNote({ title, body, })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create a new note</Text>
                <TextInput
                    underlineColorAndroid="transparent"
                    autoCapitalize="words"
                    ref="title"
                    autoFocus={true}
                    onEndEditing={() => this.refs.body.focus()}
                    placeholder="Title"
                    style={styles.title}
                    value={this.state.title}
                    onChangeText={title => this.updateNote(title, this.state.body)}
                />
                <TextInput
                    textAlignVertical="top"
                    underlineColorAndroid="transparent"
                    ref="body"
                    placeholder="Details"
                    multiline={true}
                    style={styles.body}
                    value={this.state.body}
                    onChangeText={body => this.updateNote(this.state.title, body)}
                />
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