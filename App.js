/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import NoteScreen from './App/Components/NoteScreen'
import SimpleButton from './App/Components/SimpleButton'

const home = props => {
    return <SimpleButton navigation={props.navigation}/>
}


home.navigationOptions = {
    title: 'Home Screen'
}

const SimpleApp = StackNavigator(
    {
        Home: { screen: home },
        SecondScreen: { screen: NoteScreen, title: "Second Screen" }
        //Home: { screen: NoteScreen, title: "Second Screen" }
    }
)

export default SimpleApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(30, 230, 230)',
    },
})