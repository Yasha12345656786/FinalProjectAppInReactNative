
import React from 'react'
import { View,Text,TouchableOpacity,Modal } from 'react-native'
function GameExitModal({visible,onExit,onContinue}) {
  return (
    <Modal
    visible={visible}
    transparent={true}
    animationType='slide'
    onRequestClose={()=>{}}
    >
        <View style={{
            flex:1,
            justifyContent:'center',
            alignContent:"center"
        }}>
            <View style={{backgroundColor:"white", padding:20,borderRadius:10}}>
                <Text> Do you want to exit the game?</Text>
                <TouchableOpacity onPress={onExit}>
                    <Text>Exit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onContinue}>
                    <Text>continue</Text>
                </TouchableOpacity>
            </View>

        </View>

    </Modal>
  )
}

export default GameExitModal