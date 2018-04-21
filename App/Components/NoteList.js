import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native'

export default class NoteList extends Component {
    constructor(props) {
        super(props)
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }

    editNote = (note) => {
        this.props.navigation.navigate(
            'SecondScreen',
            {
                note
            }
        )
    }

    render() {
        //TODO: if no notes, render this instead <Text style={styles.noNotesText}>No Notes Found ( Yet! )</Text>
        return (
            <ListView
                dataSource={
                    this.ds.cloneWithRows([
                        { title: "Note 1", body: "Body 1", id:1 },
                        { title: "Note 2", body: "Body 2", id:2 },
                    ])
                }
                renderRow={ rowData => (
                    <TouchableHighlight onPress={() => this.editNote(rowData)}>
                        <Text>{rowData.title}</Text>
                    </TouchableHighlight>
                )}
            />
        )
    }

}