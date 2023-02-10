import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar, View } from 'react-native';
import NavContainer from './NavContainer';

class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={false} backgroundColor="#4285F4"/>
                <NavContainer/>
            </View>
        );
    }
}

export default App;