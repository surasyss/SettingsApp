import * as React from 'react';
import { Text, View, Switch } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ width: '100%', height: 55, backgroundColor:'#E4EBF5',
                marginTop: 10,  justifyContent: 'center', paddingLeft: 25}}>
                <Text style={{ fontSize: 18, color: '#0e87cc' }}>Notifications</Text>
            </View>
            <View style={{ width: '100%', height: 55,opacity: 0.4, backgroundColor:'#E4EBF5',
                justifyContent: 'center', alignItems: 'center', paddingRight: 18, flexDirection: 'row'}}>
                <Text style={{ fontSize: 14 }}>All notifications for speed management </Text>
                <Switch  style={{ marginLeft: 30}}
                    value={true} /> 
            </View>
        </View>
    )
}

export default SettingsScreen;