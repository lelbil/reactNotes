/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation'

import NoteScreen from './App/Components/NoteScreen'
import SimpleButton from './App/Components/SimpleButton'

const home = props => {
    return <SimpleButton navigation={props.navigation}/>
}


home.navigationOptions = {
    title: 'Home Screen',
}

const SimpleApp = StackNavigator(
    {
        Home: { screen: home },
        SecondScreen: { screen: NoteScreen, title: "Second Screen" }
    },
    {
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#5B29C1',
            }
        }
    }
)

export default SimpleApp