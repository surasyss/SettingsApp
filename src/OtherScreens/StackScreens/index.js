


const Stack = createStackNavigator();


function More() {
        

    return (
        <Stack.Navigator initialRouteName="PopUpBottom" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PopUpBottom" component={PopUpBottom} />
            <Stack.Screen name="CreditsScreen" component={CreditsScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
    );


}