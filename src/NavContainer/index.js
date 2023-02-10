import * as React from 'react';
import MainRoute from '../navigation/MainRoute'
import { NavigationContainer } from '@react-navigation/native';


class NavContainer extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <MainRoute/>
            </NavigationContainer>
        );
    }
}

export default NavContainer;