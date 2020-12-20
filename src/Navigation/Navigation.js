
import React from 'react';
import {Image} from 'react-native';

import Home from '../Components/Home/Home';
import Cards from '../Components/Cards/Cards';

import HomeIcon from '../../assets/home.png';
import CardsIcon from '../../assets/news.png';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="green"
            inactiveColor="white"
            barStyle={{ backgroundColor: '#009387' }}
            labeled={false}
        >
            <Tab.Screen
                name="Home"
                children={() => <Home />}
                options={
                    {
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <Image source={HomeIcon} style={{ width: 25, height: 25 }} />
                        )
                    }
                } />
            <Tab.Screen
                name="Cards"
                children={() => <Cards /> }
                options={
                    {
                        tabBarLabel: 'Photos',
                        tabBarIcon: () => (
                            <Image source={CardsIcon} style={{ width: 25, height: 25 }} />
                        )
                    }
                } />
        </Tab.Navigator>
    );
}

export default Navigation;
