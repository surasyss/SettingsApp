import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import DownIcon from 'react-native-vector-icons/EvilIcons';


const PopUpBottom = ({ navigation }) => {

    let [ShowComment, setShowModelComment] = React.useState(false);

    React.useEffect(() => {
        setShowModelComment(true);
      }, [])

    const PopUpBottom = ({ navigation }) => {
        return(
            <Modal isVisible={ShowComment}
                swipeDirection="down"
                //swipeDirection={["up", "down", "left", "right"]}
                onSwipeComplete={(e) => { setShowModelComment(false); }}
                style={{ justifyContent: 'flex-end', margin: 0, }} >
                <View style={{ alignItems: 'center', backgroundColor: '#ffff', height: '33%' }}>
                    <DownIcon name="chevron-down" color='black' size={45}  />
                    {/* <Text style={{ fon}}>Settings Modal</Text> */}
                    <TouchableOpacity style={{ width : '100%', height: 45, backgroundColor: '#F5F5F5', paddingLeft: 20, paddingTop: 7}}
                        onPress={() => navigation.navigate('More', { screen: 'SettingsScreen' }) }
                    >
                        {/* <SettingIcon name="settings" color='balck' size={25}  /> */}
                        <Text style={{ color: '#0e87cc',  fontSize: 18,  }}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <PopUpBottom />
            <Text style={{ fontSize: 20 }}>HomeScreen</Text>
        </View>
    )
}

export default PopUpBottom;