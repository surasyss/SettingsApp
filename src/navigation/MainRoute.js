import * as React from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Modal from "react-native-modal";


import Icon from 'react-native-vector-icons/Ionicons';
import FilesIcon from 'react-native-vector-icons/FontAwesome';
import PaymentIcon from 'react-native-vector-icons/Ionicons';
import ItemIcon from 'react-native-vector-icons/SimpleLineIcons';
import MoreIcon from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import DownIcon from 'react-native-vector-icons/EvilIcons';


import Home from '../container/HomeScreen';
import Invoices from '../container/InvoicesScreen';
import Items from '../container/ItemsScreen';
import Payments from '../container/PaymentsScreen';
import SettingsScreen from '../container/SettingsScreen';
import CreditsScreen from "../container/CreditsScreen";
import OthersScreen  from "../OtherScreens/StackIcons";
import style from "./style";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function ParentNavBar(){

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    function _onPressButton(){
        setIsModalVisible(() => !isModalVisible);
    }

    const Item = ({title, navigation}) => (
        
            <TouchableOpacity  
                onPress={() => {  navigation.navigate('More', { screen: title.name }); } } 
                >
                <View style={style.listItem}  onPress={() => _onPressButton()} >
                    {title.Icon}
                    <Text  style={style.listItemText} >{title.name}</Text>
                </View>
                
            </TouchableOpacity>
    );

    const PopUpBottom = ({ navigation }) => {

        return(
                <View style={style.popContainer}>
                    <Modal isVisible={isModalVisible}
                        swipeDirection="down"
                        onSwipeComplete={(e) => { setIsModalVisible(false); }}
                        style={style.modelStyle} >
                        <View style={style.modelPopup}>
                            <DownIcon name="chevron-down" color='black' size={45}  />
                            <FlatList
                                data={OthersScreen}
                                renderItem={({item}) => <Item title={item} navigation={navigation}/>}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </Modal>
                </View>
        )
    }

    function More() {


        return (
            <Stack.Navigator initialRouteName="PopUpBottom" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="PopUpBottom" component={PopUpBottom} />
                <Stack.Screen name="CreditsScreen" component={CreditsScreen} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            </Stack.Navigator>
        );


    }

    const UesrIconDiv = () => {
        return (
            <TouchableOpacity style={style.userIconView}  >
                <UserIcon name="user" color='#ffff' size={45}  />
            </TouchableOpacity>
        )
    }


    return(
        <Tab.Navigator screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#00AEEF',
                tabBarInactiveTintColor: '#98AFC7',
                headerStyle: style.parentHeader,
                headerTitleStyle: style.parentHeaderTitle,
                headerTitleAlign: 'center',
                headerLeft: () => ( <UesrIconDiv />  ), 
                tabBarStyle: style.parentBottomTab,
                tabBarLabelStyle: style.parentHeaderText
            })}>
                <Tab.Screen name="Home" options={{
                    tabBarIcon: ({ color }) => ( <Icon name="home-outline" color={color} size={26} /> )
                    }} 
                    component={Home} 
                />

                <Tab.Screen name="Invoices" options={{

                    tabBarIcon: ({ color }) => ( <FilesIcon name="file-o" color={color} size={22} /> )
                    }}
                    component={Invoices} 
                />

                <Tab.Screen name="Payments" options={{

                    tabBarIcon: ({ color }) => (
                    <PaymentIcon name="ios-chatbox-outline" color={color} size={26} />
                    )
                    }} 
                    component={Payments} 
                />

                <Tab.Screen name="Items" options={{
                    tabBarIcon: ({ color }) => ( <ItemIcon name="fire" color={color} size={26} /> )
                    }}
                    component={Items} 
                />
                <Tab.Screen name="More" options={{
                        tabBarIcon: ({ color }) => ( <MoreIcon name="more-horizontal" color={color} size={26}  /> )
                        }}
                        component={More}
                        listeners={() => ({
                            tabPress: event => {
                                event.preventDefault();
                                _onPressButton();
                            }
                        })}
                    />
        </Tab.Navigator>
    );

};

export default ParentNavBar;

